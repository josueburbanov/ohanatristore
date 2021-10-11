import { React, useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom';

const ItemDetailContainer = (props) => {
    const [itemFetched, setItemFetched] = useState({});
    let params = useParams();

    const getItem = () => {
        fetch(`https://retoolapi.dev/63WBBZ/data/${params.id}`)
            .then(response => response.json())
            .then(data => setItemFetched(data))
            .catch(error => {
                console.error('Error en fetch: ', error);
            })
    }

    const addItemsToBagList = (counter) => {
        props.setItemsBagList(props.itemsBagList + counter);
    }

    useEffect(() => {
        getItem();
    }, [params.id])

    return (
        <>
            <ItemDetail itemFetched={itemFetched} onAdd={(counter) => addItemsToBagList(counter)} ></ItemDetail>
        </>
    )
}

export default ItemDetailContainer;