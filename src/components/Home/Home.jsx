import React from 'react'
import {motion} from "framer-motion"
import Founder from './Founder'
import Menu from './Menu'
import Footer from '../Layout/Footer'
const Home = () => {
  const options={
    initial:{x:"-100%",opacity:"0"},
    whileInView:{x:"0%",opacity:"1"}
  }
  const pOptions={
    initial:{x:"-100%",opacity:"0"},
    whileInView:{x:"0%",opacity:"1"},
    transition:{delay:"0.2"} 
  }
  const aOptions={
    initial:{y:"-100%",opacity:"0"},
    whileInView:{y:"0%",opacity:"1"}
  }


  return (
    <>
    <section className='Home'>
      <div>
        <motion.h1 {...options}>MBA BURGER WALA</motion.h1>
        <motion.p {...pOptions}>Give yourself a testy burger</motion.p>
      </div>
      <motion.a href='#menu' {...aOptions}>Explore Menu</motion.a>
    </section>
    <Founder/>
    <Menu/>
   
    </>
  )
}

export default Home