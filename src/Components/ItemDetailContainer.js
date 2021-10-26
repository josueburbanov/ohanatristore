import { React, useState, useEffect, useContext } from "react";
import ItemDetail from "./ItemDetail";
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom';
import { ContextCart } from "./CartContext";
import { getFirestore } from '../firebase';

const ItemDetailContainer = () => {
    const [itemFetched, setItemFetched] = useState({});
    let params = useParams();
    const [loading, setLoading] = useState(false);
    const contexto = useContext(ContextCart);


    const getItem = () => {
        // fetch(`https://retoolapi.dev/63WBBZ/data/${params.id}`)
        //     .then(response => response.json())
        //     .then(data => setItemFetched(data))
        //     .catch(error => {
        //         console.error('Error en fetch: ', error);
        //     })

    }

    const addItemsToBagList = (counter, item) => {
        contexto.addItems(item, counter);
    }

    useEffect(() => {
        // getItem();
        setLoading(true);
        const db = getFirestore();
        const itemCollection = db.collection("items").doc(params.id)
        itemCollection.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log('No Hay resultados');
            }
            setItemFetched({...querySnapshot.data(), id: querySnapshot.id})
        }).catch((error) => {
            console.log("Error al traer los items", error);
        }).finally(() => {
            setLoading(false);
        })

    }, [params.id])

    return (
        <>
            <ItemDetail itemFetched={itemFetched} onAdd={(counter, item) => addItemsToBagList(counter, item)} ></ItemDetail>
        </>
    )
}

export default ItemDetailContainer;