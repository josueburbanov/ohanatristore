import ItemCount from "./ItemCount"
import { React, useState, useEffect } from "react";



const ItemDetail = (props) => {
    const [stock, setStock] = useState(props.itemFetched.stock);

    useEffect(() => {
        setStock(props.itemFetched.stock)
    }, [props.itemFetched.stock])

    return (
        <div>
            <div className="grid grid-cols-2 items-center">
                <div className="flex">
                    <img src={props.itemFetched.pictureUrl} className="px-10 my-20"></img>
                </div>
                <div className="flex flex-col justify-center divide-y divide-yellow-500 px-36">
                    <div className="h-36">
                        <div className="text-2xl font-bold">{props.itemFetched.title}</div>
                        <div>${props.itemFetched.price}</div>
                        {stock === 0 ? <div className="italic">Este artículo no está disponible </div> :
                            <div className="italic">Tenemos ({stock}) artículos en stock </div>
                        }

                    </div>
                    <div >{props.itemFetched.description}</div>
                    {stock === 0 ? <></> :
                        <div className="my-5 py-5">
                            <ItemCount item={props.itemFetched} stock={stock} onAdd={props.onAdd} setStock={setStock}></ItemCount>
                        </div>
                    }
                </div>

            </div>
        </div>
    )
}
export default ItemDetail;