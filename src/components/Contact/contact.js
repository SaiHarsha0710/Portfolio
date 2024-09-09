import React, { useState } from 'react';
import './contact.css';

import h from '../../Old Photos/8.png';
import hack from '../../Old Photos/hack.png';
import emailjs from '@emailjs/browser';
import logo from '../../Old Photos/link.jpeg';
import gfg from '../../Old Photos/gfg.png';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loading spinner

        const serviceId = 'service_esbrx9c';
        const templateId = 'template_9m27f78';
        const publicKey = 'uioPLRbAN7NB6zYyN';

        const templateParams = {
            from_name: name,
            from_email: email,
            from_subject: subject,
            message: message,
        };

        try {
            const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
            console.log('Email successfully sent!', response);
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
            alert('Thanks for reaching me!');
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Failed to send email. Please try again later.');
        } finally {
            setLoading(false); // Stop loading spinner
        }
    };

    return (
        <section id="contactPage">
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="name"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        className="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        className="subject"
                        placeholder="Subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                    />
                    <textarea
                        name="message"
                        className="msg"
                        rows="5"
                        placeholder="Your Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    <button type="submit" className="submitBtn" disabled={loading}>
                        {loading ? 'Sending...' : 'Submit'}
                    </button>
                </form>
                <div className="links">
                    <a href="https://www.linkedin.com/in/venkatasaiharsha/"><img src={logo} alt="Client 1" className="clientImg" /></a>
                    <a href="https://github.com/SaiHarsha0710"><img src={h} alt="Client 2" className="clientImg" /></a>
                    <a href="https://www.hackerrank.com/profile/maddinenivenkat2"><img src={hack} alt="Client 3" className="clientImg" /></a>
                    <a href="https://www.geeksforgeeks.org/user/maddinenivenkb8qm/"><img src={gfg} alt="Client 4" className="clientImg" /></a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
