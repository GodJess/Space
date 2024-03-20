
import './Shop.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './style/App.css'
import RoomList from './RoomList.jsx'
import WindowPopup from './WindowPopup.jsx'

function App() {

  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const FetchData = async() =>{
      const {data}  = await axios.get('http://127.0.0.1:8000/product/');
      setRooms(data);
    }
    FetchData();
  }, [])


  return (
    <div className="main-block">
        <WindowPopup />
        <div className="name-partpage"><h1 className="site-name">Rent</h1></div>
        <RoomList rooms={rooms} />
        
        <div className="footer">
            <h1 className="site-name ">Space</h1> 
            <h1 className="site-name">Space</h1>
        </div>
    </div>
  )
}

export default App
