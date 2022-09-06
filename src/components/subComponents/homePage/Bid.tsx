import React from 'react'
import edit from "../../../assets/images/edit.svg"
import access from "../../../assets/images/access_time.svg"
import add from "../../../assets/images/add.svg"
import suitcase from "../../../assets/images/suitcase.svg"
import dashboard from "../../../assets/images/dashboard.svg"
import globe from "../../../assets/images/globe.svg"


const Bid = () => {
  return (
    <div className='bid-con'>
        <h2>My Categories</h2>
        <ul>
            <li>Other-Admin Support</li>
            <li>Personal/Virtual Assistant</li>
            <li>Web Research</li>
            <li>Pro</li>
            <li><img src={edit}/></li>
        </ul>

        <h2>Visibility <span className='right-img'><img src={edit}/></span></h2>
        <p> <span className='left-img'><img src={globe}/></span>Public</p>

        <h2>Availability <span className='right-img'><img src={edit}/></span></h2>
        <p> <span className='left-img'><img src={access}/></span>More than 30hr/week</p>

        <h2>Booth Completion</h2>
        <div className='line'>
            <div></div>
            <div></div>
            <div></div>
            <span>100%</span>
        </div>
        <p className='no-top-margin'> <span className='left-img'><img src={add}/></span>Add Work History</p>

        <h2>Inventory</h2>
        <p> <span className='left-img'><img src={suitcase}/></span>My Inventory</p>

        <h2>Bids</h2>
        <p> <span className='left-img'><img src={dashboard}/></span>50 available connects</p>

    </div>
  )
}

export default Bid