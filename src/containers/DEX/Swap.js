import React from 'react'

const Swap = () =>  {
    return (
        <div className="row">
                <div className="col-md-12">
                    <div className="rect1 d-flex justify-content-center align-items-center py-4">
                        <div>
                            <img src={rocket} width={240} style={{ position: 'relative', top: "1.5rem" }} alt="rocket" />
                        </div>
                        <div>
                            <h2 className="color2 bolder">OMNIDEX</h2>
                            <h2 className="text-uppercase bolder">Lending Service</h2>
                            <button className="btn launchBtn">Beta Mode Launching Soon</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 mt-5">
                    <div className="d-flex align-items-center">
                        <div className="mr-3 my-auto">
                            <img src={dotLogo} width={120} alt="dotlogo" />
                        </div>
                        <div className="my-auto">
                            <h1 className="text-uppercase bolder">Welcome all</h1>
                            <h1 className="text-uppercase bolder"><span className="color2">Ominidex</span> Users</h1>
                        </div>
                    </div>
                </div></div>
    )
}

export default Swap
