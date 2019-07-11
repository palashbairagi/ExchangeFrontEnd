import React, { Component } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

class ExecutionReport extends Component {
  state = {
    executionReport: []
  }

  render() {
    return (
      <Row>
        <Col><h2 className="heading">Execution Report</h2></Col>
        <Col>
          <div className='search-wrapper' >
            <Form>
              <FormControl className='search-bar' type='text' placeholder='Symbol' onChange={this.getExecutionReport} />
            </Form>
          </div>
        </Col>
        <Col>
          {this.state.executionReport.map((executionRep) => (
            <div key={executionRep.id} className='content-wrapper'>
              <div>
                <label>Member ID</label>&nbsp;
                <label>{executionRep.memberId}</label>
              </div>
              <div>
                <label>Order Id</label>&nbsp;
                <label>{executionRep.orderId}</label>
              </div>
              <div>
                <label>Venue</label>&nbsp;
                <label>{executionRep.venue}</label>
              </div>
              <div>
                <label>Symbol</label>&nbsp;
                <label>{executionRep.symbol}</label>
              </div>
              <div>
                <label>Executed Quantity</label>&nbsp;
                <label>{executionRep.executedQty}</label>
              </div>
              <div>
                <label>Executed Price</label>&nbsp;
                <label>{executionRep.executedPrice}</label>
              </div>
              <div>
                <label>Side</label>&nbsp;
                <label>{executionRep.side}</label>
              </div>
              <div>
                <label>Status</label>&nbsp;
                <label>{executionRep.orderStatus}</label>
              </div>
            </div>
          ))}
        </Col>
      </Row>
    );
  }

  getExecutionReport = (e) => {
    if (e.target.value.length > 0) {
      var url = 'http://localhost:8080/exchange/executionReport/' + e.target.value
      fetch(url)
        .then(res => res.json())
        .then((data) => {
          this.setState({
            executionReport: data
          })
        })
        .catch(console.log)
    }
  }
  
}

export default ExecutionReport;
