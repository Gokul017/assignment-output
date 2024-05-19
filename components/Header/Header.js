import React from 'react'
import Link from "next/link";
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Header() {
  return (
   <>
   	<Container fluid>
	    
		<Row className="bg-navyblue p-2 text-white topbar">      		
	  		<div className="offset-lg-6 col-lg-6 offset-sm-3 col-sm-9">
		      	<span className="me-3"> <i className="fa fa-phone fa-rotate-90 me-1"></i> +1-888-61-4454(TOLL-FREE) </span>
		      	<span><i className="fa fa-envelope me-1"></i> support@researchdive.com </span>
		    </div>
	    </Row>

		<nav className="navbar navbar-expand-sm bg-white navbar-light ms-auto py-lg-3">
		  <div className="container-fluid">
		    <Link className="navbar-brand" href="/"><img src="img/amr-logo.png" alt="AMR Logo" width="180" height="98" /></Link>
		    <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
		      <span className="navbar-toggler-icon"></span>
		    </Button>
		    <div className="collapse navbar-collapse" id="collapsibleNavbar">
		      <ul className="navbar-nav ms-auto gap-md-4 ">
		        <li className="nav-item">
		          <Link className="nav-link" href="/about">About Us</Link>
		        </li>
		        <li className="nav-item">
		          <Link className="nav-link" href="/consulting">Consulting</Link>
		        </li>
		        <li className="nav-item">
		          <Link className="nav-link" href="/reports">Reports</Link>
		        </li>
		        <li className="nav-item">
		          <Link className="nav-link" href="/contact">Contact Us</Link>
		        </li>
		        <li className="nav-item">
		          <Link className="nav-link login-btn" href="#">Login</Link>
		        </li>
		      </ul>
		    </div>
		  </div>
		</nav>
	</Container>
   </>
  )
}