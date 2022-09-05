import React from 'react'
import "./Navbar.scss"
import { motion } from 'framer-motion'
const textAnimate = {
  initial:{
    opacity: 0,
  },
  animate:{
    opacity: 1,
    transition: {
      delay:1,
      duration:.5,
    }
  }
}
const button={
  
  hover:{
    scale:1.1,
    transition: {
      duration:0.3
    }
  }
}
export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="left">
        <motion.div className="name" variants={textAnimate}
        initial="initial"
        animate="animate"
        >Preksha Jain</motion.div>
      </div>
      <div className="right">
        <motion.div className="resume" variants={textAnimate} 
        initial="initial"
        animate="animate"
        ><motion.a variants={button} whileHover="hover"  href="/">RESUME</motion.a></motion.div>
      </div>
    </div>
  )
}
