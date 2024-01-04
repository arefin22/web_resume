import { FaGithub, FaLinkedin, FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="sticky top-5">
      <div className="backdrop-blur-lg drop-shadow-lg bg-white/30 rounded-2xl m-5 p-4">
        <img
          className="w-72 rounded-2xl mx-auto drop-shadow-lg"
          src="https://i.ibb.co/qdhGT9x/f-66927.jpg"
          alt="Shamsul Arefin's Profile Photo"
        />
      </div>
      <div className="backdrop-blur-lg drop-shadow-lg bg-white/30 rounded-2xl m-5 p-4">
        <h1 className="text-sky-900 text-center drop-shadow-lg text-4xl font-extrabold mt-4">
          Shamsul Arefin
        </h1>
        <p className="text-center text-sky-900">(Web Developer)</p>
        <hr className="m-2" />
        <div className="ml-5 ">
          <div className="flex justify-start items-center text-cyan-800 gap-3">
            <FaPhoneSquareAlt />
            <h3 className="text-xl font-medium drop-shadow-lg">+880 1786 - 832 822</h3>
          </div>
          <div className="flex justify-start items-center hover:text-orange-200 text-cyan-800 gap-3">
            <FaGithub />
            <h3 className="text-xl drop-shadow-lg font-medium">
              <a href="https://github.com/arefin22" target="_blank" rel="noopener noreferrer">GitHub</a>
            </h3>
          </div>
          <div className="flex justify-start text-cyan-800 hover:text-orange-200 items-center gap-3">
            <FaLinkedin />
            <h3 className="text-xl drop-shadow-lg font-medium">
              <a href="https://www.linkedin.com/in/shamsularefinn/" target="_blank" rel="noopener noreferrer">Linkedin</a>
            </h3>
          </div>
          <div className="flex justify-start text-cyan-800 hover:text-orange-200 items-center gap-3">
            <MdEmail />
            <h3 className="text-xl drop-shadow-lg font-medium">
              <a href="mailto:shamularefin500@gmail.com" target="_blank" rel="noopener noreferrer"> Gmail</a>
            </h3>
          </div>
        </div>
      </div>

      <div className="backdrop-blur-lg bg-white/30 rounded-2xl m-5 p-4">
        <ul className="text-lg menu text-cyan-800 font-medium">
          <li className="hover:bg-orange-200 rounded-lg">
            <a href="#home">Home</a>
          </li>
          <li className="hover:bg-orange-200 rounded-lg">
            <a href="#about">About Me</a>
          </li>
          <li className="hover:bg-orange-200 rounded-lg">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:bg-orange-200 rounded-lg">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:bg-orange-200 rounded-lg">
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
