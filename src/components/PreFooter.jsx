import React from 'react'
import jointpics from '../assets/pngs/jointpics.png'

export default function PreFooter() {
    return (
        <section className='prefooter-container'>
            <div className="left-prefooter">
                <h1>Metabnb NFTs</h1>
                <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                <button>
                    <a href='/'>Learn more</a>
                </button>
            </div>
            <div className="right-prefooter">
                <img src={jointpics} alt="" />
            </div>
        </section>
    )
}
