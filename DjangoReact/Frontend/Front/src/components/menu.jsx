import './style/App.css'


const Menu = ()=>{
    return(
    <div className="block-popup-menu">
        <div className="popup-header">
            <div className="block-pop">
                <ion-icon className="man men" name="menu-outline"></ion-icon>
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
            <a className="a" href="#">Finn</a> <img src="./public/PeopleSpace.png" alt=""/>
        </div>
    </div>
    )
}

export default Menu