import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const Main = () => {
    return (
        <div className="hero min-h-screen bg-[url('https://i.ibb.co/sFcDrm5/markus-spiske-Mgt-HZ4zl-C1-U-unsplash.jpg')]">
            <div className="hero-overlay bg-opacity-75"></div>
            <div className="grid grid-flow-row md:grid-flow-col md:grid-cols-5">
                <div className="col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1">
                    <Navbar />
                </div>
                <div className="col-span-2 md:col-span-2 lg:col-span-3 ">
                    <Outlet />
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Main;