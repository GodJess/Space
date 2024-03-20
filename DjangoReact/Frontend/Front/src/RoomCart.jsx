import './style/App.css'
import './RoomCart.css'
import WindowPopup from './WindowPopup.jsx'
import DetailRoom from './RoomDetail.jsx'
import {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'


const RoomCart = ()=>{

    const { id } = useParams()
    const [room, setRoom] = useState({})

    useEffect(()=>{
        const fetchData = async ()=>{
            const {data} = await  axios.get(`http://127.0.0.1:8000/room/${id}/`)
            setRoom(data);
        }
        fetchData()
    }, {})
    
    return(
    <div className="main-block">    
        <WindowPopup />
        <div className="block-back-up">    
            <Link className='Link' to='/home/'><ion-icon className="arrow" name="arrow-back-outline"></ion-icon> MosBuy</Link>  
            {/* <a className href="#"> <ion-icon className="arrow" name="arrow-back-outline"></ion-icon> MosBuy</a> */}
        </div>
        <DetailRoom key={room.id} room = {room}/>
        <div className="footer">
            <h1 className="site-name ">Space</h1> 
            <h1 className="site-name">Space</h1>
        </div>
    </div>
    )
}

export default RoomCart