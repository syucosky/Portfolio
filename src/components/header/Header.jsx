import React from "react";
import "./header.css";
import Logo from "../Logo";
import logoGmail from "../../assets/gmail.png";
import logoGithub from "../../assets/github.png";
import logoGitHubWhite from "../../assets/githubWhite.png";
import logoLinkedin from "../../assets/linkedin.png";
import logoCv from "../../assets/cv.png"; 
import pdf from "../../assets/CVSebastianYucosky.pdf";
const Header = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="">
            <h1>
             Sebastian Yucosky
            </h1>
            <h5>Desarrollador Full Stack</h5>
          </div>
          <div className="">
            <p>
              Soy una persona apasionada por aprender y me destaco por mi
              capacidad de asimilar rápidamente nuevos conocimientos. Disfruto
              trabajando en equipo y me encanta programar. Mi mayor motivación
              es poder seguir desarrollándome profesionalmente y contribuir con
              mis habilidades en una organización.
            </p>
          </div>
          <div className="col-2" id="btnRss">
            <div className="d-flex norow">
              <a className="me-3 " href="mailto:syucosky@gmail.com" target="_blank"> <Logo logo={logoGmail}/> </a>
              <a className="me-3 " href="https://www.linkedin.com/in/syucosky/" target="_blank"> <Logo logo={logoLinkedin}/> </a>
              <a className="me-3 " href="https://github.com/syucosky" target="_blank"> <Logo logo={logoGithub}/> </a>
              <a className="me-3 " href="https://drive.google.com/file/d/18V1Hmst88k5oYLbYIQ6WfkxeJFIsiRhR/view?usp=sharing" target="_blank"> <Logo logo={logoCv}/> </a>                    
            </div> 
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
