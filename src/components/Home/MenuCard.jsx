import React from 'react'
import {motion} from "framer-motion"
const MenuCard = ({ItemNum,BurgerSrc,Price,Title,handler,delay=0}) => {
  return (
    <motion.div className='MenuCard'
    initial={{x:"-100%" ,opacity:0}}
    whileInView={{x:"0%" ,opacity:1}}
    transition={{delay}}
    >
        <div>Item {ItemNum}</div>
       <main>
        
        <img src={BurgerSrc} alt={ItemNum}></img>
        <h5>₹{Price}</h5>
        <p>{Title}</p>
        <button onClick={()=>handler(ItemNum)}>Buy Now</button>
       </main>
    </motion.div>
  )
}

export default MenuCard