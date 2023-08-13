import React from 'react'
import {motion} from "framer-motion"
import burger from "../../assets/burger2.png"
import { Link, useNavigate } from 'react-router-dom'
import ContactSaved from './ContactSaved'

const Contact = () => {
 
  return (
   <section className='Contact'>
   <motion.form  
   initial={{
    x:"-100vw",
    opacity:0,
   }}
   animate={{
    x:0,
    opacity:1,
   }}
   transition={{delay:0.2}}
   >
    <h2>Contact Us</h2>
    <input type="text" placeholder='Name'/>
    <input type="email" placeholder='Email'/>
    <textarea placeholder='Message...' rows={10} cols={30} />
    
   <Link className='submit' to="/ContactSaved">Send</Link>
    </motion.form>
    <motion.div  className='formBorder'
    initial={{
    x:"100vw",
    opacity:0,
   }}
   animate={{
    x:0,
    opacity:1,
   }}
   transition={{delay:0.2}}
    >
        <motion.div
        initial={{
            y:"-100vh",
            x:"50%",
            opacity:0
        }} 
        animate={{
            x:"50%",
            y:"-50%",
            opacity:1,
        }}
        transition={{
            delay:1
        }}
        >
           <img  src={burger} alt="Burger"/> 
        </motion.div>
    </motion.div>
   </section>
  )
} 

export default Contact