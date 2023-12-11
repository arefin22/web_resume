import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const Main = () => {
    return (
        <div className="flex flex-row items-center">
            <div>
                <Navbar />
            </div>
            <div>
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};

export default Main;