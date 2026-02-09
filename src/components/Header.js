import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = ()=>{
    let btnName = 'Login';

    let [btnNameReact,setBtnNameReact] = useState("Login")


  return(
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL}  className="logo-img" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Home
          </li>
          <li>
            About Us
          </li>
          <li>
            Contact us
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