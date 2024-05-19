import React from 'react'
import Image from "next/image";
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Section1(){

    const repData = [
                    {repImage: '/img/img-body-armor.jpg', pubYear: 'July 2023', repTitle:'Global Body Armor Plates Market', repDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
                    {repImage: '/img/img-composite-concrete-deck.jpg', pubYear: 'Aug 2023', repTitle:'Global Composite Concrete Deck Market', repDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
                    {repImage: '/img/img-bitcoin.jpg', pubYear: 'Sept 2023', repTitle:'Global Lorem Ipsum Dolor Market', repDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' }
                    ];                    

    return(
        <>
        <Container id="section2">
            <h2 className="title">Our Trending <span className="text-orange">Publications</span></h2>
            <p className="fs-4 text-center mb-sm-5 mb-4">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
        
            <Row className="mb-lg-4">
                {
                    repData.map((item, index) => {
                        return(
                        <Col lg={4} sm={6} className="mb-3" key={index}>
                            <div className="otp-img mx-auto">
                                <Image src={item.repImage} alt="Bitcoin" width={300} height={350} className="img-fluid w-100 " />
                                <span className="year">{item.pubYear}</span>
                                <div className="rep-title">{item.repTitle}</div>
                                <div className="rep-overlay p-3">
                                <h3>{item.repTitle}</h3>
                                <p>{item.repDesc}...</p>
                                <br />
                                <button className="btn btn-outline-light">Read More</button>
                                </div>
                            </div>
                        </Col>
                        )
                    })
                }

            </Row>
            <div className="d-flex">
                <Button className="btn btn-info btn-lg text-white view-all-btn mx-auto mt-sm-4 mt-2">View all</Button>
            </div>
        </Container>
        

    </>
    )
}