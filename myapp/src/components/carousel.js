import React from 'react'
import a from './images/15.jpg'
import b from './images/4.jpg'
import c from './images/5.jpg'
import d from './images/19.jpg'
import e from './images/16.jpg'





const Slider = (props) => {
    console.log(props)
    return (
        <>
        <div className="  col-xs-12 ">
        <div>
            <div id="carouselExampleCaptions" className="carousel slide"  data-bs-ride="carousel">
                
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={e} className="d-block w-100" alt="..." />
                            
                    </div>
                    <div className="carousel-item">
                        <img src={b} className="d-block w-100" alt="..." />
                        
                    </div>
                    <div className="carousel-item">
                        <img src={c} className="d-block w-100" alt="..." />
                        
                    </div>
                    <div className="carousel-item">
                        <img src={a} className="d-block w-100" alt="..." />
                        
                    </div>
                    <div className="carousel-item">
                        <img src={d} className="d-block w-100" alt="..." />
                        
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        </div>
        </>
    )
}


export default Slider;