import React from 'react'
import Link from 'next/link';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Footer() {
  return (
   <> 
	<Container fluid className="bg-navyblue text-white pt-5 pb-2 footer">
		<Row>
			<div className="offset-sm-4 col-sm-8 col-12">
				<p className="fs-5 dummy-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. </p>
			</div>
		</Row>
		<br />
		<Row className="pb-lg-5">
			<Col sm={4}>
				<form method="" action="" className="form2">					
					<input type="text" name="" placeholder="Your email" />
					<Button type="submit">Register</Button>
				</form>
			</Col>
			<Col sm={8}>
				<Row>
					<Col sm={4}>
						<div className="title2">The Company</div>
						<ul className="list-unstyled">
							<li><Link href="#" className="link">About Us</Link></li>
							<li><Link href="#" className="link">Why Research Dive?</Link></li>
							<li><Link href="#" className="link">Research Methodology</Link></li>
							<li><Link href="#" className="link">Career</Link></li>
							<li><Link href="#" className="link">Blog</Link></li>
						</ul>
					</Col>
					<Col sm={4}>
						<div className="title2">Services</div>
						<ul className="list-unstyled">
							<li><Link href="#" className="link"> Syndicate Reports</Link></li>
							<li><Link href="#" className="link"> Customzed Reports</Link></li>
							<li><Link href="#" className="link"> Consulting Services</Link></li>
						</ul>
					</Col>
					<Col sm={4}>
						<div className="title2">Find Help</div>
						<ul className="list-unstyled">
							<li><Link href="#" className="link"> GDPR Policy</Link></li>
							<li><Link href="#" className="link"> Privacy Policy</Link></li>
							<li><Link href="#" className="link"> Return Policy</Link></li>
							<li><Link href="#" className="link"> Delivery Method</Link></li>
							<li><Link href="#" className="link"> Terms and Conditions</Link></li>							
						</ul>
					</Col>
				</Row>
			</Col>
		</Row>
		<br />
		<div className="disclaimer d-md-flex justify-content-between">
			<div className="small mb-2">				
				<Link href="#" className="link">Disclaimer</Link>&nbsp;|
				<Link href="#" className="link">Sitemap</Link>&nbsp;|
				<Link href="#" className="link">Contact Us</Link>
			</div>
			<div className="small mb-2">
				<p>&copy; 2023 Research Dive. All Rights Reserved</p>		
			</div>		
		</div>
	</Container>
  </>
  )
}