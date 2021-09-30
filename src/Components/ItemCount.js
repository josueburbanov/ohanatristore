import React, { useState } from "react";

const ItemCount = (props) => {
    const [contadorItems, setContadorItems] = useState(1);

    const addItemToBag = () => {
        props.onAdd(contadorItems);
        props.setStock(props.stock - contadorItems);
        if (contadorItems > (props.stock - contadorItems)) {
            setContadorItems(props.stock - contadorItems)
        }
    }

    const checkContadorNeg = () => {
        if (contadorItems > 1) {
            setContadorItems(contadorItems - 1);
        }
    }

    const checkContadorOver = () => {
        if (contadorItems < props.stock) {
            setContadorItems(contadorItems + 1);
        }
    }
    return (
        <>
            <div class="flex justify-center mb-1 py-2">
                <div class="grid grid-columns-6 grid-flow-col w-full items-center text-center border rounded text-sm text-black font-semibold border-black">
                    <div >
                        <button class="font-bold"
                            onClick={() => checkContadorOver()}>+</button>
                    </div>
                    <div class="col-span-2 text-base">
                        {contadorItems}
                    </div>
                    <div>
                        <button class="font-bold"
                            onClick={() => checkContadorNeg()}>-</button>
                    </div>
                </div>
            </div>
            <div class="mt-2">
                <button class="w-full text-sm px-4 py-2 leading-none border rounded text-gray-100 font-semibold border-black hover:border-black hover:text-black hover:bg-transparent bg-black lg:mt-0"
                    onClick={() => addItemToBag()}>
                    Agregar item al carrito
                </button>
            </div>
        </>
    )
}
export default ItemCount;