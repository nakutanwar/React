import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = ()=>{
    // let btnName = 'Login';
    const onlineStatus = useOnlineStatus();
    let [btnNameReact,setBtnNameReact] = useState("Login")
    //If no Dependency Array => useEffect is called on every render 
    // if dependency array is empty = [] => useEffect is called on initial render and called once
    // if dependency array is updated(btnnamereact) than the useEffect will be called
    useEffect(()=>{
      // console.log('Use Effect Called');
    }, [btnNameReact]);


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
          <li>
            Cart
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
        </ul>
      </div>
    </div>
  )
}

export default Header;