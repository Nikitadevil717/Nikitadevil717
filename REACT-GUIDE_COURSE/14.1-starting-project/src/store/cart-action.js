import {uiActions} from "./ui-slide";
import {cartActions} from "./cart-slice";

export const fetchCartData = () => {
    return async (dispatch) => {

        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Loading...',
            message: 'Loading cart data!'
        }));

        const fetchData = async () => {
            const response = await fetch('https://react-http-b7e35-default-rtdb.firebaseio.com/cart.json');

            if (!response.ok) {
                throw new Error ('Could not fetch cart data!')
            }

            const data = !response ? [] : await response.json();

            return data;
        };

        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity || 0
            }));
            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Loaded',
                message: 'Loaded cart data!'
            }));
        } catch (err) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!.',
                message: 'Fetching cart data failed!'
            }));
        }
    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data!'
        }));

        const sendRequest = async () => {
            const response = await fetch('https://react-http-b7e35-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify({
                    items: cart.items,
                    totalQuantity: cart.totalQuantity
                })
            });

            if (!response.ok) {
                throw new Error('Sending cart data failed.')
            }
        };

        try {
            await sendRequest();
        } catch(err) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!.',
                message: 'Sending cart data failed!'
            }));
        }

        dispatch(uiActions.showNotification({
            status: 'success',
            title: 'Success!.',
            message: 'Send cart data successfully!'
        }));
    }
};