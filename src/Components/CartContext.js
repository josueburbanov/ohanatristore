import React, { useEffect } from 'react'
import { createContext, useState } from 'react';

export const ContextCart = createContext();

const CartContext = ({ children }) => {
    const [itemsBag, setItemBags] = useState([])
    const [totalItems, setTotalItems] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setTotalItems(calcTotalItems())
        setTotalPrice(calcTotalPrice())
    }, [itemsBag])

    const addItems = (item, cantidad) => {
        const itemDuplicado = isInCart(item.id)
        if (!itemDuplicado) {
            item["quantity"] = cantidad;
            setItemBags( itemsBag => [...itemsBag, item]);

        }
        else {
            itemDuplicado.quantity += cantidad;
            setItemBags([...itemsBag]);
        }
    }

    const removeItem = (index) => {
        let removeIndex = itemsBag.map(item => item.id).indexOf(index);
        ~removeIndex && itemsBag.splice(removeIndex, 1);
    }

    const clearItems = () => {
        setItemBags([])
    }

    const isInCart = (index) => {
        return itemsBag.find(item => item.id == index)
    }

    const calcTotalItems = () => {
        return itemsBag.length != 0 ? itemsBag.reduce((acum, cur) =>(acum + cur.quantity),0) : 0;
    }

    const calcTotalPrice = () => {
        return itemsBag.length != 0 ? itemsBag.reduce((acum, cur) =>(acum + cur.price*cur.quantity),0) : 0;
    }

    return (
        <ContextCart.Provider value={{ itemsBag, addItems, removeItem, clearItems, totalItems, totalPrice }}>
            {children}
        </ContextCart.Provider>
    )
}

export default CartContext
