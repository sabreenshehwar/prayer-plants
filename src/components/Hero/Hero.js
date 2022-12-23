import React from 'react'
import './Hero.css'
import bgvideo from '../../images/bgpp.mp4'
import Navbar from '../Navbar'
import { motion } from 'framer-motion'


const Hero = () => {
    return (
        <div className="home__container">
            <div className="home__bg">
                <video loop autoPlay muted src={bgvideo} type="video/mp4" className='bgvideo' />
            </div>
            <div className="home__content">
                <motion.header
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                    className="hero__header">
                    <a href="https://www.instagram.com/prayer.plants/" className="prayerplants">
                        <motion.h1
                            whileHover={{ scale: 0.8 }}
                            className="hero__h1">
                            Prayer Plants
                        </motion.h1>
                    </a>
                    <p className="hero__p">
                        Because thoughts and prayers don't do shit.
                    </p>
                    <Navbar />
                </motion.header>
            </div>
        </div>
    )
}

export default Hero;