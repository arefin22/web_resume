import { FaGithub, FaLinkedin, FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Navbar = () => {
    return (
        <div className="sticky top-5">
            <div className="gradient-background rounded-2xl m-5 p-4">
                <img className="w-72 rounded-2xl mx-auto" src="/src/assets/f-66927.jpg" alt="Shamsul Arefin's Profile Photo" />
                <h1 className="gradient-text text-center text-4xl font-extrabold mt-4">Shamsul Arefin</h1>
                <hr className="m-2" />
                <div className="flex justify-start items-center text-cyan-800 gap-3">
                    <FaPhoneSquareAlt />
                    <h3 className="text-xl font-medium">+880 1786 - 832 822</h3>
                </div>
                <div className="flex justify-start items-center text-cyan-800 gap-3">
                    <FaGithub />
                    <h3 className="text-xl font-medium"><a href="https://github.com/arefin22">GitHub</a></h3>
                </div>
                <div className="flex justify-start text-cyan-800 items-center gap-3">
                    <FaLinkedin />
                    <h3 className="text-xl font-medium"><a href="https://www.linkedin.com/in/shamsularefinn/">Linkedin</a></h3>
                </div>
                <div className="flex justify-start text-cyan-800 items-center gap-3">
                    <MdEmail />
                    <h3 className="text-xl font-medium"><a href="mailto:shamularefin500@gmail.com"> Gmail</a></h3>
                </div>
            </div>

            <div className="gradient-background rounded-2xl m-5 p-4">
                <ul className="text-lg menu text-cyan-800 font-medium">
                    <li className="hover:bg-orange-200 rounded-lg"><a href="#home">Home</a></li>
                    <li className="hover:bg-orange-200 rounded-lg"><a href="#about">About Me</a></li>
                    <li className="hover:bg-orange-200 rounded-lg"><a href="#skills">Skills</a></li>
                    <li className="hover:bg-orange-200 rounded-lg"><a href="#experiences">Experiences</a></li>
                    <li className="hover:bg-orange-200 rounded-lg"><a href="#projects">Projects</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;