import {React, useState} from "react";
import ItemCount from "./ItemCount"

const ItemListContainer = (props) => {
    const [stock, setStock] = useState(10);
    return (
        <div>
            <div class="flex items-center justify-center mb-10 mt-10">
                <div class="grid grid-rows-4">
                    <span class=" col-span-2 text-black font-bold text-4xl lg:text-5xl ml-10 "></span>
                    <span class=" col-span-2 text-black font-bold text-4xl lg:text-5xl ml-10 ">{props.grettingUp}</span>
                    <span class="col-span-2 text-black font-bold text-3xl lg:text-4xl ml-10 ">{props.grettingDown}</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="App-logo h-80 w-80 lg:h-96 lg:w-96" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd" />
                </svg>
            </div>
            <div class="grid grid-cols-3 items-center justify-center mb-10 mt-10 border-4 border-black">
                <div class="mb-4 bg-gray-300 rounded"><ItemCount stock={stock} nombre="Camiseta Running" descripcion="100% Tela transpirable"
                    onAdd={(counter) => {
                        props.setItemsBagList(props.itemsBagList + counter);
                        setStock(stock - counter);
                    }}></ItemCount></div>
                <div class="text-center font-bold text-4xl mt-20 mb-20" >Item 2</div>
                <div class="text-center font-bold text-4xl mt-20 mb-20">Item 3</div>
                <div class="text-center font-bold text-4xl mt-20 mb-20">Item 4</div>
                <div class="text-center font-bold text-4xl mt-20 mb-20">Item 5</div>
                <div class="text-center font-bold text-4xl mt-20 mb-20">Item 6</div>
                <div class="text-center font-bold text-4xl mt-20 mb-20">Item 7</div>
                <div class="text-center font-bold text-4xl mt-20 mb-20">Item 8</div>
                <div class="text-center font-bold text-4xl mt-20 mb-20">Item 9</div>
            </div>
        </div>
    );

}

export default ItemListContainer;