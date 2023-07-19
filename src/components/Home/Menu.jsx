import React from 'react'
import MenuCard from './MenuCard'
import Burger1 from "../../assets/burger1.png"
import Burger2 from "../../assets/burger2.png"
import Burger3 from "../../assets/burger3.png"

const Menu = () => {

  const addToCartHandler=(ItemNum)=>{

  }
  return (
   
     <section id='menu'>
      
      <h1>Menu</h1>
      <div>
        
        <MenuCard ItemNum={1} BurgerSrc={Burger1} Price={200} Title="Cheese Burger" handler={addToCartHandler} delay={0.1}/>
        <MenuCard ItemNum={2} BurgerSrc={Burger2} Price={500} Title="Veg Cheese Burger" handler={addToCartHandler} delay={0.5}/>
        <MenuCard ItemNum={3} BurgerSrc={Burger3} Price={1800} Title="Cheese Burger with French Fries" handler={addToCartHandler} delay={0.8}/>
      </div>
     </section>
  )
}

export default Menu