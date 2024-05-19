import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';

export default function Section5(){
    return(
        <>
            <Container fluid className="mb-sm-5 mb-4" id="section5">
                <h2 className="title">Latest Press Release </h2>
                <br />
                <Row className="latset-pr">
                    <Col md={6} className="p-sm-0 pr-div">
                        <div className="pr1">						
                            <div className="py-4 w-50 mx-auto pr-text">
                            <span>July 10, 2023</span>
                            <p className="fs-5 fw-bold text-capitalize">Green Mining Market Size Projected To Generate A Revenue Of $27911.3 Million By 2032</p>
                            </div>
                        </div>
                        <div className="pr-img-div">						
                            <div className="pr-img">						
                            <Image src="/img/green-mining-market.jpg" alt="Green Mining Market" width={800} height={350} className="img-fluid" />			
                            </div>
                            <Link href="#" className="text-reset text-decoration-none">
                            <div className="read-all-pr text-white">Read all press release <i className="fa fa-angle-right"></i></div>	
                            </Link>
                        </div>
                    </Col>

                    <Col md={6} className="p-sm-0 pr-div">
                        <div className="pr2">						
                            <div className="py-4 w-50 mx-auto pr-text">
                            <span>July 10, 2023</span>
                            <p className="fs-5 fw-bold text-capitalize">Education Computing Devices Market Size Is Projected To Grow At A CAGR Of 14.10% And Generate A Revenue Of $368,072.50 Million By 2032</p>
                            </div>
                        </div>
                        <div className="pr-img-div">						
                            <div className="pr-img">
                            <Image src="/img/education-computing-devices-market.jpg" alt="Education Computing Devices Market" width={800} height={350} className="img-fluid" />
                            </div>
                            <Link href="" className="text-reset text-decoration-none">
                            <div className="read-all-pr text-white">Read all press release <i className="fa fa-angle-right"></i></div>	
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
