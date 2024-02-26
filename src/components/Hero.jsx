import React from 'react'
import './Hero.css'
import Crypto from '../assets/left.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='container'  id='hero'>

                {/* Left Side */}
                <div className='left'>
                    <p>Buy & Sell Crypto 24/7</p>
                    <h1>Invest in Cryptocurreny and Become a Millionaire</h1>
                    <p>Buy, Sell cryptocurrencies</p>
                    <div className='input-container'>
                        <input type='email' placeholder='Enter your email' />
                        <button className='btn'>Learn More About Us</button>
                    </div>
                </div>


                {/* Right Side */}
                <div className='right'>
                    <div className='img-container'>
                        <img src={Crypto} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero