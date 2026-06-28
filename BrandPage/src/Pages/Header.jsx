import brandLogo from '../assets/brand_logo.png';
import './Header.css';
export  function Header() {
    return (
       <div className="header-container">
        <img src={brandLogo} alt="Brand Logo" className="Brand-logo" />
        <nav className="header-nav">
            <ul>
               <li><a href="#">Menu</a></li>
               <li><a href="#">Location</a></li>
               <li><a href="#">About</a></li>
               <li><a href="#">Contact</a></li>
            </ul>
        </nav>
        <button className="header-button">Login</button>
       </div>
    );
}