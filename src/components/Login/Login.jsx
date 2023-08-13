import React from 'react'
import {motion} from "framer-motion"
import {FcGoogle} from "react-icons/fc"
import { server } from "../../redux/store.js";

const Login = () => {
  const loginHandler=()=>{
    window.open(`${server}/googlelogin`,"_self");
    }
  return (
    <section className='Login'>
    <motion.button
    initial={{
        y:"-100%"
    }}
    animate={{
        y:0
    }}
    onClick={loginHandler}
    >
        login With google
        <FcGoogle/> 
    </motion.button>
    </section>
  )
}

export default Login