import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default function Section4(){
    const section6Data = [
                            {count:'15,000+', text: 'New Releases', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'},
                            {count:'80', text: 'Paid Datasources', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'},
                            {count:'450+', text: 'Counselors', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'},
                            {count:'65', text: 'Industry Mavens', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'},
                            {count:'360', text: 'Research Methodology', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'},
                        ];
    return(
        <>
            <Container className="my-sm-5 my-4" id="section4">
                <Row>
                    <Col md={6} className="bg-c-lightgray p-3 order-md-1 order-2">
                    <table className="tbl-best-policy">
                        <colgroup>
                        <col width="50%" />
                        <col width="50%" />
                        </colgroup>
                        <tbody>
                            {
                                section6Data.map( (item, index)=> {
                                    return(
                                        <>
                                        <tr key={index}>
                                            <td><span className="text-orange display-5 fw-bold">{item.count}</span><br />
                                            <span className="fs-4 text-uppercase">{item.text}</span></td>
                                            <td className="text px-3">{item.desc}</td>
                                        </tr>
                                        <tr><td colSpan="2"></td></tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                
                    </Col>
                    <Col md={6} className="order-md-2 order-1">
                        <h2 className="title text-start mb-3 mt-sm-5 text-capitalize"> We take recourse to the <span className="text-orange">best&nbsp;policy </span> </h2>
                        <p className="text w-75">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        ris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>		
                    </Col>
                </Row>
            </Container>
            <br />
        </>
    )
}