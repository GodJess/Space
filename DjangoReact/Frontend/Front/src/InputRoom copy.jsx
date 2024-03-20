import './style/App.css'

// eslint-disable-next-line react/prop-types
const InputRoom = ({room})=>{
    return(
        <div key={room.id} className="cart-id-block">
                  <div className="cart-of-product">
                      <img src={room.img1} alt=""/>
                      <div className="abs"></div>
                      <div className="part-descript">
                          <div className="parts-name_and_fav">
                              <h2>{room.name}</h2>
                              <div className="like-block"><img src="./public/Like.png" alt=""/></div>
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