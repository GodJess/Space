import './style/App.css'
import {Link} from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const InputRoom = ({room})=>{
    return(
        <div key={room.id} className="cart-id-block">
                  <div className="cart-of-product">
                      <img src={room.img1} alt=""/>
                      <div className="abs"><Link className='Link-to-room' to={`/room/${room.id}`}></Link></div>
                      <div className="part-descript">
                          <div className="parts-name_and_fav">
                              <h2>{room.name}</h2>
                              <div className="like-block"><ion-icon class="ionicons" name="heart-outline"></ion-icon></div>
                          </div>
                          <div className="parts-name_and_fav">
                              <p> {room.countRooms} room</p>
                          </div>
                          <div className=" last">
                              <p className ="price">£{room.price}/</p> <p> per night</p>
                          </div>
                      </div>
                  </div>
              </div>
    )
}
export default InputRoom