import React from "react";

const Tecnos = () => {
  return (
    <>
    <div className="text-center">
          <a
            className="btn w-100 border-0"
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
            >
            <h5 className="">Tecnologias</h5>
          </a>
     </div>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          <div className="container">
            <ul className="d-flex">
              <ul className="">
                <p className=""><b>Back-End</b>          
                <li>Java</li>
                <li>Spring Boot</li>
                <li>Hibernate</li>
                <li>Jpa</li></p>
              </ul>
              <ul className="">
              <p><b>Front-End</b>
                <li>JavaScript</li>
                <li>Html</li>
                <li>Css</li>
                <li>React</li></p>
              </ul>
              <ul className="">
                <p><b>Base de datos</b>
                <li>MySql</li>
                </p>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tecnos;
