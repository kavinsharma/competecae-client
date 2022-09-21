import React from 'react'
import {IoLogOutSharp} from 'react-icons/io5'
import {AiFillSetting} from 'react-icons/ai'
import './Sidebar.css'
import cae from '../../assets/cardimg/cae2.png'
const Sidebar = () => {
  return (
    <div className='sidebarWrapper'>

<h1>Competitions</h1>
<div className='sideLinks'>

<span className='active'> <img src={cae} alt="" /> lorem </span>
<span>Lose 40 Pounds</span>
<span>Get Six Packs</span>
<span>Best Stock Picker</span>
<span>NBA Games Picked </span>

</div>


<div className='icons'>

<h5> <AiFillSetting />  setting </h5>
<h5> <IoLogOutSharp /> logout </h5>



</div>





    </div>
  )
}

export default Sidebar