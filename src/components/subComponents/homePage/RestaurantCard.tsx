import React from 'react'
import pic from "../../../assets/images/pic.svg"
import stars from "../../../assets/images/stars.svg"

const RestaurantCard = (props:any) => {
  const {setOne} = props
  return (
    <div className='res-card' onClick={()=>setOne(false)}>
        <div className='left'>
            <h3>Lesukaa Restaurant (CateringService & Food Delivery)</h3>
            <p>40<span><img src={stars}/></span>(39)</p>
            <p>Restaurant  Plot 337 Peter Odili Road Abuloma Best</p>
            <p>Open 24 hours</p>
            <p className='last-row'>Dine-in  -  Takeaway  -  Delivery</p>
        </div>
        <div className='right'>
            <img src={pic}/>
        </div>
    </div>
  )
}

export default RestaurantCard