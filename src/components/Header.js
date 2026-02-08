import { LOGO_URL } from "../utils/constant";

const Header = ()=>{
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
        </ul>
      </div>
    </div>
  )
}

export default Header;