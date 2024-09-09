import React from 'react';
import './skills.css';

const Skills = () => {
    return (
        <section id='skills'>
            <div className="skills-section">
                <h2 className='ski'>Skills</h2>
                <p className='ski1'>Discover my arsenal of skills and proficiency in cutting-edge technologies. From web development frameworks to programming languages, I bring a versatile skill set to the table.</p>
                
                <div className="skills-categories">
                    <div className="skills-category">
                        <h3>Front-End</h3>
                        <div className="skills">
                            <div className="skill">React</div>
                            <div className="skill">HTML</div>
                            <div className="skill">CSS</div>
                        </div>
                    </div>
                    
                    <div className="skills-category">
                        <h3>Back-End</h3>
                        <div className="skills">
                            <div className="skill">Node JS</div>
                            <div className="skill">Express JS</div>
                            <div className="skill">Javascript</div>
                            <div className="skill">MongoDB</div>
                        </div>
                    </div>
                    
                    <div className="skills-category">
                        <h3>Programming Languages</h3>
                        <div className="skills">
                            <div className="skill">Python</div>
                            <div className="skill">Java</div>
                            <div className="skill">SQL</div>
                            <div className="skill">C++</div>
                            <div className="skill">R</div>
                        </div>
                    </div>
                    
                    <div className="skills-category">
                        <h3>Others</h3>
                        <div className="skills">
                            <div className="skill">GitHub</div>
                            <div className="skill">VS Code</div>
                            <div className="skill">Eclipse</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
