import React, { useState, useEffect } from 'react'
import { Link } from "react-scroll";
import '../Navbar/Navbar.css'
import { motion } from "framer-motion";

const containerVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { delay: 1.3, duration: 1.3 }
    },
    exit: {
        x: '-100vw',
        transition: { ease: 'easeInOut' }
    }
}

const Navbar = () => {
    const [scrollNav, setScrollNav] = useState(false)
    const changeNav = () => {
        if (window.scrollY >= 700) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])


    return (
        <>
            <motion.nav id="navbar" scrollNav={scrollNav}
                variants={containerVariants}
                initial="hidden"
                animate="visible">
                <div className='nav__container'>
                    <ul className='navlink__container'>
                        <motion.li className="navlink"
                            whileHover={{ scale: 1.3 }}
                            whileTap={{ scale: 0.9 }}>
                            <Link activeClass="active"
                                duration={500} smooth spy
                                exact='true' to="about">
                                About
                            </Link>
                        </motion.li>
                        <motion.li className="navlink"
                            whileHover={{ scale: 1.3 }}
                            whileTap={{ scale: 0.9 }}>
                            <Link activeClass="active"
                                duration={500} smooth spy
                                exact='true' to="process">
                                how it works
                            </Link>
                        </motion.li>
                        <motion.li className="navlink"
                            whileHover={{ scale: 1.3 }}
                            whileTap={{ scale: 0.9 }}>
                            <Link activeClass="active"
                                duration={500} smooth spy
                                exact='true' to="plants">
                                Plants
                            </Link>
                        </motion.li>
                        <motion.li className="navlink"
                            whileHover={{ scale: 1.3 }}
                            whileTap={{ scale: 0.9 }}>
                            <Link activeClass="active"
                                duration={500} smooth spy
                                exact='true' to="contact">
                                Contact
                            </Link>
                        </motion.li>
                    </ul>
                </div>
            </motion.nav>
        </>
    )
}

export default Navbar