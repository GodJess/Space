import './Titul.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Menu from './menu.jsx';
import axios from 'axios';



const Titul = ()=>{

    const [open, setOpen] = useState(false);
    const [activeUser, setActiveUser] = useState({});

    useEffect(()=>{
        const fetchUser = async ()=>{
            const {data} = await axios.get('http://127.0.0.1:8000/avtorizations/');
            setActiveUser(data);
        }
        fetchUser();
    }, {})

    const delOpen = ()=>{
        setOpen(false);
    }
    return(
    <div className="main-block">
            {open ? 
                <div className = "popup open"> <Menu delOpen={delOpen}/></div> 
                :
                 <div  className="popup"><Menu delOpen={delOpen}/></div>
            }
        
        <div className="headers">
            <div className="header-blocks">
                <div className="header-block-container">
                    <div className="header-block-main">
                        <div className="block-menu">
                            <ion-icon onClick={()=> setOpen(true)} className="men" name="menu-outline"></ion-icon>
                        </div>
                        <h1 className="site-name start">Space</h1>
                        <div className="block-widgets">
                            <ul>
                                <li className="links"><a href="#">Rent</a></li>
                                <li className="links"><a href="#">Buy</a></li>
                                <li className="links"><a href="#">Put up</a></li>
                                <li className="links"><a href="#">Mortgage</a></li>
                                <li className="links"><a href="#">Favorites</a></li>
                                <li className="links">
                                    <Link className='linkk' to='/auth/'>{activeUser.name}</Link> 
                                    <img src={activeUser.image} alt=""/>
                                </li>
                            </ul>
                        </div>
                        <h1 className="site-name end">Space</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="block-promo">
            <div className="block-line"></div>
            <div className="block-line"></div>
            <div className="block-line"></div>
            <div className="block-line"></div>
            <div className="block-line"></div>
            <div className="block-line"></div>
            <div className="block-line f "></div>
            <div className="block-line f "></div>
            <div className="block-line f d"></div>
            <div className="block-line f d"></div>
            <div className="block-line f d"></div>
            <div className="block-line f d"></div>

            <div className="block-promo-info">
                <div className="promo-main">
                    <div className="promo-name"><h1>Space Mortgage</h1></div>
                    <div className="block-discount">
                        <div className="promo-discount-name"><h1>Space Mortgage-</h1></div>
                        <div className="discount">
                            <div className="block-pr-main">
                                <div className="block-procent"><h1>%</h1></div>
                            </div>
                            <div className="link-main">
                                <div className="link-start"><Link className='Link-start' to='/home/'>Get Started</Link></div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="promo-last-name"><h1>Affordable mortgage</h1></div>
                </div>
            </div>
        </div>
        
        <div className="footer">
            <h1 className="site-name ">Space</h1> 
            <h1 className="site-name">Space</h1>
        </div>
    </div>
    )
}
export default Titul