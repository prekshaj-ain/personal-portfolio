import React from 'react'
import Navbar from '../Navbar/Navbar'
import { motion } from 'framer-motion'
import "../Home/Home.scss"
const header ={
  animate:{
    transition:{
      staggerChildren:.4
    }
  }
}
const banner={
  initial: {opacity:0},
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: .2
      
    }
  }
};
const wordAnimate = {
  initial: { opacity:0,y : 200 },
  animate: {
    y : 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: .7,
    },
  }
};
export default function Home() {
  return (
    <div className="home">
      <Navbar/>
      <motion.div className="heading" variants={header} initial="initial" animate="animate">
        <motion.span className='line'variants={banner} > 
          <motion.span className='word' variants={wordAnimate}>Full</motion.span>
          <motion.span className='word' variants={wordAnimate}>Stack</motion.span>
        </motion.span>
        <motion.span className='line'variants={banner}>
          <motion.span className='word' variants={wordAnimate}>Web</motion.span>
          <motion.span className='word' variants={wordAnimate}>Developer</motion.span>
        </motion.span>
      </motion.div>
      <div className="introText">I'm Preksha Jain, a full stack web developer - focused on constructing Creative and Functional web experiences that is Easy To Use and Optimized For Mobile.</div>
    </div>
  )
}
