import { React, useState } from "react";
import Item from "./Item";
import ItemCount from "./ItemCount";

const ItemList = (props) => {
    const addItemsToBagList = (counter) => {
        props.setItemsBagList(props.itemsBagList + counter);
    }

    props.promesa.then(response => {
        props.setRenderedOutput(response.map(element => {
            return <div class="mb-4 bg-gray-300 rounded">
                <Item stock={element.stock} title={element.title} descripcion={element.description}
                    source={element.pictureUrl}
                    onAdd={(counter) => addItemsToBagList(counter)}></Item>
            </div>
        }
        )
        )
    }).catch(error => {
        console.error('Error en fetch: ', error);
    })
    return (
        <>
            {props.renderedOutput}
        </>
    )
}

export default ItemList;