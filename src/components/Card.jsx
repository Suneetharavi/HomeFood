import React from 'react'


function Card() {
    return (
        <>
            <div className='biryaniClass'>
                <h3>Biryani Specials</h3>
                <hr />
                <div class="card mt-3" style={{ width: "18rem", maxHeight: '360px' }}>
                    <img src="/chickenBimg.webp" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Chicken Biryani</h5>
                        <p class="card-text">Chicken Biryani is a delicious Non-Vegeterian food with layered dish of Chicken, dum cooked with spices, herbs and basmati rice.</p>
                    </div>
                </div>

                <div class="card mt-3" style={{ width: "18rem", maxHeight: '360px' }}>
                    <img src="/paneer-Bimg.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Paneer Biryani</h5>
                        <p class="card-text">Paneer Biryani is a delicious vegetarian layered dish of paneer, dum cooked with spices, herbs and basmati rice.</p>
                    </div>
                </div>

                <div class="card mt-3" style={{ width: "18rem", maxHeight: '360px' }}>
                    <img src="/MuttonBimg.jpg" class="card-img-top" alt="..." height='200px' />
                    <div class="card-body">
                        <h5 class="card-title">Mutton Biryani</h5>
                        <p class="card-text">Mutton Biryani is a delicious Non-vegetarian layered dish of mutton, dum cooked with spices, herbs and basmati rice.</p>
                    </div>
                </div>

                <div class="card mt-3" style={{ width: "18rem", maxHeight: '360px' }}>
                    <img src="/paneer-Bimg.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Paneer Biryani</h5>
                        <p class="card-text">Paneer Biryani is a delicious vegetarian layered dish of paneer, dum cooked with spices, herbs and basmati rice.</p>
                    </div>
                </div>

                <div class="card mt-3" style={{ width: "18rem", maxHeight: '360px' }}>
                    <img src="/paneer-Bimg.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Paneer Biryani</h5>
                        <p class="card-text">Paneer Biryani is a delicious vegetarian layered dish of paneer, dum cooked with spices, herbs and basmati rice.</p>
                    </div>
                </div>

                <div class="card mt-3" style={{ width: "18rem", maxHeight: '360px' }}>
                    <img src="/paneer-Bimg.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Paneer Biryani</h5>
                        <p class="card-text">Paneer Biryani is a delicious vegetarian layered dish of paneer, dum cooked with spices, herbs and basmati rice.</p>
                    </div>
                </div>
            </div>

            <div className='breakFast'>
            <h3>BreakFast</h3>
                <div class="card mt-3" style={{ width: "18rem", maxHeight: '360px' }}>
                    <img src="/Dosa.webp" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Dosa</h5>
                        <p class="card-text">Paneer Biryani is a delicious vegetarian layered dish of paneer, dum cooked with spices, herbs and basmati rice.</p>
                    </div>
                </div>

                <div class="card mt-3" style={{ width: "18rem", maxHeight: '360px' }}>
                    <img src="/paneer-Bimg.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Paneer Biryani</h5>
                        <p class="card-text">Paneer Biryani is a delicious vegetarian layered dish of paneer, dum cooked with spices, herbs and basmati rice.</p>
                    </div>
                </div>
            </div>               
            
            
            
             {/* <div className='container w-100'> */}
            {/* <select className='m-2 h-100 bg-success rounded'> 
                                { Array.from(Array(6), (e,i) => {
                                    return(
                                        <option key={i+1} value={i+1}> {i+1} </option>
                                    )
                                })}
                            </select> */}

            {/* <select className='m-2 h-100 bg-success rounded'> 
                                <option value='half'>Half Tray</option>
                                <option value='full'>Full Tray</option>
                            </select>

                            <div className='d-inline h-100 fs-5'>
                                Total Price
                            </div> */}
            {/* </div> */}

    </>
    )
}

export default Card