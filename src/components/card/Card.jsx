import React from 'react'


const card = ( {desc, title, linkWeb, linkAgitHub} ) => {
  return (
    <div className="d-flex h-100 w-100">
      <div className="card border-dark">
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
        </div>
        <a href={linkWeb} className="btn btn-primary m-1" target="_blank">Ir al proyecto</a>
        <a href={linkAgitHub} className="btn btn-primary m-1" target="_blank">Ver el codigo</a>
      </div>
    </div>
  )
}

export default card