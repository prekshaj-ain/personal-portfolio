import React from 'react'
import { motion} from "framer-motion"
import "./Skills.scss"
const parent ={
  initital:{
    opacity:0,
  },
  animate:{
    opacity:1,
    transition: {
      staggerChildren: .5,
    }
  }
}
const Line = {
  initial:{
    width:"0px",
    opacity: 0
  },
  animate:{
    opacity: 1,
    width: "100%",
    transition: {
      duration: 0.8,
      ease: "easeOut"
    },
    
  }
}
const heading={
  initial:{
    opacity: 0,
    y:30,
  },
  animate:{
    opacity: 1,
    y:0,
    transition: {
      duration:0.6,
      ease:"easeOut"
    }
  }
}
const interests = {
  initial:{
    opacity:0,
  },
  animate:{
    opacity:1,
    transition: {
      staggerChildren: .2,
    }
  }
}
const interest = {
  initial:{
    y: 30,
    opacity: 0
  },
  animate:{
    y:0,
    opacity: 1,
    transition: {
      duration:.5,
      ease:"easeOut"
    }
  }
}

export default function Skills() {
  return (
    <motion.div className='skills' variants={parent} initial="initial" whileInView="animate" viewport={{once:true}}>
        <motion.hr variants={Line} />
        <motion.div className="title" variants={heading}>
            I'M ALWAYS INTERESTED ABOUT
        </motion.div>
        <motion.div className="interests" variants={interests}>
            <motion.span className='interest' variants={interest}>New Technologies</motion.span>
            <motion.span className='interest' variants={interest}>Design and Developement</motion.span>
            <motion.span className='interest' variants={interest}>Problem Solving</motion.span>
            <motion.span className='interest' variants={interest}>Startups</motion.span>
            <motion.span className='interest' variants={interest}>Databases and Servers</motion.span>
            <motion.span className='interest' variants={interest}>Security</motion.span>
            <motion.span className='interest' variants={interest}>API</motion.span>
            <motion.span className='interest' variants={interest}>Responsive Design</motion.span>
        </motion.div>
    </motion.div>
  )
}
