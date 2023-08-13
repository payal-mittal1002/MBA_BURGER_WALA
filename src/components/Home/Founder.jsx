import React from 'react'
import{motion} from "framer-motion"
import me from "../../assets/founder.webp";
const Founder = () => {
    const options={
        initial:{
            x:"-100%",
            opacity:0
        },
        whileInView:{
            x:"0%",
            opacity:1   
        }
    }
  return (
    <section className='Founder'>
        <motion.div {...options}>
            <img src={me} alt="Founder" height={200} width={200}/>
            
            <h3>Payal Mittal</h3>
            <p>Hey .everyone I am Payal Mittal <br/>Order food online for home delivery in Bangalore. Experience fastest food delivery service with no minimum order & GPS tracking.</p>
        </motion.div>
    </section>
  )
}

export default Founder