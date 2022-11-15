import React from 'react'
import topCard1 from '../assets/pngs/topcard1.png'
import star from '../assets/pngs/star-rating.png'

export default function Adventure({ id, cardImg }) {
    return (
        <div className='adventure-Container'>
            <h1>Inspiration for your next adventure</h1>
            <div className="card-container">
                <div className="card">
                        <img 
                            id={id}
                            className='first-img' 
                            src={cardImg} 
                            alt='' />
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
    )
}
