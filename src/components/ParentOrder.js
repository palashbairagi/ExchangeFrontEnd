import React, { Component } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

class ParentOrder extends Component {
  state = {
    parentOrders: []
  }

  render() {
    return (
      <Row>
        <Col><h2 className='heading'>Parent Order</h2></Col>
        <Col>
          <div className='search-wrapper' >
            <Form>
              <FormControl className='search-bar' type='text' placeholder='Symbol' onChange={this.getParentOrder} />
            </Form>
          </div>
        </Col>
        <Col>
          {this.state.parentOrders.map((parentOrder) => (
            <div key={parentOrder.id} className="content-wrapper">
              <div>
                <label>Member ID</label>&nbsp;
                <label>{parentOrder.memberId}</label>
              </div>
              <div>
                <label>Order Id</label>&nbsp;
                <label>{parentOrder.orderId}</label>
              </div>
              <div>
                <label>Venue</label>&nbsp;
                <label>{parentOrder.venue}</label>
              </div>
              <div>
                <label>Symbol</label>&nbsp;
                <label>{parentOrder.symbol}</label>
              </div>
              <div>
                <label>Quantity</label>&nbsp;
                <label>{parentOrder.quantity}</label>
              </div>
              <div>
                <label>Price</label>&nbsp;
                <label>{parentOrder.price}</label>
              </div>
              <div>
                <label>Side</label>&nbsp;
                <label>{parentOrder.side}</label>
              </div>
              <div>
                <label>Type</label>&nbsp;
                <label>{parentOrder.type}</label>
              </div>
            </div>
          ))}
        </Col>
      </Row>
    );
  }

  getParentOrder = (e) => {
    if (e.target.value.length > 0) {
      var url = 'http://localhost:8080/exchange/parent/' + e.target.value
      fetch(url)
        .then(res => res.json())
        .then((data) => {
          this.setState({
            parentOrders: data
          })
        })
        .catch(console.log)
    }
  }

}

export default ParentOrder;
