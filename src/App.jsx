import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Tecnos from './components/tecnologias/Tecnos'
import Proyectos from './components/proyectos/Proyectos'
import Educacion from './components/educacion/Educacion'
const App = () => {
  return (
        <div className="container" id="header">
          <div className="row">
            <div className="col-6">
              <Header />
            </div>
            <div className="col-6" id="content">
              <div className="col-12  mt-4" id="btnContent">
                <Educacion />
              </div>
              <div className="col-12  mt-4" id="btnContent">
                <Tecnos />
              </div>
              <div className="col-12 mt-4" id="btnContent">
                <Proyectos />
              </div>

            </div>
          </div>
        </div>
  )
}

export default App