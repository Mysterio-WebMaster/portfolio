import React from 'react'
import './style.css'
import {Container, Row, Col} from 'react-bootstrap'
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

function skills() {
    return (
        <div className='skills'>
            <Container>
            <div className="header">
                <p className="headertext">My Skills</p>
                <p className='desc'>Developed interactive and dynamic websites. Assisted the senior developer regularly with various tasks, which resulted in learning additional scripting languages. Ability to manage a hosting environment, including database administration as well as scaling applications to handle load changes</p>
                <hr />
            </div>
            <div className="skillset">
                <Row>
                    <Col md={6}>
                        <ul>
                            <li>HTML <Progress percent={98}  /><br></br></li>
                            <li>CSS and Bootstrap <Progress percent={98} /><br></br></li>
                            <li>Javascript <Progress percent={80} /><br></br></li>
                            <li>jQuery <Progress percent={80} /><br></br></li>
                            <li>php <Progress percent={75} /><br></br></li>
                        </ul>
                    </Col>
                    <Col md={6}>
                        <ul>
                            <li>MySql <Progress percent={90} /><br></br></li>
                            <li>React Js <Progress percent={85} /><br></br></li>
                            <li>Node Js <Progress percent={85} /><br></br></li>
                            <li>C <Progress percent={70} /><br></br></li>
                            <li>C++ <Progress percent={95} /><br></br></li>
                        </ul>
                    </Col>
                </Row>
            </div>

            </Container>
            
            
        </div>
    )
}

export default skills
