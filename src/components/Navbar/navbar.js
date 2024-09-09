import React, { useState } from 'react';
import './navbar.css';
import logo from '../../Old Photos/link.jpeg';
import { Link } from 'react-scroll';
import contactImg from '../../Old Photos/contactImg.png';
import menu from '../../Old Photos/menu.jpg';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    // Function to handle menu toggle
    const toggleMenu = () => {
        setShowMenu(!showMenu);
        document.body.classList.toggle('menu-open', !showMenu);
    };

    return (
        <nav className='navbar'>
            <a href='https://www.linkedin.com/in/venkatasaiharsha/'><img src={logo} alt="Logo" className='logo' /></a>
            <div className="desktopMenu">
                <Link activeClass='active' spy={true} offset={-10} className='desktopMenuListItem' to="intro" smooth={true} duration={500}>Home</Link>                
                <Link className='desktopMenuListItem' activeClass='active' spy={true} offset={-10} to="skills" smooth={true} duration={500}>Skills</Link>                
                <Link className='desktopMenuListItem' activeClass='active' spy={true} offset={-10} to="works" smooth={true} duration={500}>Projects</Link>
                <Link className='desktopMenuListItem' activeClass='active' spy={true} offset={-10} to="certifications" smooth={true} duration={500}>certifications</Link>
            </div>
            {/* Use Link directly for the contact button */}
            <Link className='desktopMenuBtn' activeClass='active1' spy={true} offset={-10} to="contactPage" smooth={true} duration={500}>
                <img src={contactImg} alt="" className="desktopMenuImg" />
                Contact Me
            </Link>
            <img src={menu} alt="Menu" className='mobMenu' onClick={toggleMenu} />
            <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link activeClass='active' spy={true} offset={-10} className='listItem' to="intro" smooth={true} duration={500} onClick={toggleMenu}>Home</Link>                
                <Link className='listItem' activeClass='active' spy={true} offset={-10} to="skills" smooth={true} duration={500} onClick={toggleMenu}>Skills</Link>                
                <Link className='listItem' activeClass='active' spy={true} offset={-10} to="works" smooth={true} duration={500} onClick={toggleMenu}>Projects</Link>
                <Link className='listItem' activeClass='active' spy={true} offset={-10} to="certifications" smooth={true} duration={500} onClick={toggleMenu}>certifications</Link>
                <Link className='listItem' activeClass='active' spy={true} offset={-10} to="contactPage" smooth={true} duration={500} onClick={toggleMenu}>contact Me</Link>
            </div>
        </nav>
    );
}

export default Navbar;
