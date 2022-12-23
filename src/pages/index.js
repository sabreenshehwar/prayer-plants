import React from 'react'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Process from '../components/Process/Process'
import Plants from '../components/Plants/Plants'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'


const Home = () => {

    return (
        <>
            <Hero />
            <About />
            <Process />
            <Plants />
            <Contact />
            <Footer />
        </>
    );
};

export default Home