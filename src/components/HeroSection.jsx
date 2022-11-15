import React from 'react'
import leftTop from '../assets/pngs/lefttophero.png'
import leftBottom from '../assets/pngs/leftbottomhero.png'
import rightTop from '../assets/pngs/righttophero.png'
import rightBottom  from '../assets/pngs/rightbottom.png'

export default function HeroSection() {
    return (
        <section className='hero-container'>
            <div className="left-hero">
                <h1>Rent a 
                    <span> Place </span> 
                    away from 
                    <span> Home </span> 
                    in the <span>Metaverse</span>
                </h1>
                <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                <div className="hero-input">
                    <input type="search"  placeholder='Search for location'/>
                    <button>Search</button>
                </div>
            </div>
            <div className="right-hero">
                <div className="left-box">
                    <img src={leftTop} alt="" />
                    <img src={leftBottom} alt="" />
                </div>
                <div className="right-box">
                    <img src={rightTop} alt="" />
                    <img src={rightBottom} alt="" />
                </div>
            </div>
        </section>
    )
}
