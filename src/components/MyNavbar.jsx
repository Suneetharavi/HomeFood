import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({ user, setUser }) {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success possition-stickyr">
                <div className="container-fluid">
                    <div ><img className='AlluduLogo' src='/LogoAlluduKitchen.png' alt='NoLogo'/></div>

                    <div style={{marginLeft:'30%'}}><Link className="navbar-brand fs-1 " to="/"> Alludu's Kitchen 
                    <h5 style={{marginLeft:'13%'}}>Home Food Catering</h5></Link></div>

                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item">
                                <Link className="nav-link active fs-5 mx-3 active" aria-current="page" to="/">Home</Link>
                            </li> */}
                            
                        </ul> 
                        
                        <div className="d-flex">
                            <a href='https://www.instagram.com/alludus_kitchen?igsh=MTVsOXg0azIzMjV1dA=='><button id='exitbutton' className="btn bg-white text-success mx-1">FollowUs</button></a>
                            {/* <img src=''/><button id='exitbutton' className="btn bg-white text-success mx-1">ContactUs</button> */}
                            <Link  to="/contactUs" id='exitbutton' className="btn bg-white text-success mx-1" >MenuCard</Link>
                            <Link  to="/AboutUs" id='exitbutton' className="btn bg-white text-success mx-1" >AboutUs</Link>
                            
                            
                            
                        </div>  
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Navbar