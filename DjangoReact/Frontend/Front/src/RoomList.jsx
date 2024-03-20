import './style/App.css'
import InputRoom from './InputRoom'

// eslint-disable-next-line react/prop-types
const RoomList = ({rooms})=>{
    return(
    <div className="product-list">
        <div className="procucts-block-items">
          {rooms?.map((room)=>(
                <InputRoom key={room.id} room ={room}/>
          ))}
        </div>
        <div className="block-opacity"></div>
    </div>
    )
}
export default RoomList