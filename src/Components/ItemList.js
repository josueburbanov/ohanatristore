import { React, useContext } from "react";
import { ContextCart } from "./CartContext";
import Item from "./Item";

const ItemList = (props) => {
    const contexto = useContext(ContextCart);
    const addItemsToBagList = (counter, item) => {
        contexto.addItems(item, counter);
    }

    return (
        <>{props.dataFetched.length === 0 ?
            <div className="col-span-3 text-center font-bold my-48">
                <div className="text-4xl">
                    Por el momento
                </div>
                <div>
                    No hay items disponibles para esta categoría
                </div>
            </div> :
            props.dataFetched.map(element => {
                return <div class="mb-4 bg-transparent rounded text-center">
                    <Item item={element} visible={false}
                        onAdd={(counter, item) => addItemsToBagList(counter, item)}></Item>
                </div>
            })
        }
        </>
    )
}

export default ItemList;