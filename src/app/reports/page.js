import React from 'react'
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

export default function Consulting(){
    const repData = [
        {repImage: '/img/img-body-armor.jpg', pubYear: 'July 2023', repTitle:'Global Body Armor Plates Market', repDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
        {repImage: '/img/img-composite-concrete-deck.jpg', pubYear: 'Aug 2023', repTitle:'Global Composite Concrete Deck Market', repDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
        {repImage: '/img/img-bitcoin.jpg', pubYear: 'Sept 2023', repTitle:'Global Lorem Ipsum Dolor Market', repDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
        {repImage: '/img/img-composite-concrete-deck.jpg', pubYear: 'Nov 2023', repTitle:'Europe Composite Concrete Deck Market', repDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
        {repImage: '/img/img-body-armor.jpg', pubYear: 'Oct 2023', repTitle:'North America Body Armor Plates Market', repDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
        {repImage: '/img/img-bitcoin.jpg', pubYear: 'Dec 2023', repTitle:'MEA Lorem Ipsum Dolor Market', repDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
        {repImage: '/img/img-bitcoin.jpg', pubYear: 'Sept 2023', repTitle:'Global Lorem Ipsum Dolor Market', repDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
        {repImage: '/img/img-composite-concrete-deck.jpg', pubYear: 'Nov 2023', repTitle:'Europe Composite Concrete Deck Market', repDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
        {repImage: '/img/img-body-armor.jpg', pubYear: 'Oct 2023', repTitle:'North America Body Armor Plates Market', repDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
        
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
                                <Col lg={4} sm={6} className="mb-4" key={index}>
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

            </Container>
        </>
    )
}