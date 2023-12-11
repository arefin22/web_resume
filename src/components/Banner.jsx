import { FaCloudDownloadAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import shamsulArefinCV from "../assets/Shamsul Arefin CV.pdf";

const Banner = () => {
    return (
        <div className="gradient-background rounded-2xl m-5 py-52" id="home">
            <div>
                <div className="m-3">
                    <img src="/src/assets/f-66927.jpg" className="rounded-full mx-auto w-56 h-56 rounded-tr-[30%] rounded-tl-[40%] rounded-bl-[30%] rounded-br-[70%]" alt="" />
                    <div className="border-2 border-sky-900 w-60 h-60 rounded-tr-[30%] rounded-tl-[40%] rounded-bl-[30%] rounded-br-[70%] mx-auto -mt-[232px] "></div>
                </div>
                <div className="text-center mx-auto">
                    <h2 className="text-4xl font-bold gradient-text">Shamsul Arefin</h2>
                    <h3 className="text-xl mb-3 font-medium gradient-text">Web Developer</h3>
                    <h3><a href="mailto:shamsularefin500@gmail.com" className="text-black">shamsularefin500@gmail.com</a></h3>
                    
                    <div className="flex justify-center items-center gap-3 mt-4">
                        <div className="flex justify-start items-center text-cyan-800 gap-3">
                            <h3 className="text-xl font-medium"><a href="https://github.com/arefin22"><FaGithub /></a></h3>
                        </div>
                        <div className="flex justify-start text-cyan-800 items-center gap-3">
                            <h3 className="text-xl font-medium"><a href="https://www.linkedin.com/in/shamsularefinn/"><FaLinkedin /></a></h3>
                        </div>
                        <div className="flex justify-start text-cyan-800 items-center gap-3">
                            <h3 className="text-xl font-medium"><a href="mailto:shamularefin500@gmail.com"><MdEmail /></a></h3>
                        </div>
                    </div>
                </div>
                <a href={shamsulArefinCV} target='_blank' rel="noreferrer">
                    <div className="btn flex justify-center items-center w-1/3 btn-outline mx-auto mt-4 bg-cyan-900 text-white">
                        <FaCloudDownloadAlt />
                        <button>Download CV Now</button>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Banner;