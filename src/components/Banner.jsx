import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Banner = () => {
    return (
        <div className="gradient-background rounded-2xl m-5 p-4" id="home">
            <div>
                <div className="m-3">
                    <img src="/src/assets/f-66927.jpg" className="rounded-full mx-auto w-44 h-44" alt="" />
                    <div className="bg-white w-56 h-56 rounded-tr-[30%] rounded-tl-[40%] rounded-bl-[30%] rounded-br-[70%] mx-auto -mt-48 "></div>
                </div>
                <div className="text-center mx-auto">
                    <h2 className="text-4xl font-bold">Shamsul Arefin</h2>
                    <h3><a href="mailto:shamsularefin500@gmail.com">shamsularefin500@gmail.com</a></h3>
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
            </div>
        </div>
    );
};

export default Banner;