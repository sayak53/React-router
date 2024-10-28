import { Outlet } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <a href="/Home">Home</a>
            <a href="/About">About</a>
            <a href="/Contact">Contact Us</a>
            <Outlet></Outlet>
        </div>
    );
};

export default Header;