import React from 'react'
import '../assets/styles/page1.css'
import rocket from '../assets/images/page1/rocket.png'
import dotLogo from '../assets/images/page1/dot-logo.png'
import LockIcon from '@mui/icons-material/Lock';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import farmingBg from '../assets/images/page1/farming-bg.png'
const Page1Body = () => {
    return (
        <div className='page1BodyContainer'>
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
                </div>
                <div className="col-md-12">
                    <div className="d-flex align-items-center mt-2">
                        <div className="mr-5 my-auto">
                            <h3>Complete multi chain <br /> swaps in 1 click!</h3>
                        </div>
                        <div className="my-auto">
                            <button className="btn btn-primary btn-lg btn-gradient px-5">Beginner? Start Here</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 mt-4">
                    <div className="rect2 d-flex justify-content-center align-items-center py-5">
                        <div>
                            <h2 className="text-uppercase bolder"> <span className="color2">OMNI </span> Farmings</h2>
                            <p className="">Omni is the ultimate exchange protocol</p>
                            <div className="d-flex">
                                <div>
                                    <button className="btn launchBtn d-flex mr-3">
                                        Locked
                                        <LockIcon fontSize="small" />
                                    </button>
                                </div>
                                <div>
                                    <button className="btn btn-gradient d-flex">
                                        Unlock Wallet
                                        <ArrowRightAltIcon fontSize="small" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Page1Body