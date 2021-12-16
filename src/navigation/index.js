import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Swap from '../containers/DEX/Swap'
import Swap1 from '../containers/DEX/Swap1'
import Home from '../containers/Home'
import Page1 from '../containers/Page1'

const Navigation = () => {
    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dex" element={<Page1 />} />
        <Route path="/dex/swap" element={<Swap1 />} />
      </Routes>
    )
}

export default  Navigation