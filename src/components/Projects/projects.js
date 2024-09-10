import React from 'react';
import './projects.css';
import a from '../../Old Photos/dataset-cover.jpg';
import b from '../../Old Photos/url_short.jpg';
import c from '../../Old Photos/qr.png';
import d from '../../Old Photos/todo.jpg';
import e from '../../Old Photos/instavideo.png';
import f from '../../Old Photos/imagesearch.webp';

const Projects = () => {
    return (
        <section id='works'>
            <h2 className="certificationsTitle">My Projects</h2>
            <p className="certificationsDesc">
            I take pride in my meticulous attention to detail and commitment to pixel-perfect design. I am eager to leverage my skills and experience to help businesses achieve their goals and establish a compelling online presence.
            </p>
            <div className="certifications-grid">
                <div className="certification-card">
                    <div className="certification-card-inner">
                        <div className="certification-icon-container">
                            <img src={a} alt="NPTEL Icon" className="certification-icon" />
                        </div>
                        <div className="certification-content">
                            <h3>Credit Score Classification</h3>
                            <p>Created various classification models for predicting credit scores, aiding in credit card approval decisions.</p>
                            <div className="view-button-container single-button">
                                <a href="https://github.com/SaiHarsha0710/Credit-Score-Classification">
                                    <button className="view-button">View</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="certification-card">
                    <div className="certification-card-inner">
                        <div className="certification-icon-container">
                            <img src={d} alt="NPTEL Icon" className="certification-icon" />
                        </div>
                        <div className="certification-content">
                            <h3>TODO List</h3>
                            <p>Created a TODO application using the MERN stack, offering efficient task management and user-friendly interface.</p>
                            <div className="view-button-container double-button">
                                <a href="https://github.com/SaiHarsha0710">
                                    <button className="view-button">View</button>
                                </a>
                                <a href="https://github.com/SaiHarsha0710">
                                    <button className="view-button">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="certification-card">
                    <div className="certification-card-inner">
                        <div className="certification-icon-container">
                            <img src={b} alt="HackerRank Icon" className="certification-icon" />
                        </div>
                        <div className="certification-content">
                            <h3>URL Shortener</h3>
                            <p>Built a URL shortener application with Node.js, Express.js, and EJS, enabling efficient link management.</p>

                            <div className="view-button-container double-button">
                                <a href="https://url-shortener1-psi.vercel.app/">
                                    <button className="view-button">View</button>
                                </a>
                                <a href="https://github.com/SaiHarsha0710/URL_Shortener">
                                    <button className="view-button">Code</button>
                                </a>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className="certification-card">
                    <div className="certification-card-inner">
                        <div className="certification-icon-container">
                            <img src={c} alt="Google Developer Icon" className="certification-icon" />
                        </div>
                        <div className="certification-content">
                            <h3>QR Code Generator</h3>
                            <p>Developed a responsive QR Code Generator using React, featuring neon-themed UI elements and real-time QR code generation based on user input.</p>
                            <div className="view-button-container double-button">
                                <a href="https://qr-code-generator-harsha.vercel.app/">
                                    <button className="view-button">View</button>
                                </a>
                                <a href="https://github.com/SaiHarsha0710">
                                    <button className="view-button">Code</button>
                                </a>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className="certification-card">
                    <div className="certification-card-inner">
                        <div className="certification-icon-container">
                            <img src={e} alt="NPTEL Icon" className="certification-icon" />
                        </div>
                        <div className="certification-content">
                            <h3>InstaVideo Download</h3>
                            <p>I developed an Instagram Video Downloader leveraging powerful APIs to ensure the reliable and efficient downloading of Instagram videos.</p>
                            <div className="view-button-container double-button">
                                <a href="https://insta-download-harsha.vercel.app/">
                                    <button className="view-button">View</button>
                                </a>
                                <a href="https://github.com/SaiHarsha0710/instaDownload">
                                    <button className="view-button">Code</button>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="certification-card">
                    <div className="certification-card-inner">
                        <div className="certification-icon-container">
                            <img src={f} alt="NPTEL Icon" className="certification-icon" />
                        </div>
                        <div className="certification-content">
                            <h3>Personalized Image Search Engine</h3>
                            <p>Developed an Image Search Engine with Flask, utilizing a Feature Extractor for accurate image searching.</p>
                            <div className="view-button-container single-button">
                                <a href="https://github.com/SaiHarsha0710/Personalized_Image_Search_Engine">
                                    <button className="view-button">View</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Projects;
