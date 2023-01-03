import React from 'react'
import '../Process/Process.css';
import { Link } from "react-scroll";
import { motion } from 'framer-motion';
import { AiOutlineArrowRight } from 'react-icons/ai';

const containerVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { delay: 1.5, duration: 1.5 }
    },
    exit: {
        x: '-100vw',
        transition: { ease: 'easeInOut' }
    }
}

const Process = () => {
    return (
        <motion.div className="process__container" id="process"
            layout
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <p className="subheading">
                Prayer Plants is not a plant shop. &nbsp; It's run by a local plant enthusiast in the Ottawa area, with a limited supply of each plant. &nbsp;As a result, it operates as first come, first serve. All plant pick-ups will be in the Ottawa/Centretown area. If you'd like a plant shipped to you, you will be responsible for shipping fees.
            </p>
            <header className="process__header">
                <h1 className="process__h1">
                    The process is simple.
                    <br />
                    Just follow along
                </h1>
                <motion.p className="header__p">
                    <Link activeClass="active"
                        duration={500} smooth spy
                        exact='true' to="contact">
                        contact us if you have any questions
                        <AiOutlineArrowRight />
                    </Link>
                </motion.p>
            </header>
            <ul className="process__wrapper">
                <motion.li
                    layout
                    transition={{
                        type: 'spring',
                        delay: 2, duration: 2,
                        damping: 10,
                        mass: 0.75,
                        stiffness: 100,
                    }}
                    className="process">
                    <div className="steps">
                        <h2 className="numbers">
                            01
                        </h2>
                        <p className="info">
                            Find a plant
                        </p>
                    </div>
                </motion.li>
                <motion.li
                    transition={{
                        type: 'spring',
                        delay: 2, duration: 2,
                        damping: 10,
                        mass: 0.75,
                        stiffness: 100,
                    }}
                    className="process">
                    <div className="steps">
                        <h2 className="numbers">
                            02
                        </h2>
                        <p className="info">
                            Fill out the form
                        </p>
                    </div>
                </motion.li>
                <motion.li className="process"
                    transition={{
                        type: 'spring',
                        delay: 2, duration: 2,
                        damping: 10,
                        mass: 0.75,
                        stiffness: 100,
                    }}>
                    <div className='steps'>
                        <h2 className="numbers">
                            03
                        </h2>
                        <p className="info">
                            Wait for order confirmation
                            <br />
                            (2 business days)
                        </p>
                    </div>
                </motion.li>
                <motion.li className="process"
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 2 }}>
                    <div className='steps'>
                        <h2 className="numbers">
                            04
                        </h2>
                        <p className="info">
                            Once confirmed, <br />
                            Go support the Ottawa Food Bank
                        </p>
                    </div>
                </motion.li>
                <motion.li
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 2 }}
                    className="process">
                    <div className="steps">
                        <h2 className="numbers">
                            05
                        </h2>
                        <p className="info">
                            Send over a screenshot so we can confirm your donation
                        </p>
                    </div>
                </motion.li>
                <motion.li
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 2 }}
                    className="process">
                    <div className="steps">
                        <h2 className="numbers">
                            06
                        </h2>
                        <p className="info">
                            We will confirm your donation and have it ready for pick up
                            <br /> <br />
                        </p>
                    </div>
                </motion.li>
            </ul>
        </motion.div >
    )
}

export default Process