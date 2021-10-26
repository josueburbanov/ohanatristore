import { React, useContext, useState } from "react";
import { ContextCart } from "./CartContext";
import ItemListContainer from "./ItemListContainer";
import { getFirestore } from '../firebase';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { useHistory } from "react-router-dom";

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

    const handleProcessPayment = (e) => {
        e.preventDefault();
        setLoading(false);
        const dataForm = new FormData(e.target);
        updateItemsBought() ? insertPaymentDb(dataForm) : alert("Some items are out of stock")
    }

    const insertPaymentDb = (dataForm) => {
        const db = getFirestore();
        const itemCollection = db.collection("orders")
        const newOrder = createOrder(dataForm.get('name'), dataForm.get('phone'),
            dataForm.get('email'));
        itemCollection.add(newOrder).then(response => {
            console.log("Item agregado con exito")
            contexto.clearItems();
            history.push("/");
        }).catch(err => {
            console.log("No se pudo agregar el item")
        })
    }

    const updateItemsBought = async () => {
        const db = getFirestore();
        console.log(contexto.itemsBag)
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
            console.log("There is item(s) out of stock" + outOfStock)
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
                        {contexto.itemsBag.length === 0 ? <ItemListContainer grettingUp="No hay items" grettingDown="agregados" banner="false"></ItemListContainer> :
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
                        <div className="text-right border rounded p-3 ">
                            <div className="font-bold ">Resumen de la orden</div>
                            <div>Items({contexto.totalItems}):     {formatter.format(contexto.totalPrice)}</div>
                            <div>Envío:     $0.00</div>
                            <div>Impuestos: $0.00</div>
                            <div className="font-bold my-5 ">
                                Total a pagar {formatter.format(contexto.totalPrice)}
                            </div>
                            <div className="text-white font-thin text-xs mt-1"
                                onClick={() => setActivatedPayment(true)}>Datos de factura</div>
                            <form onSubmit={(e) => handleProcessPayment(e)}>
                                <label for="name" className="font-thin">Nombre:</label>
                                <br />
                                <input required type="text" id="name" name="name" className="border rounded"></input>
                                <br />
                                <label for="phone" className="font-thin">Teléfono:</label>
                                <br />
                                <input required type="phone" id="phone" name="phone" className="border rounded"></input>
                                <br />
                                <label for="email" className="font-thin">Email:</label>
                                <br />
                                <input required type="email" id="email" name="email" className="border rounded"></input>
                                <br /><br />
                                <input className="inline-block text-sm ml-4 px-4 py-2 leading-none border rounded text-black font-semibold border-black hover:border-transparent hover:text-yellow-500 hover:bg-black mt-4 lg:mt-0" type="submit" value="Pagar">
                                </input>
                            </form>
                        </div>
                    }
                </div>
            }
        </div >
    )
}

export default Cart
