import { React, useContext, useState } from "react";
import { ContextCart } from "./CartContext";
import ItemListContainer from "./ItemListContainer";
import { getFirestore } from '../firebase';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { useHistory } from "react-router-dom";
import UserPayInfo from "./UserPayInfo";

const Cart = () => {
    const contexto = useContext(ContextCart);
    const [loading, setLoading] = useState(true);
    const [activatedPayment, setActivatedPayment] = useState(true);
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    const [changeQuantity, setChangeQuantity] = useState(false)
    const [updatedQuantity, setUpdatedQuantity] = useState(0)
    const history = useHistory();

    const deleteItem = (id) => {
        contexto.removeItem(id)
    }

    const updateItem = (item) => {
        setChangeQuantity(false);
        item.quantity = parseInt(updatedQuantity);
        contexto.updateItem(item.id, item)
    }

    const createOrder = (name, phone, email, date) => {
        const buyerOrder = {
            buyer: {
                name: name,
                phone: phone,
                email: email
            },
            items: contexto.itemsBag,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: contexto.totalPrice
        }
        return buyerOrder;
    }



    const insertPaymentDb = (dataForm) => {
        const db = getFirestore();
        const itemCollection = db.collection("orders")
        const newOrder = createOrder(dataForm.get('name'), dataForm.get('phone'),
            dataForm.get('email'));
        itemCollection.add(newOrder).then(response => {
            console.log(response.id)
            alert("Compra realizada, por favor guarde su número de compra: "+response.id)
            contexto.clearItems();
            history.push("/");
        }).catch(err => {
            alert("No se pudo agregar el item")
        })
    }

    const updateItemsBought = async () => {
        const db = getFirestore();
        const itemsToUpdate = db.collection("items").where(firebase.firestore.FieldPath.documentId(), 'in', contexto.itemsBag.map(i => i.id));
        const query = await itemsToUpdate.get();
        const batch = db.batch();
        const outOfStock = [];
        query.docs.forEach((docSnapshot, idx) => {
            if (docSnapshot.data().stock >= contexto.itemsBag[idx].quantity) {
                batch.update(docSnapshot.ref, { stock: docSnapshot.data().stock - contexto.itemsBag[idx].quantity })
            } else {
                outOfStock.push({ ...docSnapshot.data(), id: docSnapshot.id });
            }
        });
        if (outOfStock.length === 0) {
            await batch.commit();
            return true
        } else {
            return false
        }

    }

    return (
        <div>
            {!loading ?
                <div class=" flex justify-center items-center">
                    <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
                </div> :
                <div className="grid grid-cols-2 mx-32 ">
                    <div className="divide-y divide-fuchsia-300">
                        {contexto.itemsBag.length === 0 ? <ItemListContainer grettingUp="No hay items" grettingDown="agregados" banner={true}></ItemListContainer> :
                            contexto.itemsBag.map(itemBag => {
                                return (
                                    <div className="flex divide-y-8 ">
                                        <div className="">
                                            <img src={itemBag.pictureUrl} class="object-contain h-20 w-20" />
                                        </div>
                                        <div>
                                            <div className="font-bold flex justify-self-start">
                                                <div>Item: {itemBag.title}</div>
                                            </div>
                                            <div className="flex">
                                                {changeQuantity ?
                                                    <div className="flex">
                                                        <div>
                                                            Cantidad:
                                                        </div>
                                                        <input onChange={event => setUpdatedQuantity(event.target.value)} className="w-8 ml-1 rounded-full text-center" type="number" placeholder={itemBag.quantity} />
                                                        <div onClick={() => updateItem(itemBag)} className="cursor-pointer text-white font-thin text-xs mt-1">&nbsp;&nbsp;Actualizar</div>
                                                        <div onClick={() => setChangeQuantity(false)} className="cursor-pointer text-white font-thin text-xs mt-1">&nbsp;&nbsp;Cancelar</div>
                                                    </div> :
                                                    <div className="flex">
                                                        <div>
                                                            Cantidad: {itemBag.quantity}
                                                        </div>
                                                        <div onClick={() => setChangeQuantity(true)} className="cursor-pointer text-white font-thin text-xs mt-1">&nbsp;&nbsp;Cambiar</div>
                                                        <div onClick={() => deleteItem(itemBag.id, itemBag)} className="cursor-pointer text-white font-thin text-xs mt-1">&nbsp;&nbsp;Eliminar</div>
                                                    </div>}
                                            </div>
                                            <div className="">
                                                Precio por unidad: {formatter.format(itemBag.price)}
                                            </div >
                                            <div className="">
                                                Precio: {formatter.format(itemBag.price * itemBag.quantity)}
                                            </div>
                                        </div>

                                    </div>
                                )
                            })
                        }

                    </div>
                    {contexto.itemsBag.length === 0 ? <></> :
                        <UserPayInfo updateItemsBought={updateItemsBought} insertPaymentDb={insertPaymentDb} setActivatedPayment={setActivatedPayment}></UserPayInfo>
                    }
                </div>
            }
        </div >
    )
}

export default Cart
