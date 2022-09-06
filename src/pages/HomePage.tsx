import { useState } from "react";
import Navbar from '../components/Navbar'
import SideComponent from '../components/SideComponent'
import MainComponent from '../components/MainComponent'

const HomePage = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div id='home-page'>
        <Navbar/>
        <main>
            <SideComponent toggle={toggle} setToggle={setToggle}/>
            <MainComponent toggle={toggle} setToggle={setToggle}/>
        </main>
    </div>
  )
}

export default HomePage