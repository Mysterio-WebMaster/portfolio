    import React from 'react'
import './style.css'
import {Container, Row, Col} from 'react-bootstrap'
import Profile from './IMG_20200118_112705456_HDR (2).jpg'
import { BsFillCalendar2CheckFill as Calendar, BsFillTelephoneFill as Phone } from 'react-icons/bs';
import { GoLocation, GoMail } from 'react-icons/go';

function about() {
    return (
        <div className='about'>
            <Container>
                <Row>
                    <Col md={4}>
                        <img src={Profile} className='profile'/>
                    </Col>
                    <Col md={8}>
                        <div className="aboutme">
                            <h3> <b>About Me</b> </h3>
                            <hr /><br></br>

                            <span className='intro'><h4>I'm Professional Web Developer</h4></span>
                            <p>Inventive Web Developer creates novel site designs and innovative user interfaces. Technically proficient and analytical problem solver with calm and focused manner. Organized and dependable candidate successful at managing multiple priorities with a positive attitude. Willingness to take on added responsibilities to meet team goals. Friendly student available for weekend, evening and holiday shifts. Considered hardworking, punctual and driven. </p>

                            <div className="details">
                                 <Row>
                                     <Col md={6} >
                                        <p> 
                                             <span className="quest"><GoLocation/> Location:  </span> 
                                             <span className='answer'>Pimple Saudagar</span>
                                        </p>
                                     </Col>
                                     <Col md={6} >
                                        <p> 
                                             <span className="quest"><Calendar/> Age:  </span> 
                                             <span className='answer'>21</span>
                                        </p>
                                     </Col> 
                                     <Col md={6} >
                                        <p> 
                                             <span className="quest"><Phone/> Phone:  </span> 
                                             <span className='answer'>+91-8657607325</span>
                                        </p>
                                     </Col> 
                                     <Col md={6} >
                                        <p> 
                                             <span className="quest"><GoMail/> Email:  </span> 
                                             <span className='answer'>chinmaylimje3500@gmail.com</span>
                                        </p>
                                     </Col>  
                                 </Row>
                            </div>

                        </div>
                        
                    </Col>
                </Row>

            </Container>
            
        </div>
    )
}

export default about
