import React from 'react';
import './intro.css';
import bg from '../../Old Photos/p4.png';
import { ReactTyped as Typed } from 'react-typed';
import h from '../../Old Photos/8.png';
import l from '../../Old Photos/leetcode.png';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Harsha</span>   
 <br />
                    <Typed
                        strings={["a Website Designer!", "an UI/UX Designer!", "a Programmer!"]}
                        typeSpeed={40}
                        backSpeed={30}
                        loop
                    />
                </span>
                <p className="introPara">As a skilled web designer, I excel in creating websites that balance beauty and functionality. I am passionate about crafting designs that not only look great but also provide an optimal user experience. With a focus on innovation and attention to detail.</p>
                <div className="button-container">  {/* Added a container for buttons */}
                    <a href="https://drive.google.com/file/d/1Y0ompIYVl4Gn3WOwS5WYqXaJgmOHT6S8/view?usp=sharing"><button className="btn">Resume</button></a>
                </div>
                <div className="links1">
                    <a href="https://github.com/SaiHarsha0710"><img src={h} alt="Client 2" className="clientImg1" /></a>
                    <a href="https://leetcode.com/u/Harsha_0710/"><img src={l} alt="Client-5" className="clientImg1" /></a>
                </div>
            </div>
            <div className="imageContainer">
                <img src={bg} alt="Profile" className="bg" />
            </div>
        </section>
    );
}

export default Intro;