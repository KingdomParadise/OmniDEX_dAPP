import React from 'react'
import '../assets/styles/page1.css'
import rocket from '../assets/images/page1/rocket.png'
import dotLogo from '../assets/images/page1/dot-logo.png'
import LockIcon from '@mui/icons-material/Lock';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import farmingBg from '../assets/images/page1/farming-bg.png'
import dcbBsc from '../assets/images/page1/dcb-bsc.png'
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
                <div className="col-md-12 mt-4">
                    <div className="rect3 d-flex flex-column justify-content-start py-5">
                        <div>
                            <h2 className="bolder"><span className="color2">HOT</span> FARMS</h2>
                            <h6 className="">Omni is the ultimate exchange protocol</h6>
                        </div>
                        <div className="d-flex justify-content-start">
                            <div className="d-flex bgDCB mr-2 pr-5">
                                <div className="mr-3">
                                    <img src={dcbBsc} width={120} alt="dcb-bsc" />
                                </div>
                                <div>
                                    <p className="mb-1 bold">DCB-BSC</p>
                                    <p className="mb-1">Apr: 82.10%</p>
                                </div>
                            </div>
                            <div className="d-flex bgDCB pr-5">
                                <div className="mr-3">
                                    <img src={dcbBsc} width={120} alt="dcb-bsc" />
                                </div>
                                <div>
                                    <p className="mb-1 bold">DCB-BSC</p>
                                    <p className="mb-1">Apr: 82.10%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 mt-4">
                    <div className="rect4 d-flex flex-column justify-content-start py-5">
                        <div>
                            <h2 className="bolder"><span className="color2">COOL</span> POOLS</h2>
                            <h6 className="">Omni is the ultimate exchange protocol</h6>
                        </div>
                        <div className="d-flex justify-content-start">
                            <div className="d-flex bgDCB mr-2 pr-5">
                                <div className="mr-3">
                                    <img src={dcbBsc} width={120} alt="dcb-bsc" />
                                </div>
                                <div>
                                    <p className="mb-1 bold">DCB-BSC</p>
                                    <p className="mb-1">Apr: 82.10%</p>
                                </div>
                            </div>
                            <div className="d-flex bgDCB pr-5">
                                <div className="mr-3">
                                    <img src={dcbBsc} width={120} alt="dcb-bsc" />
                                </div>
                                <div>
                                    <p className="mb-1 bold">DCB-BSC</p>
                                    <p className="mb-1">Apr: 82.10%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="rect5 d-flex flex-column justify-content-center align-items-center mt-4 py-4">
                        <div>
                            <h2 className="bolder mb-3"><span className="color2">OMNIDEX</span> STATS</h2>
                        </div>
                        <div className="d-flex flex-column">
                            <div className="rect5-item1">
                                <span className="text-uppercase">Total Value Locked</span>
                                <span>$ 454,543,34</span>
                            </div>
                            <div className="rect5-item2">
                                <span className="text-uppercase">USD Market Cap</span>
                                <span>$ 454,543,34</span>
                            </div>
                            <div className="rect5-item1">
                                <span className="text-uppercase">Banana in circulation</span>
                                <span>$ 454,543,34</span>
                            </div>
                            <div className="rect5-item2">
                                <span className="text-uppercase">Total Banana Burned</span>
                                <span>$ 454,543,34</span>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Page1Body