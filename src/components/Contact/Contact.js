import React from 'react'
import '../Contact/Contact.css';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

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

export default function Contact() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('prayerplants', 'template_4n4fq2s', e.target, 'wrhgXVepnLrhTGrh4')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div>
            <div className="contact__container" id="contact">
                <h1 className="contact__header">
                    Found a plant? <br />
                    Make it yours.
                </h1>
                <div className="form-section">
                    <motion.div className='contact__card'
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible">
                        <form onSubmit={sendEmail} autoComplete="off">
                            <input type="text" name="subject" placeholder='Found a plant? Have any questions?' className='subject' />
                            <input type="text" name="name" placeholder='John Doe' className='name' />
                            <input type="email" name="email" placeholder='thoughtsnprayerplants@gmail.com' className='email' />
                            <input type='text' name="message" className='message' />
                            <br /> <br />
                            <button
                                type="submit" className='form-button' value="send message">Send message</button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>

    );
};