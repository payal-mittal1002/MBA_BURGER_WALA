import React from 'react'
import{AiFillInstagram,AiFillYoutube,AiFillGithub} from "react-icons/ai"
const Footer = () => {
  return (
   <footer>
    <div>
        <h2>MBA BURGER WALA</h2>
        <p>We are trying to give you the best test possible </p>
        <br/>
        <em>Give attention to genuine feedback</em>
        <strong>All right received @mbaburgerwala</strong>
    </div>
    <aside>
      <h4>Follow Us</h4>
      <a href='http://youtube.com'><AiFillYoutube/></a>
      <a href='http://instagram.com/payalmittal1002'><AiFillInstagram/></a>
      <a href='https://github.com/payal-mittal1002'><AiFillGithub/></a>
      <a href=''></a>
    </aside>
   </footer>
  )
}

export default Footer