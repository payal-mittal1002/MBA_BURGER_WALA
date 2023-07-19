import React from 'react'
import {motion} from "framer-motion"
import {FcGoogle} from "react-icons/fc"
const Login = () => {
  return (
    <section className='Login'>
    <motion.button
    initial={{
        y:"-100%"
    }}
    animate={{
        y:0
    }}
    >
        login With google
        <FcGoogle/> 
    </motion.button>
    </section>
  )
}

export default Login