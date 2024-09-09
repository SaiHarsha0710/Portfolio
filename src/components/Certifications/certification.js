import React from 'react';
import './certification.css';
import p1 from '../../Old Photos/Python1.png';
import p2 from '../../Old Photos/Python2.png'
import p3 from '../../Old Photos/Python for Ds.png';
import p4 from '../../Old Photos/DataScience.png';
import p5 from '../../Old Photos/Henotic.jpeg';
import p6 from '../../Old Photos/Wipro.webp';

const Certifications = () => {
    const projects = [
        { src: p4, title: "Data Science For Engineers", description: "The course covers the contents of, basic programming in R, Linear Algebra, Basics of optimization and algorithms of data science and practical examples. The algorithms covered in course are simple linear regression, multiple linear regression, logistic regression, KNN Algorithm and K means clustering algorithm.", link: "https://drive.google.com/file/d/1dyhGtsApFQMQl5let-zCmR_ssAWp69Lv/view?usp=sharing" },
        { src: p3, title: "Python For Data Science", description: "The Python for Data Science course by NPTEL provides a comprehensive introduction to data science using Python. It covers essential topics like Python programming, data manipulation with Pandas, numerical computing with NumPy, and data visualization with Matplotlib and Seaborn. The course also introduces machine learning concepts using Scikit-learn, making it an ideal starting point for learners aiming to build a strong foundation in data science.", link: "https://drive.google.com/file/d/19y5pZw_-f-88jNWYaaUFX1hYma0LfIoy/view?usp=sharing" },
        { src: p2, title: "Python Essentials-2", description: "The Cisco Skills for All: Python Essentials 2 course is designed to build on foundational Python knowledge, focusing on more advanced programming concepts. It covers topics such as object-oriented programming (OOP), file handling, exception handling, and working with modules and packages. The course aims to enhance problem-solving skills and prepare learners for real-world applications of Python, making it suitable for those looking to advance their programming expertise.", link: "https://drive.google.com/file/d/1pFpjtZxCTv0s5D_ra2fOy8DV-zX_6cCh/view?usp=drive_link" },
        { src: p1, title: "Python Essentials-1", description: "The Cisco Skills for All: Python Essentials 1 course is an introductory program designed to teach the fundamentals of Python programming. It covers basic concepts such as data types, control structures, functions, and error handling. The course is aimed at beginners and includes interactive lessons, hands-on labs, and quizzes to reinforce learning. It's part of Cisco's broader initiative to equip learners with essential technical skills, providing a solid foundation for further study in programming and IT fields.", link: "https://drive.google.com/file/d/1B0H6yv5PN8xV0m6MutcC16spXa7c0rS1/view?usp=sharing" },
        { src: p5, title: "Machine Learning and Data Science", description: "Created various classification models for predicting credit scores, aiding in credit card approval decisions.", link: "https://drive.google.com/file/d/1oWpkOsbmhd5NIJNd30Y_wryI2YiFBE9m/view?usp=sharing" },
        { src: p6, title: "Wipro Java Programming", description: "The Wipro Java Programming course up to JDBC (Java Database Connectivity) offers a comprehensive introduction to Java, focusing on core concepts such as object-oriented programming, data types, control structures, and exception handling. It then advances to more complex topics like collections, multithreading, and file handling. The course also covers JDBC, which is crucial for connecting Java applications to databases. By the end of this course, learners will be equipped with the skills to build robust Java applications and interact with databases effectively.", link: "https://github.com/SaiHarsha0710" }
    ];

    return (
        <section id='certifications'>
            <h2 className="worksTitle">Experience & Certifications</h2>
            <span className="worksDesc">Discover my journey through the dynamic world of technology and my unwavering commitment to continuous learning. This section highlights my professional experiences, showcasing the projects and roles that have significantly shaped my career. Additionally, you'll find certifications that validate my expertise and demonstrate my dedication to staying current in this ever-evolving field</span>

            <div className="worksImgs">
                {projects.map((project, index) => (
                    <div key={index} className="worksImgContainer">
                        <div className="worksImgInnerContainer">
                            <img src={project.src} alt={project.title} className="worksImg" />
                            <div className="worksTitleContainer">
                                <h3>{project.title}</h3>
                            </div>
                        </div>
                        <div className="worksImgOverlay">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.link}><button>view</button></a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
