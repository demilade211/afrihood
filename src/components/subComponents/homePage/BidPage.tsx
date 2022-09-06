import React from 'react'
import OffersCard from './OffersCard'
import lens from "../../../assets/images/lens.svg"

const BidPage = () => {
  return (
    <div className='bid-con'>
        <div className='search'>
            <input type='text' placeholder='Search Request'/>
            <div className='btn'><img src={lens}/></div>
        </div>
        <h2 className='brown'>Advanced Search</h2>
        <div className='third-row'>
            <h3>Sort</h3>
            <div>Best Match</div>
            <div>Most Recent</div>
        </div>
        <div className='fourth-row'> 
            <OffersCard/>
            <OffersCard/>
        </div>
    </div>
  )
}

export default BidPage