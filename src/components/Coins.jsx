import React from "react";
import './Coins.css'
import jsondata from '../data/data.json'
import Up from '../assets/up.svg'
import Down from '../assets/down.svg'
import ScroolToTop from "./ScroolToTop";

//useContext 

export default function Coins() {

    return (
        <div className="coins">
            <ScroolToTop/>
            <div className="container">
                <div className="coins_header">
                    <h3>Cryptocurrency Prices by Market Cap</h3>
                </div>
                <div className="currencies">
                    <div className="table">
                        <table>
                            <thead>
                                <tr>
                                    <th className="child-1">#</th>
                                    <th className="child-2">Coin</th>
                                    <th className="child-3">Price</th>
                                    <th className="child-4">24h</th>
                                    <th className="child-5">Market Cap</th>
                                </tr>
                            </thead>
                            <tbody>
                                {

                                    jsondata.map((coin, index) => (
                                        <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "lightgray" : "whitesmoke" }}>
                                            <td className="child-1"><p>{index + 1}</p></td>
                                            <td className="child-2" >
                                                <div className="coin">
                                                    <img src={coin.image} style={{ maxWidth: "20px" }} alt={coin.name} />
                                                    <h4>{coin.name}</h4>
                                                </div>
                                            </td>
                                            <td className="child-3"><p>{coin.current_price.toLocaleString()} Rs</p></td>
                                            <td className="child-4"><p>{coin.price_change_24h.toLocaleString()}
                                             Rs <br className="br" /><span>{coin.price_change_percentage_24h >= 0
                                              ? (<img style={{ maxWidth: "20px", marginLeft:
                                               "10px" }} src={Up} alt="" />) : (<img src={Down}
                                                style={{ maxWidth: "20px" }} />)}</span>  <span
                                                 style={{ fontSize: "80%" }} className={coin.price_change_percentage_24h
                                                  >= 0 ? "green" : "red"}> {coin.price_change_percentage_24h}</span></p></td>
                                            <td className="child-5">{coin.market_cap.toLocaleString()} Rs</td>
                                        </tr>

                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}