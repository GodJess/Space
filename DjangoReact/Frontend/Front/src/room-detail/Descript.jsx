import './RoomCart.css'
import './App.css'

// eslint-disable-next-line react/prop-types
const Descript  = ({room})=>{
    return(
        <div className="product-description">
            <div className="description-name"><h1 className="site-name ">Description</h1></div>
            <div className="description"><p>{room.description}</p></div>
        </div>
    )
}

export default Descript