import { NavLink } from "react-router-dom";


const Admin = () => {
    return (
        <div>
            <li className="mb-3">
                <NavLink to="teachreq">
                    Teacher Request
                </NavLink>
            </li>
            <li className="mb-3">
                <NavLink to="users">
                    Users
                </NavLink>
            </li>
            <li className="mb-3">
                <NavLink to="allclassshow">
                    All classes
                </NavLink>
            </li>
            <li className="mb-3">
                <NavLink to="profile">
                    Profile
                </NavLink>
            </li>
        </div>
    );
};

export default Admin;