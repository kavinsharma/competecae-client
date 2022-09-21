import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

import logo from '../../assets/cardimg/caelogo.png'
import img from '../../assets/cardimg/img.png'
import {AiOutlineDown, AiOutlineMail} from 'react-icons/ai'
import {IoMdNotificationsOutline} from 'react-icons/io'
// Link

const Header = () => {
  return (
    <div className='headWrapper' >

<nav className='Header'>
<div className="logo">

<img src={logo} alt="" />
</div>
<input type="text" placeholder='search.....' />
<span>Home</span>
<span>Details</span>
<span>Social</span>
<span>Competitions</span>
<span>Dashboard</span>
<span> <AiOutlineMail/>   </span>
<span> <IoMdNotificationsOutline/>   </span>
<span className='profile'>
<img src={img} alt="" />
Jammet Roy
<AiOutlineDown />
</span>




</nav>

    </div>
  )
}

export default Header