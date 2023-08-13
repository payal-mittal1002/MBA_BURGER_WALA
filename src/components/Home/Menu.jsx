import React from 'react'
import MenuCard from './MenuCard'
import Burger1 from "../../assets/burger1.png"
import Burger2 from "../../assets/burger2.png"
import Burger3 from "../../assets/burger3.png"
import { useDispatch } from 'react-redux'
import  toast  from 'react-hot-toast'

const Menu = () => {
  const dispatch=useDispatch();
  const addToCartHandler=(itemNum)=>{
    switch (itemNum) {
      case 1:
        dispatch({type:"cheeseBurgerIncrement"});
        dispatch({type:"calculatePrice"});
        toast.success("Add to Cart");
        break;
      case 2:
        dispatch({type:"vegCheeseBurgerIncrement"});
        dispatch({type:"calculatePrice"});
        toast.success("Add to Cart");
        break;
      case 3:
        dispatch({type:"burgerWithFriesIncrement"});
        dispatch({type:"calculatePrice"});
        toast.success("Add to Cart");
        break;

    
      default:
        dispatch({type:"cheeseBurgerIncrement"});
        dispatch({type:"calculatePrice"});
        toast.success("Add to Cart");
        break;
    }
  }
  return (
   
     <section id='menu'>
      
      <h1>Menu</h1>
      <div>
        
        <MenuCard itemNum={1} BurgerSrc={Burger1} Price={200} Title="Cheese Burger" handler={addToCartHandler} delay={0.1}/>
        <MenuCard itemNum={2} BurgerSrc={Burger2} Price={500} Title="Veg Cheese Burger" handler={addToCartHandler} delay={0.5}/>
        <MenuCard itemNum={3} BurgerSrc={Burger3} Price={1800} Title="Cheese Burger with French Fries" handler={addToCartHandler} delay={0.8}/>
      </div>
     </section>
  )
}

export default Menu