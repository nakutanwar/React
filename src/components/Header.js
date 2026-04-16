import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = ()=>{
    // let btnName = 'Login';
    const onlineStatus = useOnlineStatus();
    let [btnNameReact,setBtnNameReact] = useState("Login")

    const data = useContext(UserContext);
    console.log(data);
    
    //If no Dependency Array => useEffect is called on every render 
    // if dependency array is empty = [] => useEffect is called on initial render and called once
    // if dependency array is updated(btnnamereact) than the useEffect will be called
    useEffect(()=>{
      // console.log('Use Effect Called');
    }, [btnNameReact]);




    // Subscribing to the store Using a Selector
    const cartItems = useSelector((store)=> store.cart.items)
    console.log(cartItems)



     
  return(
    <div className="flex justify-between items-center p-2 shadow-md mb-2">
      <div className="w-25">
        <img src={LOGO_URL}  className="w-10" />
      </div>
      <div className="w-75">
        <ul className="flex items-center gap-2">
          <li>
            Online Status : {onlineStatus ? "✅" : "🔴" }
          </li>
          <li>
            <Link to="/">
            Home
            </Link>
          </li>
          <li>
            <Link to="/grossary">
            Grossary
            </Link>
          </li>
          <li>
            {/* Never use anchor tag it reloads whole page */}
            {/* <a href="/about">About Us</a> */}
            <Link to='/about'>About</Link>
            
          </li>
          <li>
            <Link to="/contact" >Contact us</Link>
            
          </li>
          <li className="font-bold">
            <Link to="/cart" >Cart {cartItems.length}</Link>
            
          </li>
          <li>
            <button onClick={
                ()=>{
                    btnNameReact === 'Login' 
                    ? setBtnNameReact('Logout' )
                    :setBtnNameReact('Login');
                    console.log(btnNameReact);
                    
                }
            } className="login-btn">
                {btnNameReact}
            </button>
          </li>
          <li>
            LoggedIn User : {data.loggedInUser}   
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header;