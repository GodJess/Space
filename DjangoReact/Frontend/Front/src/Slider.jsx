import './RoomCart.css'
import './style/App.css'

// eslint-disable-next-line react/prop-types
const Slider = ({room})=>{
    return(
        <div className="slid-block-img">
        {/* <div className="all">
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
        </div> */}
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={room.img1} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={room.img2} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={room.img3} className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    )
}
export default Slider