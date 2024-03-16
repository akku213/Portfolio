import "./Contact.css" 
import { FaMapMarker, FaPhone, FaGithub, FaEnvelope, FaLinkedin} from "react-icons/fa" 

const Contact=() => {
    return(
        <>
        <div className="contactContainer">
            {/* <div className="contactForm">
                <h1>Contact Me</h1>
            </div> */}
            <div className="contactBox">
                <div className="leftContact">
                    <div className="lgit">
                    <h3>Let's get in touch</h3>
                    </div>
                    <div className="mtContact">
                        <div className="address">
                            <div className="iconAddress">
                                <span className="icons"><FaMapMarker size={20}/></span>
                            </div>
                            <div className="detailAddress">
                                
                                    <span>Anchor Park, Vasai East, <br/> Maharashtra - India</span>
                           
                            </div>
                        </div>
                        <div className="address">
                            <div className="iconAddress">
                                <span className="icons"><FaPhone size={20}/></span>
                            </div>
                            <div className="detailAddress">
                           
                                    <span>8999027437</span>
                                
                            </div>
                        </div>
                        <div className="address">
                            <div className="iconAddress">
                                <span className="icons"><FaEnvelope size={20}/></span>
                            </div>
                            <div className="detailAddress">
                                <span>akankshashrivastav855@gmail.com</span> 
                                
                            </div>
                        </div>
                        <div className="address">
                            <div className="iconAddress">
                                <span className="icons"><FaGithub size={20}/></span>
                            </div>
                            <div className="detailAddress">
                            <a href="https://github.com/akku213/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                            akku213
                            </a>                          
                            </div>
                        </div>
                        <div className="address">
                            <div className="iconAddress">
                                <span className="icons"><FaLinkedin size={20}/></span>
                            </div>
                            <div className="detailAddress">
                            <a href="https://www.linkedin.com/in/akanksha-shrivastav/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                                akanksha-shrivastav-89a34814b
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        </>
    )
}
export default Contact