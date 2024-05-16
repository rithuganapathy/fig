import React from 'react'
import { BsFlower2 } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import './Header.css'
function Header() {
  return (
    <div >
        <div className='head'>
            <h4><a>9855648832</a></h4>
            <h4><a>Letsbookit@gmail.com</a></h4>
            <div className='menu navbar'> 
        
        <nav>
          <ul>
            <li><a><FaFacebook /></a></li>
            <li><a><FaLinkedin /></a></li>
            <li><a><FaTwitter /></a></li>
          </ul>
          <div className='login navbar'>
            <ul>
            <li><a>Log in</a></li>
            <li><button className='sign'>Sign up</button></li>
            </ul>
            </div>
            <div className='nrs'>
                <select className="one" > 
                <option value="" disabled selected>Nrs</option>
                <option value="1"></option>
                <option value="2"></option>
                <option value="3"></option>
                <option value="4"></option>
                </select>
          </div>
        </nav>
      </div>
        </div> 
        <hr></hr>
        <div className='head2'>
        <h1><BsFlower2 />Let'sBookIt</h1>
        <div className='menu1 navbar1'> 
        
        <nav>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/explore">Explore</a></li>
            <li><a href="/booking">Bookings</a></li>
            <li><a href="/ticket">Find Ticket</a></li>
            <li><a href="/contact">Contact us</a></li>
          </ul>
        </nav>
      </div>
        </div>
    </div>
  )
}

export default Header