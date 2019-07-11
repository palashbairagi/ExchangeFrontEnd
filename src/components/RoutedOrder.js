import React, { Component } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

class RoutedOrder extends Component {
  state = {
    routedOrders: []
  }

  render() {
    return (
      <Row>
        <Col><h2 className='heading'>Routed Order</h2></Col>
        <Col>
          <div className='search-wrapper' >
            <Form>
              <FormControl className='search-bar' type='text' placeholder='Symbol' onChange={this.getRoutedOrder} />
            </Form>
          </div>
        </Col>
        <Col>
          {this.state.routedOrders.map((routedOrder) => (
            <div key={routedOrder.id} className="content-wrapper">
              <div>
                <label>Member ID</label>&nbsp;
                <label>{routedOrder.memberId}</label>
              </div>
              <div>
                <label>Symbol</label>&nbsp;
                <label>{routedOrder.symbol}</label>
              </div>
              <div>
                <label>Quantity</label>&nbsp;
                <label>{routedOrder.quantity}</label>
              </div>
              <div>
                <label>Price</label>&nbsp;
                <label>{routedOrder.price}</label>
              </div>
              <div>
                <label>Order Id</label>&nbsp;
                <label>{routedOrder.orderId}</label>
              </div>
              <div>
                <label>Venue</label>&nbsp;
                <label>{routedOrder.venue}</label>
              </div>
              <div>
                <label>Side</label>&nbsp;
                <label>{routedOrder.side}</label>
              </div>
            </div>
          ))}
        </Col>
      </Row>
    );
  }

  getRoutedOrder = (e) => {
    if (e.target.value.length > 0) {
      var url = 'http://localhost:8080/exchange/routedOrder/' + e.target.value
      fetch(url)
        .then(res => res.json())
        .then((data) => {
          this.setState({
            routedOrders: data
          })
        })
        .catch(console.log)
    }
  }
  
}

export default RoutedOrder;
