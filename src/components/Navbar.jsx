import React, { useState }  from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/pngs/logo.png'
import LogoText from '../assets/pngs/logotext.png'
import PopupModal from '../components/PopupModal'

export default function Navbar() {
    const [showModal, setShowModal] = useState(false);
    return (
        <nav className='nav-container' >
            <div className="left-nav">
                <img className='house' src={Logo} alt=''/>
                <img className='logo-name' src={LogoText} alt=''/>
            </div>
            <i class="fa fa-bars" aria-hidden="true"></i>
            <div className="middle-nav">
                <ul>
                    <li>
                        <a href='/#'>Home</a>
                    </li>
                    <Link to="/explore">
                        <a href='/#'>Place to stay</a>
                    </Link>
                    <li>
                        <a href='/#'>NFTs</a>
                    </li>
                    <li>
                        <a href='/#'>Community</a>
                    </li>
                </ul>
            </div>
            <div className="right-nav">
                <button onClick={() => setShowModal(true)}>Connect wallet</button>
            </div>
            {showModal && (
                <PopupModal 
                    setShowModal={setShowModal} />
            )}
        </nav>
    )
}
