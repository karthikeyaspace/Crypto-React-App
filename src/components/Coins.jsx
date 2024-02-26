import React from "react";
import Bitcoin from "../assets/bitcoin.svg";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx"

export default function Coins() {
    return (
        <>
            <Navbar />
            <div className="coins">
                <div className="container">
                    <span><img src={Bitcoin} alt="" /></span>
                    <h1>COINS</h1>
                </div>
            </div>
            <Footer />
        </>
    )
}