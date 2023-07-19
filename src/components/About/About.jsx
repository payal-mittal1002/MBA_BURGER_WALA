import React from 'react'
import { Link } from 'react-router-dom'
import {RiFindReplaceLine} from 'react-icons/ri'
import me from '../../assets/founder.webp'
const About = () => {
  return (
    <section className="About">
        <main>
            <h1>About Us</h1>
            <article>
                <h4>MBA Burger Wala</h4>
                <p>Our aim is to create the most tasty burger on planet.</p>
                <p>Explore various types of food and burgers. Click below to see the menu</p>
                <Link to='/'><RiFindReplaceLine/></Link>
            </article>
            <div>
                <h2>Founder</h2>
                <article>
                    <div>
                        <img src={me} alt='Founder'/>
                        <h3>Payal Mittal</h3>
                    </div>
                    <p>Welcome to MBA Burger Wala, where we bring together the power of business and the pleasure of burgers using the MERN stack.</p>
                </article>
            </div>
        </main>
    </section>
  )
}

export default About