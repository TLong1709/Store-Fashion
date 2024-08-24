import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'



const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>Henry Fashion</h2>
                <div> 
                    <p>Bộ Sưu Tập</p>
                    <div className="hand-hand-icon">
                        <p>Mới</p>
                        <img src={hand_icon} alt=""/>
                    </div>
                    <p>Cho Mọi Người</p>        
                </div> 
                <div className="hero-latest-btn">
                    <div>Thông Tin Chi Tiết</div>
                    <img src={arrow_icon} alt=""/>
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt="" />
            </div>     
        </div>
    )  
}

export default Hero
