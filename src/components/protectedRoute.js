import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Login } from "../config/redux/auth/actionType";
import Home from "../pages/Home"

const useAuth = () => {
    const {id} = useSelector((state) => state.Auth.user);
    return id;
}

const ProtectedRoutesUser = () => {
    const isAuth = useAuth();
    return isAuth ? 
    <Home></Home> :
    <Login/>
}

export default ProtectedRoutesUser;