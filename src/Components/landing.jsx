import React from 'react'
import './style.css'
import {Container, Row, Col} from 'react-bootstrap'
import Particles from "react-tsparticles";
import './responsive.css'

 



function landing() {
    const particlesInit = (main) => {
      };
    
      const particlesLoaded = (container) => {
      };

    return (
        <div>
            <div className="particle">
                <Particles 
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        
                        fpsLimit: 60,
                        interactivity: {
                        events: {
                            onClick: {
                            enable: false,
                            mode: "push",
                            },
                            onHover: {
                            enable: false,
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                            distance: 800,
                            duration: 2,
                            opacity: 0.8,
                            size: 20,
                            },
                            push: {
                            quantity: 4,
                            },
                            repulse: {
                            distance: 200,
                            duration: 0.4,
                            },
                        },
                        },
                        particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                            enable: true,
                            area: 500,
                            },
                            value: 20,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 5,
                        },
                        },
                        detectRetina: false,
                    }}
                />

            </div>
        
        
        <div className="landing">
            <Container>
                <div className="navigation">
                    <div className="logo">
                        <h3><b>Web Master.</b></h3>
                    </div>
                    {/*<div className="menu">
                        <ul>
                            <li>Home</li>
                            <li onClick={scrollToAbout}>About Me</li>
                            <li onClick={scrollToSkills}>Skills</li> 
                            <li onClick={scrollToContact}>Contact</li>
                        </ul>
                    </div>*/}
                </div>

                <Row>
                    <Col md={8}>
                        <div className="intro">
                            <h3>Hello !</h3><br></br>
                            <h4>This is <span>Chinmay Limje</span> </h4><br></br>
                            <p>Innovative and deadline-driven Web Developer, designing and developing user-centered website materials from initial concept to final.</p>
                        </div>

                    </Col>
                </Row>

            </Container>
            <div className='scroller'>
                <span class="m_scroll_arrows unu"></span>
                <span class="m_scroll_arrows doi"></span>
                <span class="m_scroll_arrows trei"></span>
            </div>

        </div>
        </div>
    )
}

export default landing
