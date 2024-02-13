import React from 'react'
const Logo = ({logo}) => {
  return (
    <div>
      <img src={logo} className="w-100 m-3" alt="logo" />
    </div>
  )
}

export default Logo