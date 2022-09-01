import React from 'react'
import "./Navbar.scss"
export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="left">
        <div className="name">Preksha Jain</div>
      </div>
      <div className="right">
        <div className="resume"><a href="/">RESUME</a></div>
      </div>
    </div>
  )
}
