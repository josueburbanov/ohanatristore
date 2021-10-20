import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { ContextCart } from "./CartContext";

const CartWidget = (props) => {
    const contexto = useContext(ContextCart)
    return (

        <Link to="/cart">
            {contexto.itemsBag.length === 0 ??
                <a class={props.class} style={{ cursor: "pointer" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <div class="rounded-full h-6 w-6 flex items-center justify-center bg-black text-white">{contexto.totalItems}</div>
                </a>
            }
        </Link>

    )

}

export default CartWidget;