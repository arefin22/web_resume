import Banner from "../components/Banner";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";
import Skills from "./Skills";

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Skills />
            <Project />
            <Contact />
        </div>
    );
};

export default Home;