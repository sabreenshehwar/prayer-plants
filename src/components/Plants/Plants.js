import React, { useState } from 'react'
import { motion } from 'framer-motion';
import '../Plants/Plants.css';
import { AiOutlineArrowRight } from 'react-icons/ai';
import monstera from '../../images/monstera1.jpg';
import peperomia from '../../images/peperomia.jpg';

const Plants = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div id="plants" className="plants__container">
            <div className="plant__wrapper">
                <motion.div className="plant__card"
                    layout
                    onClick={() => setIsOpen(!isOpen)}
                    transition={{ layout: { duration: 1, type: "spring" } }}>
                    <motion.h3 className="plant__name"
                        layout="position">
                        monstera deliciosa
                    </motion.h3>
                    <img src={monstera} />
                    <details>
                        <motion.summary layout
                            className="plant__info">
                            click here for plant care details
                        </motion.summary>
                        <h5 className="plant__care">
                            Native to Central America, the Monstera Deliciosa thrives in warm, humid weather.This beautiful evergreen needs well drained, moderately moist soil and should be fertilized during growing months. Allow for your plant to slightly dry out inbetween waterings.
                        </h5>
                    </details>
                    {isOpen && (
                        <motion.div className="text__wrapper"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <p className="plant__details">
                                one gallon pot
                            </p>
                            <p className="plant__details">
                                $25.00 CAD donation
                                <br /> <br />
                                <a href="https://www.ottawafoodbank.ca/" className='donate__link'>
                                    The Ottawa Food Bank
                                    <AiOutlineArrowRight />
                                </a>
                            </p>
                            <p className="plant__details">
                                quantity: one left
                            </p>
                        </motion.div>
                    )}
                </motion.div>
                <motion.div className="plant__card"
                    layout onClick={() => setIsOpen(!isOpen)}>
                    <motion.h3 className="plant__name"
                        layout="position">
                        peperomia obtusifolia
                    </motion.h3>
                    <img src={peperomia} />
                    <details>
                        <motion.summary
                            layout
                            className="plant__info">
                            click here for plant care details
                        </motion.summary>
                        <h5 className="plant__care">
                            Native to tropical areas like South and Central America, Peperomias are found on the forest floor, making them tolerant to lower light conditions. Peperomia Obtusifolia, a succulent like variety, nicknamed the baby rubber plant, likes a higher humidity and soil to dry out in-between waterings.                        </h5>
                    </details>
                    {isOpen && (
                        <motion.div className="text__wrapper"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <p className="plant__details">
                                plant size
                            </p>
                            <p className="plant__details">
                                $10.00 CAD donation
                                <br /> <br />
                                <a href="https://www.ottawafoodbank.ca/" className='donate__link'>
                                    The Ottawa Food Bank
                                    <AiOutlineArrowRight />
                                </a>
                            </p>
                            <p className="plant__details">
                                quantity: one left
                            </p>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </div>
    )
}

export default Plants