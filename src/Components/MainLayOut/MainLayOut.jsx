import { Outlet } from "react-router-dom";

import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Footer/Footer";
// import Banner from "../Pages/Banner/Banner";


const MainLayOut = () => {
    return (
        <div >
            
            <Navbar></Navbar>         
            <Outlet></Outlet>
            <Footer></Footer>
            
           
        </div>
    );
};

export default MainLayOut;