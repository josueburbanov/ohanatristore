import React from "react";
import ItemCount from "./ItemCount"

const Item = (props) => {
    return (
        <div class="grid grid-rows-6 grid-flow-col ml-5 mr-5 ">
            <div class="row-span-3 bg-gray">
                <img src={props.source} alt={props.alt} class="object-contain h-48 w-full" />
            </div>
            <div class="pl-3 bg-gray-300" >
                <div class="flex">
                    <div class="flex-grow text-base font-bold">
                        {props.title}
                    </div>
                    <div class="text-base font-bold justify-self-end">
                        ({props.stock})
                    </div>
                </div>
                <div class="overflow-auto h-12">
                    {props.descripcion}
                </div>
            </div>
            <ItemCount></ItemCount>
        </div>
    )
}
export default Item;