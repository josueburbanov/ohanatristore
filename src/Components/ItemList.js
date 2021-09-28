import { React, useState } from "react";
import Item from "./Item";
import ItemCount from "./ItemCount";

const ItemList = (props) => {
    props.promesa.then(response => {
        props.setRenderedOutput(response.map(element => {
            return <div class="mb-4 bg-gray-300 rounded">
                <Item stock={element.stock} title={element.title} descripcion={element.description}
                    source={element.pictureUrl}
                    onAdd={(counter) => {
                        props.setItemsBagList(props.itemsBagList + counter);
                    }}></Item>
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