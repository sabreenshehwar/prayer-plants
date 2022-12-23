import React from 'react'
import '../Footer/Footer.css';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';


const Footer = () => {
    return (
        <div className="footer__container">
            <div className="footer__wrapper">
                <a href="mailto:thoughtsnprayerplants@gmail.com" className="footer__link">
                    <AiOutlineArrowLeft />

                    Reach out via email
                </a>
                <a href="https://www.instagram.com/prayer.plants/" className="footer__link">
                    Follow us on instagram
                    <AiOutlineArrowRight />

                </a>
            </div>
            <p className="footnote">
                © 2022 Prayer Plants.All rights reserved.
                Coded and Designed by Sabreen Shehwar</p>
        </div>
    )
}

export default Footer