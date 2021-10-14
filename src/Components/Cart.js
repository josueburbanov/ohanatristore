import { React, useContext } from "react";
import { ContextCart } from "./CartContext";

const Cart = () => {
    const contexto = useContext(ContextCart);
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    return (
        <div className="divide-y divide-fuchsia-300">
            {contexto.itemsBag.map(itemBag => {
                return (
                    <div>
                        <div className="font-bold">
                            Item: {itemBag.title}
                        </div>
                        <div>
                            Cantidad: {itemBag.quantity}
                        </div>
                        <div>
                            Precio por unidad: {formatter.format(itemBag.price)}
                        </div>
                        <div>
                            Precio: {formatter.format(itemBag.price * itemBag.quantity)}
                        </div>
                    </div>
                )
            })}
            <div className="font-bold my-5 ">
                Precio total {formatter.format(contexto.totalPrice)}
            </div>

        </div>
    )
}

export default Cart
