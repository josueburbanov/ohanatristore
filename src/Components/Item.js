import { React, useState } from "react";
import ItemCount from "./ItemCount"
import { Link } from 'react-router-dom';

const Item = (props) => {
    const [stock, setStock] = useState(props.stock);
    return (
        <div class="grid grid-rows-6 grid-flow-col ml-5 mr-5 " >
            <div class="row-span-3 bg-transparent" style={{ cursor: "pointer" }}>
                <Link to={`/item/${props.identificador}`}>
                    <img src={props.source} alt={props.alt} class="object-contain h-48 w-full" />
                </Link>
            </div>
            <div class="bg-transparent" >
                <div class="flex">
                    <div class="flex-grow text-base font-bold text-center">
                        {props.title}
                    </div>
                    <div class="text-base font-bold">
                        ({stock})
                    </div>
                </div>
                <div >
                    ${props.price}
                </div>
            </div>
            <ItemCount stock={stock} onAdd={props.onAdd} setStock={setStock}></ItemCount>
        </div>
    )
}
export default Item;