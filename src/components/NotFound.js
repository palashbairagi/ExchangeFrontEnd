import React, { Component } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class NotFound extends Component {
  render() {
	return (
	  <Row>
		<Col>
		  <div className='content-wrapper' >
			<h1>
			  Page Not Found
			</h1>
		  </div>
		</Col>
	  </Row>
	);
  }
}

export default NotFound