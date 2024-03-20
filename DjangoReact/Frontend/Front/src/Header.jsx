import './style/App.css'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const Header = ({setOpen})=>{
    const [activeUser, setActiveUser] = useState({});

    useEffect(()=>{
        const fetchUser = async ()=>{
            const {data} = await axios.get('http://127.0.0.1:8000/avtorizations/');
            setActiveUser(data);
        }
        fetchUser();
    }, {})
    return(
        <div className="header">
            <div className="header-block">
                <div className ="header-block-container">
                    <div className="header-block-main">
                        <div className="block-menu">
                            <ion-icon className="men" onClick={()=>{setOpen(true)}} name="menu-outline"></ion-icon>
                        </div>
                        <h1 className="site-name start">Space</h1>
                        <div className="block-widgets">
                            <ul>
                                <li className="links"><a href="#">Rent</a></li>
                                <li className="links"><a href="#">Buy</a></li>
                                <li className="links"><a href="#">Put up</a></li>
                                <li className="links"><a href="#">Mortgage</a></li>
                                <li className="links"><a href="#">Favorites</a></li>
                                <li className="links"><Link className='linkk' to='/auth/'>{activeUser.name}</Link> <img src={activeUser.image} alt=""/></li>
                            </ul>
                        </div>
                        <h1 className="site-name end">Space</h1>
                    </div>
                </div>
                <div className="header-block-search">
                    <div className="search-block-container">
                        <form action="">
                            <div className="block-button">
                                <button type="button"><ion-icon name="search-outline"></ion-icon></button>
                            </div>  
                                <input type="text" placeholder="Search"/>
                            
                        </form>
                    </div>
                    <div className="filter">
                        <ion-icon name="options-outline"></ion-icon>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header