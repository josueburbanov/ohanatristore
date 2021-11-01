import { React, useState, useEffect, useContext } from "react";
import ItemDetail from "./ItemDetail";
import ItemListContainer from "./ItemListContainer";
import { useParams } from 'react-router-dom';
import { ContextCart } from "./CartContext";
import { getFirestore } from '../firebase';
import Loader from "./Loader";

const ItemDetailContainer = () => {
    const [itemFetched, setItemFetched] = useState({});
    let params = useParams();
    const [loading, setLoading] = useState(true);
    const contexto = useContext(ContextCart);

    const addItemsToBagList = (counter, item) => {
        contexto.addItems(item, counter);
    }

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("items").doc(params.id)
        itemCollection.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                alert("Estamos teniendo incovenientes, por favor intenta más tarde")
            }
            setLoading(false);
            setItemFetched({ ...querySnapshot.data(), id: querySnapshot.id })

        }).catch((error) => {
            alert("Estamos teniendo incovenientes, por favor intenta más tarde")
        })

    }, [params.id])


    return (
        <> {loading ? <Loader></Loader> :
            itemFetched.title !== undefined ? <ItemDetail itemFetched={itemFetched} onAdd={(counter, item) => addItemsToBagList(counter, item)} ></ItemDetail> :
                <ItemListContainer grettingUp="Este item" grettingDown="no existe" banner={true}></ItemListContainer>
        }
        </>
    )
}

export default ItemDetailContainer;