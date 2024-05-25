import "./Projects.css";
import { FiGithub } from "react-icons/fi";
import { TbExternalLink } from "react-icons/tb";
import NetflixLogo from '../../Assets/Netflix_logo.png'
import SwiggyLogo from '../../Assets/Swiggy_logo.png'

const Projects=() => {
    return(
        <>
            <h1 className="p-1">PROJECTS</h1> 
            <div className="project">
                <div className="project-card">
                <img src={SwiggyLogo} alt="Swiggy" />
                <ul>
                    <li>Created a React food delivery app</li>
                    <li>Integrated real-time ordering with Swiggy's APIs</li>
                    <li>Managed cart efficiently with Redux Toolkit</li>
                    <li>Ensured smooth navigation with React Router DOM</li>
                </ul>
                <div className="icons">
                    {/* <FiGithub size={20} />
                    <TbExternalLink size={20} /> */}
                <a href="https://github.com/akku213/Swiggy" target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
                <FiGithub size={20} />
                </a>
                <a href="https://drakenfoods.netlify.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
                <TbExternalLink size={20} />
                </a>
                </div>
                </div>
                <div className="project-card">
                <img src={NetflixLogo} alt="Netflix" />
                <ul>
                    <li>Enabled React/Firebase user authentication.</li>
                    <li>Embedded autoplay/mute YouTube videos.</li>
                    <li>Implemented multi-language feature.</li>
                    <li>Integrated TMDB API for movie suggestions.</li>
                </ul>
                <div className="icons">
                    {/* <FiGithub size={20} />
                    <TbExternalLink size={20} /> */}

                <a href="https://github.com/akku213/netflix-gpt" target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
                <FiGithub size={20} />
                </a>
                <a href="https://showmovies03.netlify.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
                <TbExternalLink size={20} />
                </a>
                </div>
                </div>
            </div>
            
        </>
    )
}
export default Projects