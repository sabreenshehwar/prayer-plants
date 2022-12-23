import React from 'react'
import '../About/About.css';
import { motion } from 'framer-motion'

const containerVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { delay: 1, duration: 1 }
    },
    exit: {
        x: '-100vw',
        transition: { ease: 'easeInOut' }
    }
}

const About = () => {
    return (
        <motion.div id="about" className="about__container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="about__wrapper">
                <div className="textwrapper">
                    <h1 className="about__h1">
                        'Thoughts and prayers' an expression of condolences often used by officials as a substitute for action.
                    </h1>
                    <hr />
                    <p className="pp__info">
                        With the rising cost of living, it has become increasingly difficult for Canadians to get by – especially those who are already precariously housed. In 2021, there were more than 235,000 homeless people in Canada, with approx. 1.3 Canadians experiencing homelessness or insecure housing situations at some point over the past 5 years.
                        We need to provide support to precariously housed and homeless populations. Prayer Plants goes further than simply offering thoughts and prayers - it supports local charities and non-profits by exchanging plants for donations.                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export default About;