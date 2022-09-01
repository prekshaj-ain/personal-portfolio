import React from 'react'
import Navbar from '../Navbar/Navbar'
import "../Home/Home.scss"
export default function Home() {
  return (
    <div className="home">
      <Navbar/>
      <div className="heading"><span className='line'>Full Stack</span><span className='line'>Web Developer</span></div>
      <div className="introText">I'm Preksha Jain, a full stack web developer - focused on constructing Creative and Functional web experiences which is Easy To Use and Optimized For Mobile.</div>
    </div>
  )
}
