import Title from "../components/shared/Title";
import shamsulArefinCV from "../assets/Shamsul Arefin CV.pdf";
import { FaCloudDownloadAlt } from "react-icons/fa";

const About = () => {
    // const handleCVDownload = () => {

    // }
    return (
        <div id="about" className="gradient-background rounded-2xl m-5 p-4">
            <Title title="About Me"></Title>
            <p className="w-[80%] text-justify text-black mb-3">
                Im really good at web design using React JS, creating cool user experiences with Figma, and making awesome graphics for Facebook. I want a job where I can use these skills to make things that look great and work well. I love making digital stuff that people enjoy using, and I want to be part of a team thats all about making awesome masterpieces that people love.
            </p>

            <a href={shamsulArefinCV} download="Shamsul Arefin CV" target='_blank' rel="noreferrer">
                <div className="btn flex justify-center items-center w-1/3 btn-outline bg-cyan-900 text-white">
                    <FaCloudDownloadAlt />
                    <button>Download CV Now</button>
                </div>
            </a>

        </div>
    );
};

export default About;