import React from 'react'
import verified from "../../../assets/images/verified.svg"
import locaton_black from "../../../assets/images/location-black.svg"
import stars from "../../../assets/images/stars.svg"



const OffersCard = () => {
  return (
    <div className='ocard-con'>
        <h3>Need a graphic designer who can handle my social media</h3>
        <p className='first-para'>Hourly: $20.00-$30.00 - intermediate - Est. Time: Less than 1 month, Less than 30 hrs/week -
        <br/>Posted 1 hour ago</p>
        <div className='othird-row'>
            <p>I have a page called blurry_cosmos I want someone who can manage my account. I need a
            graphic designer and also creative.</p>
            <div className='skills'>
                <div className='skill'>Instagram</div>
                <div className='skill'>Social Media Imagery</div>
                <div className='skill'>Graphic Design</div>
                <div className='skill'>Adobe Photoshop</div>
            </div>
        </div>
        <p className='third-para'>Proposals: Less than 5</p>
        <div className='last-row'>
            <span><img src={verified}/>Payment unverified</span>
            <span><img src={stars}/></span>
            <span>$0 spent</span>
            <span><img src={locaton_black}/>India</span>
        </div>
    </div>
  )
}

export default OffersCard