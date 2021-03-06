import React from 'react';
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const carReducer = (state, action) => {
    if (action.type === 'ADD') {
        const newTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: newTotalAmount
        }
    }

    if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;

        if(existingItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
            const updatedItem = {...existingItem, amount: existingItem.amount - 1};
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount < 0 ? 0 : updatedTotalAmount
        }
    }

    return defaultCartState;
};

const CartProvider = props => {
    const [cartState, dispatchCartAction] = React.useReducer(carReducer, defaultCartState);

    const AddItemToCartHandler = item => {
        dispatchCartAction({
            type: 'ADD',
            item: item
        })
    };

    const removeItemFromHandler = id => {
        dispatchCartAction({
            type: 'REMOVE',
            id: id
        })
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: AddItemToCartHandler,
        removeItem: removeItemFromHandler
    }

    return (
        <CartContext.Provider
            value={cartContext}
        >
            {props.children}
        </CartContext.Provider>
    )
};

export default CartProvider;