import { React, useEffect, useState } from "react";
import ItemList from "./ItemList"
import { useParams } from 'react-router-dom'
import { getFirestore } from '../firebase';

const ItemListContainer = (props) => {
    let params = useParams();
    const [loading, setLoading] = useState(false);
    const [dataFetched, setDataFetched] = useState([]);

    useEffect(() => {
        // fetch("https://retoolapi.dev/63WBBZ/data?category=" + params.categoryId)
        //     .then(response => response.json())
        //     .then(data => {
        //         setDataFetched(data)
        //         console.log(data)
        //     })
        //     .catch(error => {
        //         console.error('Error en fetch: ', error);
        //     })
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
            {props.banner ?
                <div class="flex items-center justify-center mb-10 mt-10">
                    <div class="grid grid-rows-4">
                        <span class=" col-span-2 text-black font-bold text-4xl lg:text-5xl ml-10 "></span>
                        <span class=" col-span-2 text-black font-bold text-4xl lg:text-5xl ml-10 ">{props.grettingUp}</span>
                        <span class="col-span-2 text-black font-bold text-3xl lg:text-4xl ml-10 ">{props.grettingDown}</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="App-logo h-80 w-80 lg:h-96 lg:w-96" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd" />
                    </svg>
                </div> : <div></div>}
            {!loading || props.banner ? 
            <div class="grid grid-cols-3 items-center justify-center mb-10 mt-10">
                <ItemList dataFetched={dataFetched}></ItemList>
            </div>: <div> Cargando...</div>}
        </div>
    );

}

export default ItemListContainer;