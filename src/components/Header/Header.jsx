import { Link, Outlet } from "react-router-dom";
import '../styles/style.css'
const Header = () => {
    return (
        <div>
        <div className="anchors">
            <Link to={'/Home'}>Home</Link>
            <Link to={'/Users'}>Users</Link>
            <Link to={'/About'}>About</Link>
            <Link to={'/Contact'}>Contact Us</Link>
        </div>
          <Outlet></Outlet>
          <div>
            <h1 className="Outlet">Thank you for visting our Website and have fun during sex.........</h1>
          </div>
        </div>
        
    );
};

export default Header;