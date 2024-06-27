import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as action from "../../config/redux/auth/action"
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
    const {token} = useSelector((state) => state.Auth.user)
    const dispatch = useDispatch()
    const {pathname} = useLocation()
    const navigate = useNavigate();
    let tokenLocalStorage = localStorage.getItem("token")
    console.log(tokenLocalStorage);

    useEffect(() => {
        console.log("token", token);
        if(token) {
            dispatch(action.GetUserDetails({token}))
            if(pathname === '/'){
                navigate('/home')
            }
        } else{
            // untuk redirect ke login
            if(!pathname === '/'){
                navigate('/')
            }
        }
    }, [token])

    return (
        <header>

        </header>
    )
}

export default Header