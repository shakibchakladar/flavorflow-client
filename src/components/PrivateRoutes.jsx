import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router";

const PrivateRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext);

    if(loading){
        return <div className="mt-5 text-center"><span className="pt-10 mt-6 text-center loading loading-spinner loading-lg"></span></div>
    }

    if(user?.email){
        return children;
    }
    return <Navigate to="/login" replace></Navigate>
};

export default PrivateRoutes;