import React from 'react'

function Carousel() {
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item ">
                        <img src="../BreakFastThali.jpg" className="d-block w-100" alt="..." width='500px' />
                    </div>
                    <div className="carousel-item active">
                        <img src="../thali3.jpg" className="d-block w-100" alt="..." width='500px' />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/300×300/?food" className="d-block w-100" alt="..." width='50px' />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
    </>
    )
}

export default Carousel