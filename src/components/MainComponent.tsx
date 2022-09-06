import React from 'react'
import BidPage from './subComponents/homePage/BidPage'
const MainComponent = (props:any) => {
  const {setToggle, toggle} = props
  return (
    <div id='main-comp'>
      {!toggle&&<BidPage/>}
      {toggle&& <div className='map-con'> </div> }
    </div>
  )
}

export default MainComponent