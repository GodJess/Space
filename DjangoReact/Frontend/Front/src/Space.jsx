import './Shop.css'

const Space = ()=>{
    return(
        <div className="header">
            <div className="headerFixed">
                <div className="logo">
                    <div className="header-logo">
                        <img src="./public/Logo.jpg" alt="" />
                        <h1>ShoppingRoom</h1>
                    </div>
                </div>
                
                <div className="block-search">
                    <div className="search-block">
                        <form action="">
                            <input type="text" placeholder='Input product'/>
                            <button></button>
                        </form>
                    </div>
                </div>
               
                <div className="burgerMenu">
                    <img src="https://cdn.icon-icons.com/icons2/1154/PNG/512/1486564397-menu-green_81507.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Space