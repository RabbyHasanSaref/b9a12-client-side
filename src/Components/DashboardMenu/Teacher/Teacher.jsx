import { NavLink } from "react-router-dom";


const Teacher = () => {
    return (
        <div>
            <li className="mb-3">
                <NavLink to="addclass">
                    Add class
                </NavLink>
            </li>
            <li className="mb-3">
                <NavLink to="myclass">
                    My class
                </NavLink>
            </li>
            <li className="mb-3">
                <NavLink to="teachprofile">
                    Profile
                </NavLink>
            </li>
        </div>
    );
};

export default Teacher;