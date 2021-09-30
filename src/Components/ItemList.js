import { React, useState, useEffect } from "react";
import Item from "./Item";
import ItemCount from "./ItemCount";

const ItemList = (props) => {
    const [renderedOutput, setRenderedOutput] = useState([]);
    const addItemsToBagList = (counter) => {
        props.setItemsBagList(props.itemsBagList + counter);
    }
    useEffect(() => {
        setRenderedOutput(props.dataFetched.map(element => {
            return <div class="mb-4 bg-transparent rounded text-center">
                <Item stock={element.stock} title={element.title} price={element.price}
                    source={element.pictureUrl}
                    onAdd={(counter) => addItemsToBagList(counter)}></Item>
            </div>
        }))
    }
        , [props.dataFetched])

    
    return (
        <>
            {renderedOutput}
        </>
    )
}

export default ItemList;