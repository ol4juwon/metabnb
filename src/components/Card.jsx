import React from 'react'
import topCard1 from '../assets/pngs/topc.png'
import topCard2 from '../assets/pngs/topcard2.png'
import topCard3 from '../assets/pngs/topcard3.png'
import topCard4 from '../assets/pngs/topcard4.png'
import star from '../assets/svgs/star.svg'

export default function Adventure() {
    return (
        <div className='adventure-container'>
            <h1>Inspiration for your next adventure</h1>
            <div className="card-container">
                <div className="top-card-container">
                    <div className="card">
                        <img className='first-img' src={topCard1} alt='' />
                        <div className="name-div">
                            <p>Desert King</p>
                            <span>1MBT per night</span>
                        </div>
                        <div className="description-div">
                            <p>2345km away</p>
                            <p>available for 2weeks stay</p>
                        </div>
                        <img className="star" src={star} alt="" />
                    </div>
                    <div className="card">
                        <img src={topCard2} alt='' />
                        <div className="name-div">
                            <p>Desert King</p>
                            <span>1MBT per night</span>
                        </div>
                        <div className="description-div">
                            <p>2345km away</p>
                            <p>available for 2weeks stay</p>
                        </div>
                        <img className="star" src={star} alt="" />
                    </div>
                    <div className="card">
                        <img src={topCard3} alt='' />
                        <div className="name-div">
                            <p>Desert King</p>
                            <span>1MBT per night</span>
                        </div>
                        <div className="description-div">
                            <p>2345km away</p>
                            <p>available for 2weeks stay</p>
                        </div>
                        <img className="star" src={star} alt="" />
                    </div>
                    <div className="card">
                        <img src={topCard4} alt='' />
                        <div className="name-div">
                            <p>Desert King</p>
                            <span>1MBT per night</span>
                        </div>
                        <div className="description-div">
                            <p>2345km away</p>
                            <p>available for 2weeks stay</p>
                        </div>
                        <img className="star" src={star} alt="" />
                    </div>
                </div>

                {/* Bottom */}
                <div className="bottom-card-container">
                    <div className="card">
                        <img className='first-img' src={topCard1} alt='' />
                        <div className="name-div">
                            <p>Desert King</p>
                            <span>1MBT per night</span>
                        </div>
                        <div className="description-div">
                            <p>2345km away</p>
                            <p>available for 2weeks stay</p>
                        </div>
                        <img className="star" src={star} alt="" />
                    </div>
                    <div className="card">
                        <img src={topCard2} alt='' />
                        <div className="name-div">
                            <p>Desert King</p>
                            <span>1MBT per night</span>
                        </div>
                        <div className="description-div">
                            <p>2345km away</p>
                            <p>available for 2weeks stay</p>
                        </div>
                        <img className="star" src={star} alt="" />
                    </div>
                    <div className="card">
                        <img src={topCard3} alt='' />
                        <div className="name-div">
                            <p>Desert King</p>
                            <span>1MBT per night</span>
                        </div>
                        <div className="description-div">
                            <p>2345km away</p>
                            <p>available for 2weeks stay</p>
                        </div>
                        <img className="star" src={star} alt="" />
                    </div>
                    <div className="card">
                        <img src={topCard4} alt='' />
                        <div className="name-div">
                            <p>Desert King</p>
                            <span>1MBT per night</span>
                        </div>
                        <div className="description-div">
                            <p>2345km away</p>
                            <p>available for 2weeks stay</p>
                        </div>
                        <img className="star" src={star} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
