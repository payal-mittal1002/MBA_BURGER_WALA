import React from 'react'
import {Link} from "react-router-dom"
import{AiFillInstagram,AiFillYoutube,AiFillGithub} from "react-icons/ai"
import {AiOutlineMail} from "react-icons/ai"


const ContactSaved = () => {
  return (
    <section className='PaymentSuccess'>
    <main>
        <h1>Thank you for your Interest</h1>
        <h2>CONTACT US </h2>
        
      <a href='http://youtube.com'>  Youtube<AiFillYoutube/></a>
      <a href='http://instagram.com/payalmittal1002'>Instagram<AiFillInstagram/></a>
      <a href='https://github.com/payal-mittal1002'>Github<AiFillGithub/></a>
      <a >@mbaburgerwala<AiOutlineMail/></a>
     
    </main>
</section>
  )
}

export default ContactSaved