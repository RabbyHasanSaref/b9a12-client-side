import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Homepage/Home";
import Login from "../Page/Login_Sign_Page/Login/Login";
import Register from "../Page/Login_Sign_Page/Register/Register";
import Contact from "../Page/Home/Contactpage/Contact";
import NotFound from "../Page/Shared/Notfound/NotFound";
import About from "../Page/Home/Aboutpage/About";
import Dashboard from "../Layout/Dashboard";
import Teacher from "../Page/Home/TeacherPage/Teacher";
import Class from "../Page/Home/AllClassPage/Class";
import View from "../Page/Home/AllClassPage/View";
import Pay from "../Page/Payment/Pay";
import TeacherReq from "../Page/Dashboard/AdminDashboard/TeacherReq";
import AllClass from "../Page/Dashboard/AdminDashboard/AllClass";
import User from "../Page/Dashboard/AdminDashboard/User";
import Profile from "../Page/Dashboard/AdminDashboard/Profile";
import AddClass from "../Page/Dashboard/TeacherDashboard/AddClass";
import MyClass from "../Page/Dashboard/TeacherDashboard/MyClass";
import TeachProfile from "../Page/Dashboard/TeacherDashboard/TeachProfile";
import MyEnrollClass from "../Page/Dashboard/StudentDashboard/MyEnrollClass";
import StudentProfile from "../Page/Dashboard/StudentDashboard/StudentProfile";
import Protect from "../Protect/Protect";



const  router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/allclass",
                element: <Class></Class>,
            },
            {
                path: "/view/:id",
                element: <Protect>
                     <View></View>
                </Protect>,
                loader: ()=> fetch(`https://online-edu-bd-server-side.vercel.app/allclass`)
            },
            {
                path: "/pay",
                element: <Pay></Pay>,
            },
            {
                path: "/teacher",
                element: <Protect>
                    <Teacher></Teacher>
                </Protect>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/contact",
                element: <Contact></Contact>,
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            // admin route 
            {
                path: "teachreq",
                element: <TeacherReq></TeacherReq>,
            },
            {
                path: "allclassshow",
                element: <AllClass></AllClass>,
            },
            {
                path: "users",
                element: <User></User>,
            },
            {
                path: "profile",
                element: <Profile></Profile>,
            },

            // teacher route 
            {
                path: "addclass",
                element: <AddClass></AddClass>,
            },
            {
                path: "myclass",
                element: <MyClass></MyClass>,
            },
            {
                path: "teachprofile",
                element: <TeachProfile></TeachProfile>,
            },

            // student route 
            {
                path: "myenrollclass",
                element: <MyEnrollClass></MyEnrollClass>,
            },
            {
                path: "studentprofile",
                element: <StudentProfile></StudentProfile>
            },

        ]
    }
])
export default router;