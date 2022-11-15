import React from 'react'
import CloseIcon from '../assets/svgs/x.svg'
import metaM from '../assets/svgs/metaM.svg'  
import WalletConnect from '../assets/pngs/wallet.png' 


export default function PopupModal({ setShowModal }) {
    return (
        <div className='pop-up-container'>
            <div className="modal-content">
                <div className="popup-header">
                    <h3>Connect Wallet</h3>
                    <img src={CloseIcon} alt="" onClick={() => setShowModal(false)}/>
                </div>  
                <hr />
                <div className="popup-body">
                    <span>Choose your preferred wallet:</span>
                    <div className="wallet-links">
                        <a href="/#">
                            <div className="left-wallet">
                                <img src={metaM} alt="" />
                                <span>Metamask</span>
                            </div>
                            <i class="fa fa-chevron-right" aria-hidden="true"></i>
                        </a>
                        <a href="/#">
                            <div className="right-wallet">
                                <img src={WalletConnect} alt="" />
                                <span>WalletConnect</span>
                            </div>
                            <i class="fa fa-chevron-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

