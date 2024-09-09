import React from 'react';
import './footer.css';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footMenu">
                <div>
                    <Link activeClass='active1' spy={true} offset={-10} className='listFoot' to="intro" smooth={true} duration={500}>Home</Link>                
                    <Link className='listFoot' activeClass='active1' spy={true} offset={-10} to="skills" smooth={true} duration={500}>Skills</Link>                
                    <Link className='listFoot' activeClass='active1' spy={true} offset={-10} to="works" smooth={true} duration={500}>Projects</Link>
                </div>
                <div>
                    <Link className='listFoot' activeClass='active1' spy={true} offset={-10} to="certifications" smooth={true} duration={500}>Certifications</Link>
                    <Link className='listFoot1' activeClass='active1' spy={true} offset={-10} to="contactPage" smooth={true} duration={500}>Contact Me</Link>
                </div>
            </div>
            Copyright &#169; 2024 Harsha Maddineni. All rights reserved.
        </footer>
    );
}

export default Footer;
