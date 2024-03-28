import './style/App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
// eslint-disable-next-line react/prop-types
const Menu = ({delOpen})=>{
    const [activeUser, setActiveUser] = useState({});

    useEffect(()=>{
        const fetchUser = async ()=>{
            const {data} = await axios.get('http://127.0.0.1:8000/auth/');
            setActiveUser(data);
        }
        fetchUser();
    }, [])
    
    return(
    <div className="block-popup-menu">
        <div className="popup-header">
            <div className="block-pop">
                <ion-icon className="man men" onClick={delOpen} name="menu-outline"></ion-icon>
            </div>
        </div>
        <div className="options">
            <a className="a" href="#">Rent</a>
        </div>
        <div className="options">
            <a className="a" href="#">Buy</a>
        </div>
        <div className="options">
            <a className="a" href="#">Put up</a>
        </div>
        <div className="options">
            <a className="a" href="#">Mortgage</a>
        </div>
        <div className="options">
            <a className="a" href="#">Favorites</a>
        </div>
        <div className="options">
            <a className='a' href='http://127.0.0.1:8000/#'>{activeUser.name}</a>
            <img  src={activeUser.image} alt=""/>
        </div>
    </div>
    )
}

export default Menu