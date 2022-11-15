import React from 'react'
import FooterLogo from '../assets/pngs/logo.png'
import FooterLogoText from '../assets/pngs/logotext.png'
import facebook from '../assets/svgs/fb.svg'
import twitter from '../assets/svgs/twitter.svg'
import insta from '../assets/svgs/insta.svg'

export default function Footer() {
    return (
        <footer>
            <div className="left-footer">
                <div className="footer-img">
                    <img src={FooterLogo} alt="" />
                    <img src={FooterLogoText} alt="" />
                </div>
                <div className="footer-socials">
                    <img src={facebook} alt='' />
                    <img src={insta} alt='' />
                    <img src={twitter} alt='' />
                </div>
                <p>&copy; 2022 Metabnb</p>
            </div>
            <div className="footer-links">
                <div className="left-footer-link">
                    <span>Community</span>
                    <ul>
                        <li>NFT</li>
                        <li>Tokens</li>
                        <li>Landlords</li>
                        <li>Discord</li>
                    </ul>
                </div>
                <div className="mid-footer-link">
                    <span>Places</span>
                    <ul>
                        <li>Castle</li>
                        <li>Farms</li>
                        <li>Beach</li>
                        <li>Learn more</li>
                    </ul>
                </div>
                <div className="right-footer-link">
                    <span>About us</span>
                    <ul>
                        <li>Road map</li>
                        <li>Creators</li>
                        <li>Career</li>
                        <li>Contact us</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
