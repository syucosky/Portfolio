import React from "react";
import "./header.css";
import Logo from "../Logo";
import logoGmail from "../../assets/gmail.png";
import logoGithub from "../../assets/github.png";
import logoGitHubWhite from "../../assets/githubWhite.png";
import logoLinkedin from "../../assets/linkedin.png";
import logoCv from "../../assets/cv.png"; 
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
              trabajando en equipo y aportarle valor. Mi mayor motivación
              es poder seguir desarrollándome profesionalmente, contribuir con
              mis habilidades en una organización y generar un impacto con ellas.
            </p>
          </div>
          <div className="col-2" id="btnRss">
            <div className="d-flex norow">
              <a className="me-3 " href="mailto:syucosky@gmail.com" target="_blank"> <Logo logo={logoGmail}/> </a>
              <a className="me-3 " href="https://www.linkedin.com/in/syucosky/" target="_blank"> <Logo logo={logoLinkedin}/> </a>
              <a className="me-3 " href="https://github.com/syucosky" target="_blank"> <Logo logo={logoGithub}/> </a>
              <a className="me-3 " href="https://www.canva.com/design/DAF8BknPucE/lwludGSRL1KovuNonhKpHA/edit?utm_content=DAF8BknPucE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank"> <Logo logo={logoCv}/> </a>                    
            </div> 
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
