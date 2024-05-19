import React from 'react'
import { Container } from 'react-bootstrap';

export default function Section1(){
    return(
        <>
        <Container fluid className="bg-navyblue" id="section6">
            <div className="help">				
            <h3 className="fs-1">How can we help you?</h3>
            <p className="fs-5 fw-normal"><span className="text-orange">Get in touch</span> with us or <span className="text-orange">find an office</span> closest to you.</p>
            </div>
        </Container>
      </>
    )
}