import "./AboutMe.css";
import profPic from "../../Assets/profPic.png";

const AboutMe = () => {
  return (
    <>
      <div className="aboutMeContainer">
        <div className="left_ab">
          <div className="abimage">
            <img src={profPic} alt="" className="pp" />
          </div>
        </div>
        <div className="right_ab">
          <span className="aboutMe">ABOUT ME</span>
          <p className="desc">I'm a versatile Full Stack Developer</p>
          <p>As a Full Stack Developer, I'm a tech enthusiast with a passion for crafting dynamic and user-friendly web applications. My journey in web development began with HTML, CSS, and JavaScript, and it's been an exhilarating ride since. Whether it's front-end or back-end, I'm equally at home, proficient in a range of technologies like React, Node.js, and more. My goal is to build seamless, responsive, and visually appealing websites. I'm committed to staying up-to-date with the latest industry trends and always eager to explore new technologies. With a background in data engineering, I bring analytical skills to the table, ensuring that the solutions I create are not only functional but also optimized. I thrive on challenges and believe in constant learning and growth. </p>
          <span><b>Technical Skills:</b></span>
     
              <div className="skills_block">
            {/* <li><b>Technologies/Frameworks: </b>HTML5, CSS3, MongoDB, React, NodeJS, Typescript, UNIX</li>
            <li><b>Languages: </b>Java, JavaScript, SQL</li>
            <li><b>Version Control: </b>Git</li>
            <li><b>Design tools: </b>Figma</li>
            <li><b>Developer Tools: </b>VS Code, Eclipse, DBeaver, Spotfire</li> */}
             
                    <div className="title-card">
                    <h3>Technologies/<br></br>Frameworks</h3>
                    <div className="values-container">
                      <div className="values">
                        <p>React, NodeJS, Tailwind CSS, HTML5, CSS3, MongoDB, UNIX</p>
                      </div>
                    </div>
                  </div>
                    
                    <div className="title-card">
                    <h3>Version Control</h3>
                    <div className="values-container">
                    <div className="values">
                      <p>Git</p>
                    </div>
                    </div>
                  </div>

                  <div className="title-card">
                    <h3>Languages</h3>
                    <div className="values-container">
                    <div className="values">
                      <p>Java, JavaScript, SQL</p>
                    </div>
                    </div>
                  </div>

                  <div className="title-card">
                    <h3>Developer Tools</h3>
                    <div className="values-container">
                    <div className="values">
                      <p>VS Code, Redux DevTools, Eclipse, DBeaver, Spotfire, </p>
                    </div>
                    </div>
                  </div>

                  <div className="title-card">
                    <h3>Design Tools</h3>
                    <div className="values-container">
                    <div className="values">
                      <p>Figma</p>
                    </div>
                    </div>
                  </div>

                  </div>

        </div>
      </div>
    </>
  );
};
export default AboutMe;
