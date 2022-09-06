import Bid from './subComponents/homePage/Bid';
import Patronise from './subComponents/homePage/Patronise';


const SideComponent = (props:any) => { 
  const {setToggle, toggle} = props
  return (
    <div id='side-comp'>
        <div className='toggle-con'>
          <div className='toggle' onClick={()=>setToggle(!toggle)}>
            <div className='inner-container'>
              <p>Patronise</p>
              <p>Bid</p>
            </div>
            <div className={`${toggle?'toggled-btn':'toggle-btn'}`}><p>{toggle?'Patronise':'Bid'}</p></div>
          </div>
        </div>
        {toggle?<Patronise/>:<Bid/>}
        
    </div>
  )
}

export default SideComponent