import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";


const Protect = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <span className="loading loading-bars loading-lg "></span>
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default Protect;