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
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL}  className="logo-img" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Online Status : {onlineStatus ? "✅" : "🔴" }
          </li>
          <li>
            <Link to="/">
            Home
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