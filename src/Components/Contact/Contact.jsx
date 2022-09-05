import React from 'react'
import { motion } from "framer-motion"
import "../Contact/Contact.scss"
const link = {
  initial:{
    y:0
  },
  animate:{
    y:-4,
    color:"#666",
    transition:{
      type:"spring",
      duration:.3
    }
  }
}

export default function Contact() {
  return (
    <div className='contact'>
      <div className="text">
        Got a question, proposal, project or want to work together on something? Feel free to reach out.
      </div>
      <div className="email"><motion.a variants={link} whileHover="animate" initial="initial" href="https://mail.google.com/mail/u/1/#inbox?compose=CllgCJlJVdkJDdVZjlWvVSbKxQGVlpVrjNZndpfHpPMmjSJMtKhjwpHDfSFgcsSvKNqKsXMpdjB" target="_blank" rel="noopener noreferrer">jainpreksha2712@gmail.com</motion.a></div>
    </div>

  )
}
