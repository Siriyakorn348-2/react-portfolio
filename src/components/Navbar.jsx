import logo from "../assets/pic4.png";
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt="logo" />
      </div>
      <div  className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a
          href="https://github.com/Siriyakorn348-2" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-gray-600"
        >
        <FaGithub />
        </a>
       
      </div>
    </nav>
  );
};

export default Navbar