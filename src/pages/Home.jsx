import Banner from "../components/Banner";
import About from "./About";
import Experiences from "./Experiences";
import Project from "./Project";
import Skills from "./Skills";

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Skills />
            <Experiences />
            <Project />
        </div>
    );
};

export default Home;