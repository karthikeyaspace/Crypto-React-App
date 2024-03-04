import React from "react";
import './Coins.css'
import jsondata from '../data/data.json'
import Up from '../assets/up.svg'
import Down from '../assets/down.svg'

//useContext in future

export default function Coins() {

    return (
        <div className="coins">
            <div className="container">
                <div className="coins_header">
                    <h3>Cryptocurrency Prices by Market Cap</h3>
                </div>
                <div className="currencies">
                    <div className="table">
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Coin</th>
                                    <th>Price</th>
                                    <th>24h</th>
                                    <th>Market Cap</th>
                                </tr>
                            </thead>
                            <tbody>
                                {

                                    jsondata.map((coin, index) => (
                                        <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "lightgray" : "whitesmoke" }}>
                                            <td>{index + 1}</td>
                                            <td >
                                                <div className="coin">
                                                    <img src={coin.image} style={{ maxWidth: "20px" }} alt={coin.name} />
                                                    <h4>{coin.name}</h4>
                                                </div>
                                            </td>
                                            <td>{coin.current_price.toLocaleString()} Rs</td>
                                            <td>{coin.price_change_24h.toLocaleString()}
                                             Rs <span>{coin.price_change_percentage_24h >= 0
                                              ? (<img style={{ maxWidth: "20px", marginLeft:
                                               "10px" }} src={Up} alt="" />) : (<img src={Down}
                                                style={{ maxWidth: "20px" }} />)}</span>  <span
                                                 style={{ fontSize: "80%" }} className={coin.price_change_percentage_24h
                                                  >= 0 ? "green" : "red"}> {coin.price_change_percentage_24h}</span></td>
                                            <td>{coin.market_cap.toLocaleString()} Rs</td>
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