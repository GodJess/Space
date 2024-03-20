import './RoomCart.css'
import './style/App.css'
import Slider from './Slider.jsx'
import Descript from './Descript.jsx'
import InfoRoom from './InfoRoom.jsx'


// eslint-disable-next-line react/prop-types
const DetailRoom = ({room})=>{
    return(
        <div className="product-list">
            <div className="prod-block">
                <Slider  room={room}/>
                <InfoRoom  room={room}/>
                <Descript room={room}/>
            </div>
            
            <div className="block-opacity"></div>
        </div>
    )
}
export default DetailRoom