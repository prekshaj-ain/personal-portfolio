import React from 'react'
import { motion } from "framer-motion"
import "./Footer.scss"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const link = {
  initial:{
    y:0
  },
  animate:{
    y:-2,
    color:"#666",
    transition:{
      type:"spring",
      duration:0.3
    }
  }
}
export default function Footer() {
  return (
    <div className='footer'>
        <div className="socialMedia">
            <motion.a variants={link} whileHover="animate" initial="initial" href='https://github.com/prekshaj-ain' target="_blank" rel="noopener noreferrer"><GitHubIcon /></motion.a>
            <motion.a variants={link} whileHover="animate" initial="initial" href='https://www.linkedin.com/in/preksha-jain-a7a77a195/' target="_blank" rel="noopener noreferrer"><LinkedInIcon /></motion.a>
        </div>
        <div className="text">Build by Preksha Jain</div>
    </div>
  )
}
