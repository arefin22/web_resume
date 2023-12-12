import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const Main = () => {
    return (
        <div className="grid grid-flow-row md:grid-flow-col md:grid-cols-5">
            <div className="col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1">
                <Navbar />
            </div>
            <div className="col-span-2 md:col-span-2 lg:col-span-3 ">
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};

export default Main;