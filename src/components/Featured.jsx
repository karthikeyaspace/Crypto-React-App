import React, {useState, useEffect} from "react";
import './Featured.css'
import Up from '../assets/up.svg'
import Down from '../assets/down.svg'
// import axios from 'axios'
import jsondata from '../data/data.json';
import { Link } from "react-router-dom";

function Featured(){


    const [data, setData] = useState(null)

    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=6&page=1&sparkline=false&locale=en"

    // useEffect(()=>{
    //     fetch(url)
    //     .then((res)=>res.json())
    //     .then((data)=>{setData(data)})
    //     .catch((err)=>console.log(err))
    // },[])

    // using sample crypto json data as of 

    useEffect(()=>{
        setData(jsondata);
    },[])



    console.log(data)

    if(!data) return null; 

    return(
        <div className="featured"  id="featured">
            <div className="container">
                <div className="left">
                    <h2>Explore top Crypto Currencies like Bitcoin, Etherium, and Dogecoin</h2>
                    <p>See all avaliable cryptocurrencies</p>
                    <Link to="/coins"><button className="btn btn-fea">See more</button></Link>
                </div>

                <div className="right">

                    <div className="card">
                        <div className="top">
                            <img src={data[0].image} alt="" />
                        </div>
                        <div>
                            <h5>{data[0].name}</h5>
                            <p>{data[0].current_price.toLocaleString()}₹</p>
                        </div>
                        {data[0].price_change_percentage_24h > 0 ? (
                            <span className="green"><img className="updownimg" src={Up} alt="" /> {data[0].price_change_percentage_24h.toFixed(2)}%</span>
                        ) : (
                            <span className="red"><img className="updownimg" src={Down} alt="" />{data[0].price_change_percentage_24h.toFixed(2)}%</span>
                        )}

                    </div>
                    <div className="card">
                        <div className="top">
                            <img src={data[1].image} alt="" />
                        </div>
                        <div>
                            <h5>{data[1].name}</h5>
                            <p>{data[1].current_price.toLocaleString()}₹</p>
                        </div>
                        {data[1].price_change_percentage_24h > 0 ? (
                            <span className="green"><img className="updownimg" src={Up} alt="" /> {data[1].price_change_percentage_24h.toFixed(2)}%</span>
                        ) : (
                            <span className="red"><img className="updownimg" src={Down} alt="" />{data[1].price_change_percentage_24h.toFixed(2)}%</span>
                        )}

                    </div>
                    <div className="card">
                        <div className="top">
                            <img src={data[2].image} alt="" />
                        </div>
                        <div>
                            <h5>{data[2].name}</h5>
                            <p>{data[2].current_price.toLocaleString()}₹</p>
                        </div>
                        {data[2].price_change_percentage_24h > 0 ? (
                            <span className="green"><img className="updownimg" src={Up} alt="" /> {data[2].price_change_percentage_24h.toFixed(2)}%</span>
                        ) : (
                            <span className="red"><img className="updownimg" src={Down} alt="" />{data[2].price_change_percentage_24h.toFixed(2)}%</span>
                        )}

                    </div>
                    <div className="card">
                        <div className="top">
                            <img src={data[3].image} alt="" />
                        </div>
                        <div>
                            <h5>{data[3].name}</h5>
                            <p>{data[3].current_price.toLocaleString()}₹</p>
                        </div>
                        {data[3].price_change_percentage_24h > 0 ? (
                            <span className="green"><img className="updownimg" src={Up} alt="" /> {data[3].price_change_percentage_24h.toFixed(2)}%</span>
                        ) : (
                            <span className="red"><img className="updownimg" src={Down} alt="" />{data[3].price_change_percentage_24h.toFixed(2)}%</span>
                        )}

                    </div>
                    <div className="card">
                        <div className="top">
                            <img src={data[4].image} alt="" />
                        </div>
                        <div>
                            <h5>{data[4].name}</h5>
                            <p>{data[4].current_price.toLocaleString()}₹</p>
                        </div>
                        {data[4].price_change_percentage_24h > 0 ? (
                            <span className="green"><img className="updownimg" src={Up} alt="" /> {data[4].price_change_percentage_24h.toFixed(2)}%</span>
                        ) : (
                            <span className="red"><img className="updownimg" src={Down} alt="" />{data[4].price_change_percentage_24h.toFixed(2)}%</span>
                        )}

                    </div>
                    <div className="card">
                        <div className="top">
                            <img src={data[5].image} alt="" />
                        </div>
                        <div>
                            <h5>{data[5].name}</h5>
                            <p>{data[5].current_price.toLocaleString()}₹</p>
                        </div>
                        {data[5].price_change_percentage_24h > 0 ? (
                            <span className="green"><img className="updownimg" src={Up} alt="" /> {data[5].price_change_percentage_24h.toFixed(2)}%</span>
                        ) : (
                            <span className="red"><img className="updownimg" src={Down} alt="" />{data[5].price_change_percentage_24h.toFixed(2)}%</span>
                        )}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured