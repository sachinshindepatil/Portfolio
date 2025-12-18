import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/sachin_shinde_logo_xx.png";
import { FaSquareXTwitter } from "react-icons/fa6";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
                <img src={logo} className="mx-2" width={120} height={80} alt="logo"/>
            </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="http://www.linkedin.com/in/sachin-shinde-0a6491173" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
           <FaLinkedin />
          </a>
          <a href="https://github.com/sachinshindepatil" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
           <FaGithub />
          </a>
          <a href="https://www.instagram.com/shindesarkar_87" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
           <FaInstagram />
          </a>
          <a href="http://www.x.com/shindesarkar_87" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
           <FaSquareXTwitter />
          </a>
        </div>
    </nav>
  )
}

export default Navbar
