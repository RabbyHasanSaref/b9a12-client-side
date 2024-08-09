import { NavLink } from "react-router-dom";


const Student = () => {
    return (
        <div>
            <li className="mb-3">
                <NavLink to="myenrollclass">  
                    My Enroll Class
                </NavLink>
            </li>
            <li className="mb-3">
                <NavLink to="studentprofile">
                    Profile
                </NavLink>
            </li>
        </div>
    );
};

export default Student;
