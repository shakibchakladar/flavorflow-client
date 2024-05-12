import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Main = () => {
    return (
        <div>
            <div className="pb-9">
            <Navbar></Navbar>
            </div>
            <div className="min-h-[calc(100vh-300px)] pt-10">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;