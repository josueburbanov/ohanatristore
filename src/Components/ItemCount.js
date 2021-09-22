import React, { Component, useState } from "react";

const ItemCount = (props) => {
    const [contadorItems, setContadorItems] = useState(1);

    return (
        <div class="grid grid-rows-6 grid-flow-col ml-5 mr-5 ">
            <div class="row-span-3 bg-gray">
                <img src={props.source} alt={props.alt} class="object-contain h-full w-full" />
            </div>
            <div class="pl-3 bg-gray-300" >
                <div class="flex">
                    <div class="flex-grow text-base font-bold">
                        {props.nombre}
                    </div>
                    <div class="block text-base font-bold justify-self-end">
                        ({props.stock})
                    </div>
                </div>

                <p>
                    {props.descripcion}
                </p>
            </div>
            <div class="flex justify-center mt-1 mb-1">
                <div class="grid grid-columns-6 grid-flow-col w-full items-center text-center border rounded text-sm text-black font-semibold border-black">
                    <div >
                        <button class="font-bold"
                            onClick={() => {
                                if (contadorItems < props.stock) {
                                    setContadorItems(contadorItems + 1);
                                }
                            }}>+</button>
                    </div>
                    <div class="col-span-2 text-base">
                        {contadorItems}
                    </div>
                    <div>
                        <button class="font-bold"
                            onClick={() => {
                                if (contadorItems > 1) {
                                    setContadorItems(contadorItems - 1);
                                }
                            }}>-</button>
                    </div>
                </div>
            </div>
            <div class="mt-2">
                <button class="w-full text-sm px-4 py-2 leading-none border rounded text-gray-100 font-semibold border-black hover:border-black hover:text-black hover:bg-transparent bg-black mt-4 mb-4 lg:mt-0"
                    onClick={() => {
                        props.onAdd(contadorItems);
                        if (contadorItems > (props.stock - contadorItems)) {
                            setContadorItems(props.stock - contadorItems)
                        }

                    }}>
                    Agregar item al carrito
                </button>
            </div>
        </div>
    )
}
export default ItemCount;