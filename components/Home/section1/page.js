import React from 'react' 
import Image from "next/image";
import Link from 'next/link';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function Section1(){
    return(
        <>
        <Container fluid className="mb-sm-5 mb-4" id="section1">
            <Row>				
                <Col md={6} className="leftside d-flex justify-content-center align-items-center bg-navyblue">
                    <div className="text-white p-lg-5 p-4">
                        <h1>Lorem ipsum dolor <br /><span className="text-orange">sit amet,</span> consectetur elit.</h1> 
                        <p>Lorem ipsum dolor duis aute irure dolor in reprehenderit in voluptate velit esse. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>						
                        <Link href="#" className="text-decoration-none text-orange">View More</Link>

                        { /* Search Form */ }
                        <Form className="search-form">
                            <div className="d-flex mb-3 mt-lg-5 mt-4">
                                <Form.Control type="text" id="search" placeholder="Search here" name="search" />
                                <Button type="submit" className="btn btn-primary bg-blue">Search</Button>					  	
                            </div>
                        </Form>
                        { /* Search Form Ended */ }

                    </div>
                </Col>
                <Col md={6} className="col-12 p-0">
                    <Image src="/img/meeting-image.jpg" alt="Meeting Image" width={500} height={500} className="img-fluid w-100 h-100" />
                </Col>
            </Row>
        </Container>

    </>
    )
}