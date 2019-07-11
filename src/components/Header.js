import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Header extends Component {
  render() {
    return (
      <Row >
        <Col>
          <div className='header'>
            <h1>
              CODING CHALLENGE
            </h1>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Header;