import { React, useContext, useState } from "react";
import { ContextCart } from "./CartContext";
import ItemListContainer from "./ItemListContainer";

const Cart = () => {
    const contexto = useContext(ContextCart);
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    const [changeQuantity, setChangeQuantity] = useState(false)
    const [updatedQuantity, setUpdatedQuantity] = useState(0)

    const deleteItem = (id) => {
        contexto.removeItem(id)
    }

    const updateItem = (item) => {
        setChangeQuantity(false);
        item.quantity = parseInt(updatedQuantity);
        contexto.updateItem(item.id, item)
    }

    return (
        <div className="divide-y divide-fuchsia-300">
            {contexto.itemsBag.length === 0 ? <ItemListContainer grettingUp="No hay items" grettingDown="agregados" banner="true"></ItemListContainer> :
                contexto.itemsBag.map(itemBag => {
                    return (
                        <div>
                            <div className="font-bold">
                                Item: {itemBag.title}
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
                            <div>
                                Precio por unidad: {formatter.format(itemBag.price)}
                            </div>
                            <div>
                                Precio: {formatter.format(itemBag.price * itemBag.quantity)}
                            </div>
                        </div>
                    )
                })
            }
            {contexto.itemsBag.length === 0 ??
                <div className="font-bold my-5 ">
                    Precio total {formatter.format(contexto.totalPrice)}
                </div>
            }
        </div>
    )
}

export default Cart
