import { useState } from "react";
import rate from "../../../assets/images/rate.svg"
import hour from "../../../assets/images/hour.svg"
import filter from "../../../assets/images/filter.svg"
import stars from "../../../assets/images/stars.svg"
import save from "../../../assets/images/save.svg"
import location from "../../../assets/images/location.svg"
import share from "../../../assets/images/share.svg"
import send from "../../../assets/images/send.svg"
import direction from "../../../assets/images/direction.svg"
import right from "../../../assets/images/right.svg"
import point from "../../../assets/images/point.svg"
import time from "../../../assets/images/time.svg"
import u_globe from "../../../assets/images/check.svg"
import phone from "../../../assets/images/phone.svg"
import shield from "../../../assets/images/shield.svg"
import check from "../../../assets/images/check.svg"
import RestaurantCard from './RestaurantCard'

const Patronise = () => {
    const [one, setOne] = useState(false)

    return (
        <div className='patron-con'>
            {
               one ?<>
                    <div className='heading'>
                        <div className='search'></div>
                        <div className='filters'>
                            <div className='filter'><img src={rate} /></div>
                            <div className='filter'><img src={hour} /></div>
                            <div className='filter'><img src={filter} /></div>
                        </div>
                    </div>
                    <RestaurantCard />
                    <RestaurantCard />
                </>:
                <>
                    <div className="picture"></div>
                    <div className="details">
                        <h2>Chicken Republic - Doxa Road</h2>
                        <p>4.1<span><img src={stars}/></span>299 reviews  NN</p>
                        <p>Fast food restaurant</p>
                    </div>
                    <div className="others">
                        <div><img src={direction}/></div>
                        <div><img src={save}/></div>
                        <div><img src={location}/></div>
                        <div><img src={send}/></div>
                        <div><img src={share}/></div>
                    </div>
                    <div className="benefits">
                        <div className="left">
                            <span><img src={check}/>Dine-in . </span>
                            <span><img src={check}/>Takeaway . </span>
                            <span><img src={check}/>Delivery . </span>
                        </div>
                        <img src={right}/>
                    </div>
                    <div className="res-info">
                        <ul>
                            <li><span><img src={point}/>Dine-in . </span>Peter Odili Rd, Trans Amadi 500101, Port Harcourt </li>
                            <li><span><img src={time}/>Dine-in . </span>Open now: 7am-10pm Updated by business 2 weeks ago</li>
                            <li><span><img src={u_globe}/>Dine-in . </span>https://www.chicken-republic.com/</li>
                            <li><span><img src={phone}/>Dine-in . </span>+2348090165975</li>
                            <li><span><img src={direction}/>Dine-in . </span>Q2XW+7W Port Harcourt</li>
                            <li><span><img src={shield}/>Dine-in . </span>Claim this business</li>
                        </ul>
                    </div>
                </>
            }

        </div>
    )
}

export default Patronise