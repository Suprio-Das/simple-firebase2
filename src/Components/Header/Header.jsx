import { NavLink } from "react-router";

const Header = () => {
    return (
        <div className="bg-gray-200 p-5 flex justify-between">
            <div>
                <h3 className="text-xl font-semibold">Email-Pass-Auth</h3>
            </div>
            <div>
                <NavLink to="/" className="ms-3 font-semibold">Home</NavLink>
                <NavLink to="/login" className="ms-3 font-semibold">Login</NavLink>
                <NavLink to="/register" className="ms-3 font-semibold">Register</NavLink>
            </div>
        </div>
    );
};

export default Header;