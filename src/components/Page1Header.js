import React from 'react';
import "../assets/styles/sidebar.css";
import bsc from  '../assets/images/bsc.png'
const Page1Header = () => {
    return (
        <div className="header-wrapper">
            <button className="btn btn-trans mr-3">
                <img src={bsc} width={30} alt="bsc" className="mr-2"/>
                BSC
            </button>
            <button className="btn btn-primary px-5">Action Button</button>
        </div>
    );
};

export default Page1Header;