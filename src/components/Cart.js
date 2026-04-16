import { useSelector } from "react-redux";
import ResCategory from "./ResCategory";

const Cart = ()=>{
    //Subscribe the store 
    const cartItems = useSelector((store)=> store.cart.items); 
    return (
            <div className="text-center m-4 p-4">
                <div className="text-2xl font-bold">
                    Cart
                </div>
                <div>
                    <ResCategory items={cartItems} /> ✅
                    {/* <ResCategory ></ResCategory> */}
                </div>
            </div>
    )
}

export default Cart;