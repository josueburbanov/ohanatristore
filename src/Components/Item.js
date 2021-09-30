import {React, useState} from "react";
import ItemCount from "./ItemCount"

const Item = (props) => {
    const [stock, setStock] = useState(props.stock);
    return (
        <div class="grid grid-rows-6 grid-flow-col ml-5 mr-5 ">
            <div class="row-span-3 bg-transparent">
                <img src={props.source} alt={props.alt} class="object-contain h-48 w-full" />
            </div>
            <div class="pl-3 bg-transparent" >
                <div class="flex">
                    <div class="flex-grow text-base font-bold text-center">
                        {props.title}
                    </div>
                    <div class="text-base font-bold">
                        ({stock})
                    </div>
                </div>
                <div class="overflow-auto h-12">
                    ${props.price}
                </div>
            </div>
            <ItemCount stock={stock} onAdd={props.onAdd} setStock={setStock}></ItemCount>
        </div>
    )
}
export default Item;