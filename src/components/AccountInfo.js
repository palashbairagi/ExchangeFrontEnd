import React, { Component } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class AccountInfo extends Component {
  state = {
    accountInfo: [],
  }

  render() {
    return (
      <Row>
        <Col><h2 className="heading">Accounts</h2></Col>
        <Col>
          {this.state.accountInfo.map((accInfo, index) => (
            <div key={index} className='content-wrapper'>
              <div>
                <label>Account Id</label>&nbsp;
                <label>{accInfo.accountId}</label>
              </div>
              <div>
                <label>Market</label>&nbsp;
                <label>{accInfo.market}</label>
              </div>
              <div>
                <label>Currency</label>&nbsp;
                <label>{accInfo.currency}</label>
              </div>
              <div>
                <label>Total</label>&nbsp;
                <label>{accInfo.total}</label>
              </div>
            </div>
          ))}
        </Col>
      </Row>
    );
  }

  componentDidMount() {
    var url = 'http://localhost:8080/exchange/accounts'
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          accountInfo: data
        })
      })
      .catch(console.log)
  }
}

export default AccountInfo;
