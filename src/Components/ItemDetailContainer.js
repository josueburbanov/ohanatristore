import { React, useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import data from "../data_tienda_tri.json"

const ItemDetailContainer = (props) => {
    const [itemFetched, setItemFetched] = useState({});

    const getItem = () => {
        fetch(`https://retoolapi.dev/fvE4Ak/data/${props.id}`)
        .then(response => response.json())
        .then(data => {setItemFetched(data);console.log(itemFetched)})
        .catch(error => {
            console.error('Error en fetch: ', error);
        })
    }

    useEffect(()=>{
        getItem();
    },[])

    return (
        <>
            <ItemDetail itemFetched={itemFetched}></ItemDetail>
        </>
    )
}

export default ItemDetailContainer;