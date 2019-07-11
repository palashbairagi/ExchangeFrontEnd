import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Footer extends Component {
  render() {
    return (
      <Row>
        <Col>
          <div className='footer'>
            <h3>
              Submitted by Palash Bairagi
            </h3>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Footer;