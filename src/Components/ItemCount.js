import React, { useState } from "react";

const ItemCount = (props) => {
    const [contadorItems, setContadorItems] = useState(1);

    return (
        //<div class="grid grid-rows-6 grid-flow-col ml-5 mr-5 ">
        <>
            <div class="flex justify-center mt-3 mb-3">
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
        </>
        //</div>
    )
}
export default ItemCount;