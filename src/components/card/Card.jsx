import React from 'react'
const card = ( {img,title,description} ) => {
  return (
    <div className="d-flex h-100">
      <div className="card border-dark">
        <img src={img} className="card-img-top h-100" alt="projectImg" />
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}'s content.</p>         
        </div>
        <a href="{linkWeb}" className="btn btn-primary m-1">Ir al proyecto</a>
        <a href="{linkAgitHub}" className="btn btn-primary m-1">Ver el codigo</a>
      </div>
    </div>
  )
}

export default card