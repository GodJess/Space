import './style/App.css'

// eslint-disable-next-line react/prop-types
const Header = ({setOpen})=>{
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
                                <li className="links"><a href="#">Finn</a> <img src="./public/PeopleSpace.png" alt=""/></li>
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
                        <img src="./public/Vector.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header