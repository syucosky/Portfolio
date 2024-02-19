import React from 'react'
import Card from '../card/Card';
import { proyectos } from './proyectos';

const Proyectos = () => {
  return (
    <>
    <div className="text-center">
        <a
          className="btn w-100 border-0"
          data-bs-toggle="collapse"
          href="#collapseExample1"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample1"
        >
              <h5 className="">Proyectos</h5>
        </a>
      </div>
      <div className="collapse" id="collapseExample1">
        <div className="card card-body">
          <div className="row ">
          {proyectos.map((proyecto) => (
            <div key={proyecto.titulo} className="col-4 mt-1 ">
              <Card desc={proyecto.descripcion} title={proyecto.titulo} linkWeb={proyecto.link} linkAgitHub={proyecto.git}/>
            </div>
          ))}
          </div>
      </div>
      </div>
    </>
  )
}

export default Proyectos