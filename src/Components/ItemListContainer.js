import { React, useEffect, useState } from "react";
import ItemList from "./ItemList"
import { useParams } from 'react-router-dom'
import { getFirestore } from '../firebase';
import Loader from "./Loader";
import logo from '../ohana_store_logo.svg'

const ItemListContainer = (props) => {
    let params = useParams();
    const [loading, setLoading] = useState(false);
    const [dataFetched, setDataFetched] = useState([]);

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const itemCollection = params.categoryId === undefined ? db.collection("items") : 
        db.collection("items").where('category', '==', params.categoryId    );
        itemCollection.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log('No Hay resultados');
            }
            setDataFetched(querySnapshot.docs.map(doc => {
                const id = doc.id;
                return {id, ...doc.data()}
            }) )
        }).catch((error) => {
            console.log("Error al traer los items", error);
        }).finally(() => {
            setLoading(false);
        })
    }, [params]);


    return (
        <div>
            {loading ? <Loader></Loader>:
            
            props.banner ?
                <div class="flex items-center justify-center mb-10 mt-10">
                    <div class="grid grid-rows-4 text-center">
                        <span class=" col-span-2 text-black font-bold text-4xl lg:text-5xl ml-10 "></span>
                        <span class=" col-span-2 text-black font-bold text-4xl lg:text-5xl ml-10 ">{props.grettingUp}</span>
                        <span class="col-span-2 text-black font-bold text-3xl lg:text-4xl ml-10 ">{props.grettingDown}</span>
                    </div>
                    <img  className="App-logo h-80 w-80 lg:h-80 lg:w-80 lg:p-12" src={logo}></img>
                </div> : <div></div>}
            {props.enableContent ? 
            <div class="grid grid-cols-3 items-center justify-center mb-10 mt-10">
                <ItemList dataFetched={dataFetched}></ItemList>
            </div>: <></>}
        </div>
    );

}

export default ItemListContainer;