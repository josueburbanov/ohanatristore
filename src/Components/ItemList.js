import { React, useState, useEffect } from "react";
import Item from "./Item";
import ItemCount from "./ItemCount";

const ItemList = (props) => {
    const addItemsToBagList = (counter) => {
        props.setItemsBagList(props.itemsBagList + counter);
    }

    return (
        <>
            {props.dataFetched.map(element => {
                return <div class="mb-4 bg-transparent rounded text-center">
                    <Item stock={element.stock} title={element.title} price={element.price} identificador={element.id}
                        source={element.pictureUrl}
                        onAdd={(counter) => addItemsToBagList(counter)}></Item>
                </div>
            })}
        </>
    )
}

export default ItemList;