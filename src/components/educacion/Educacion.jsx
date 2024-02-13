import React from "react";

const Educacion = () => {
  return (
    <>
      <div className="text-center">
        <a 
          className="btn w-100 border-0"
          data-bs-toggle="collapse"
          href="#collapseExample3"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample3"
        >
          <h5 className="">Educacion</h5>
        </a>
      </div>
      <div className="collapse" id="collapseExample3">
        <div className="card card-body">
          <div className="container">
            <ul className="list-group">
              <li>
                <p>
                  <b>Analista programador en UNLP</b> - (en curso)
                </p>
              </li>
              <li>
                <p>
                  <b>Aceleración Sofftek(Java Backend)</b><br></br>
                      Java,SpringBoot (Oct 2023 -
                       Dic 2023)
                  </p>
              </li>
              <li>
                <p>
                  <b>Programador Backend (Java)</b><br></br> G&L Group (Junio 2022 -Abril 2023)
                </p>
              </li>
              <li>
                <p>
                  <b>Programador Backend(Java)</b><br></br> Oracle-Alura.(Dic 2021 - Mayo 2022)
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Educacion;
