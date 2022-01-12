import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Swap from "../containers/DEX/Swap1";
import Home from "../containers/Home";
import DexHome from "../containers/DexHome";
import PreSale from '../containers/PreSale'

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/presale" element={<PreSale />} />
      <Route path="/dex/*" element={<DexHome />} />
    </Routes>
  );
};

export default Navigation;