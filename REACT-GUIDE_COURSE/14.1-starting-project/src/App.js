import {useDispatch, useSelector} from "react-redux";
import {Fragment} from 'react';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useEffect} from "react";
import Notification from "./components/UI/Notification";
import {sendCartData} from './store/cart-action'
import {fetchCartData} from "./store/cart-action";

let isInitial = true;

function App() {
    const {
        ui: {
            cartIsVisible: showCart,
            notification
        }
    } = useSelector( state => state);
    const {
        cart
    } = useSelector(state => state);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCartData());
    }, [dispatch]);

    useEffect(() => {
        if(isInitial) {
            isInitial = false;
            return;
        }

        if(cart.changed) {
            dispatch(sendCartData(cart));
        }
    }, [cart, dispatch]);

  return (
      <Fragment>
          {
              notification && (
                  <Notification
                      status={notification.status}
                      title={notification.title}
                      message={notification.message}
                  />
              )
          }
          <Layout>
              {
                  showCart && (
                      <Cart />
                  )
              }
              <Products />
          </Layout>
      </Fragment>
  );
}

export default App;
