import {useDispatch, useSelector} from "react-redux";
import classes from './CartButton.module.css';
import {uiActions} from "../../store/ui-slide";

const CartButton = (props) => {
    const dispatch = useDispatch();

    const {
        cart: {
            totalQuantity
        }
    } = useSelector(state => state);

    const toggleCartHandler = () => {
        dispatch(uiActions.toggle());
    };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
