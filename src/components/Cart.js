import { useDispatch, useSelector } from "react-redux";
import { addItems, removeItem, clearCart } from "../utils/cartSlice";

const Cart = () => {
  //Subscribe the store
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems)
  const dispatch = useDispatch();
  const handleclearCart = () => {
    dispatch(clearCart());
  };

 const totalAmount = cartItems.reduce((total, item) => {
  const price =
    item.card.info.price / 100 ||
    item.card.info.defaultPrice / 100;

  return total + price * item.quantity;
}, 0);



  return (
    
    <div className="text-center">
        <div>
            <h1>Cart</h1>
        </div>
        
        { cartItems.length === 0 ? <div>
            <h2>Your Cart is empty Pls Add items to the cart</h2>
        </div>  : <button className="button bg-black text-white rounded-lg p-2 m-2 mx-auto" onClick={handleclearCart}>Clear Cart</button> }
        
        <h2 className="text-xl font-bold mt-4">
            Total: ₹ {totalAmount}
        </h2>
      {cartItems.map((item) => (
        <div
          key={item.card.info.id}
          className="m-2 p-2 border-b-2 flex justify-between items-center"
        >
          <div className="text-left w-8/12">
            <div className="font-bold">{item.card.info.name}</div>
            <div>
              ₹{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </div>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => dispatch(removeItem(item.card.info.id))}
              className="bg-gray-300 px-2"
            >
              -
            </button>

            <span>{item.quantity}</span>

            <button
              onClick={() => dispatch(addItems(item))}
              className="bg-gray-300 px-2"
            >
              +
            </button>
          </div>
        </div>
        ))}
    </div>
    
  );



};

export default Cart;
