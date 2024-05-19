import React from 'react'
import Image from "next/image";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function Section1(){
    return(
        <>
        <Container fluid className="pt-sm-5 pt-4" id="section7">
          <h3 className="title text-center mb-sm-5 mb-4">Get Notification</h3>
          <Row className="w-75 mx-auto">
            <Col sm={6} className="mb-4 position-relative">
              <Form.Select className="form-control" name="category">
                <option value="">Select Category</option>
                <option value="cat1"> Category - 1</option>
                <option value="cat2"> Category - 2</option>
                <option value="cat3"> Category - 3</option>
                <option value="cat4"> Category - 4</option>
                <option value="cat5"> Category - 5</option>
              </Form.Select>
            </Col>

            <Col sm={6} className="mb-4 position-relative">
              <Form.Select className="form-control" name="frequency">
                <option value="">Select Frequency</option>
                <option value="freq1"> Frequency - 1</option>
                <option value="freq2"> Frequency - 2</option>
                <option value="freq3"> Frequency - 3</option>
                <option value="freq4"> Frequency - 4</option>
                <option value="freq5"> Frequency - 5</option>
              </Form.Select>

            </Col>

            <Col>
              <Form.Control type="email" name="email" className="form-control" placeholder="Email" />
            </Col>
            <div>
              <Button type="submit" name="submit" className="btn reg-btn">Register now</Button>
            </div>
          </Row>
        </Container>
    </>
    )
}