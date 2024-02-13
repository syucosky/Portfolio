import React from 'react'
import Card from '../card/Card';
import movie from '../../assets/movieProject.png'
import tecnoTienda from '../../assets/tecnoTienda.png'
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
            <div className="col-6 mt-1 ">
              <Card img={movie}/>
            </div>
            <div className="col-6 mt-1 ">
              <Card img={tecnoTienda}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Proyectos