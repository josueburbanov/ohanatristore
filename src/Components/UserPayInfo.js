import { React, useContext, useState } from "react";

import { ContextCart } from "./CartContext";

const UserPayInfo = ({ updateItemsBought, insertPaymentDb, setActivatedPayment }) => {
    const contexto = useContext(ContextCart);
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    const [mail, setMail] = useState("")
    const [errorMail, setErrorMail] = useState(false)

    const handleProcessPayment = (e) => {
        e.preventDefault();
        const dataForm = new FormData(e.target);
        updateItemsBought() ? insertPaymentDb(dataForm) : alert("Some items are out of stock")
    }

    const handleOnChangeEmailConf = (e) => {
        e.preventDefault();
        if (mail !== e.target.value) {
            setErrorMail(true);
        } else {
            setErrorMail(false);
        }
    }

    const handleOnChangeEmail = (e) => {
        e.preventDefault();
        setMail(e.target.value);
    }
    return (
        <div className="text-right border rounded p-3 ">
            <div className="font-bold ">Resumen de la orden</div>
            <div>Items({contexto.totalItems}):     {formatter.format(contexto.totalPrice)}</div>
            <div>Envío:     $0.00</div>
            <div>Impuestos: $0.00</div>
            <div className="font-bold my-5 ">
                Total a pagar {formatter.format(contexto.totalPrice)}
            </div>
            <div className="text-white font-thin text-xs mt-1"
                onClick={() => setActivatedPayment(true)}>Datos de factura y envío</div>
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
                <input onChange={(e) => handleOnChangeEmail(e)} required type="email" id="email" name="email" className="border rounded"></input>
                <br />
                <label for="email2" className="font-thin">Confirmación email:</label>
                <br />
                <input onChange={(e) => handleOnChangeEmailConf(e)} required type="email" id="email" name="email" className="border rounded"></input>
                {errorMail &&
                    <p className="text-yellow-700 text-xs">El email no coincide</p>
                }
                <br /><br />
                <input disabled={errorMail} className="inline-block text-sm ml-4 px-4 py-2 leading-none border rounded text-black font-semibold border-black hover:border-transparent hover:text-yellow-500 hover:bg-black mt-4 lg:mt-0" type="submit" value="Pagar">
                </input>

            </form>
        </div>
    )
}

export default UserPayInfo
