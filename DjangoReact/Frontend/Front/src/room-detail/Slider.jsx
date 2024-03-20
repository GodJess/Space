import './RoomCart.css'
import './App.css'

// eslint-disable-next-line react/prop-types
const Slider = ({room})=>{
    return(
        <div className="slid-block-img">
        <div className="all">
            <input checked type="radio" name="respond" id="desktop"/>
            <article id="slider">
                    <input checked type="radio" name="slider" id="switch1"/>
                    <input type="radio" name="slider" id="switch2"/>
                    <input type="radio" name="slider" id="switch3"/>
                <div id="slides">
                    <div id="overflow">					
                        <div className="image">
                            <article><img src={room.img1}/></article>
                            <article><img src={room.img2}/></article>
                            <article><img src={room.img3}/></article>
                            <div className="block-btn-right"></div>
                            <div className="block-btn-left"></div>
                        </div>
                    </div>
                </div>
                <div id="controls">
                    <label htmlFor="switch1"></label>
                    <label htmlFor="switch2"></label>
                    <label htmlFor="switch3"></label>
                </div>
                <div id="active">
                    <label htmlFor="switch1"></label>
                    <label htmlFor="switch2"></label>
                    <label htmlFor="switch3"></label>
                </div>
            </article>
        </div>
    </div>
    )
}
export default Slider