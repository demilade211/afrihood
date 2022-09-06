import React from 'react'
import circle from "../assets/images/Ellipse 2.svg"
import message from "../assets/images/Vector (1).svg"
import searchIcon from "../assets/images/Vector.svg"
import gridM from "../assets/images/grid menu.svg"
import prof from "../assets/images/profile-icon.svg"
import ark from "../assets/images/Boothhrak logo white 1.svg"
import asset from "../assets/images/Asset Icon 1.svg"
import account from "../assets/images/Account Icon 1.svg"
import drop from "../assets/images/drop.svg"

const Navbar = () => {
  return (
    <header id='nav'>
        <nav>
            <div className='left'>
                <span><img className='img' src={ark} alt="" />Ark</span>
                <span><img className='img' src={asset} alt="" />Asset<img src={drop} className="drop-img" alt="" /></span>
                <span><img className='img' src={account} alt="" />Account</span>
            </div>
            <div className='right'>
                <div className='search'>
                    <input type="text" placeholder='search'/>
                    <img src={searchIcon} alt="" />
                </div>
                <img src={circle} alt="" />
                <img src={message} alt="" />
                <img src={gridM} alt="" />
                <img src={prof} alt="" />
            </div>
        </nav>
    </header>
  )
}

export default Navbar