import './RoomCart.css'

// eslint-disable-next-line react/prop-types
const InfoRoom = ({room})=>{
    return(
        <div className="block-info">
        <div className="info-name"><h1>{room.name}</h1> <div className="block-like"><ion-icon name="heart-circle-outline"></ion-icon></div></div>
        <div className="main-info">City:{room.city}</div>
        <div className="main-info">Number of rooms: {room.numberOfRooms}</div>
        <div className="main-info">Type of housing: {room.typeOfHouse}</div>
        <div className="main-info">Price:£{room.price}/per night</div>
        <form action="">
            <div className="blockbutton">
                <button type="button">Call the owner</button>
            </div>
        </form>
    </div>
    )
}

export default InfoRoom