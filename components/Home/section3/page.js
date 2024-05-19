import React from 'react'
import Image from "next/image";
import { Container, Row, Col } from 'react-bootstrap';

export default function Section3(){
    const section2Data = [
                            {icon : '/img/analytics.png', text: 'Text 1 : Lorem ipsum dolor sit amet, consectetur adipisicing elit ', color: 'bg-c-green'},
                            {icon : '/img/analytics.png', text: 'Text 2 : Lorem ipsum dolor sit amet, consectetur adipisicing elit ', color: 'bg-c-blue'},
                            {icon : '/img/analytics.png', text: 'Text 3 : Lorem ipsum dolor sit amet, consectetur adipisicing elit ', color: 'bg-c-orange'},
                            {icon : '/img/analytics.png', text: 'Text 4 : Lorem ipsum dolor sit amet, consectetur adipisicing elit ', color: 'bg-c-red'},
                        ];
    return(
        <>    
        <Container className="px-lg-4" id="section3">
            <Row>
                <Col md={6} className="pt-sm-5">
                    <h2 className="title text-sm-start text-center mb-3">What makes us <span className="text-orange">unique</span> <br />and <span className="text-orange">stand alone</span> ? </h2>
                    <p className="text w-75">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur.</p>                    
                </Col>

                <Col md={6}>
                    <Row>
                        {
                            section2Data.map( (item, index) => {
                                return(
                                    <Col xs={6} key={index}>
                                        <div className={`px-3 py-2 samples ${item.color}`}>
                                            <Image src={item.icon} alt="analytics" className="img-fluid" width="45" height="45" />
                                            <p className="text">{item.text} </p>
                                        </div>
                                    </Col>        
                                )
                            })
                        }             
                    </Row>
                </Col>
            </Row> 
        </Container>
      </>
    )
}