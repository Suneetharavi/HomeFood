import React from 'react'

function Body() {
    return (
        <div>
            <div class="card mt-3" style={{width: "18rem", maxHeight:'360px'}}>
                <img src="..." class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is some Text</p>

                        <div className='container w-100'>
                            <select className='m-2 h-100 w-100 bg-success'> 
                                
                            </select>

                        </div>
                        
                    </div>
            </div>
        </div>
    )
}

export default Body