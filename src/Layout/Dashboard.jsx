import { NavLink, Outlet } from "react-router-dom";
import useRole from "../Hook/useRole";
import Admin from "../Components/DashboardMenu/Admin/Admin";
import Teacher from "../Components/DashboardMenu/Teacher/Teacher";
import Student from "../Components/DashboardMenu/Student/Student";


const Dashboard = () => { 
 
    const [role] = useRole();
    

    // const isAdmin = true  
    // const isTeach = false
    // const isStudent = false


    return (
        <div className="flex gap-5">
            <div className="w-64 min-h-screen bg-orange-50">
                <div className="text-center my-5 p-2">
                    <h2 className="text-xl font-semibold uppercase text-green-500">Online <span className="text-red-500">Edu</span> Bd</h2>
                    <p className="text-xs uppercase font-semibold">School Dashboard</p>
                </div>
                <ul className="menu uppercase p-2"> 

                {
                    role === 'admin' && <Admin></Admin> 
                }

                {
                    role === 'teacher' && <Teacher></Teacher>
                }

                {
                    role === 'student' && <Student></Student>
                }

                </ul>


                {/* shared nav links  */}
                <div className="divider"></div>
                <ul className="menu uppercase p-2">
                    <li className="mb-3">
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className="mb-3">
                        <NavLink to="">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
