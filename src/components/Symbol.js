import React, { Component } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Symbol extends Component {
  state = {
    symbols: []
  }

  render() {
    return (
      <Row>
        <Col><h2 className='heading'>Symbols</h2></Col>
        <Col>
          {this.state.symbols.map((symbol) => (
            <div key={symbol.id} className='content-wrapper'>
              <div>
                <label>Venue</label>&nbsp;
                <label>{symbol.venueName}</label>
              </div>
              <div>
                <label>Symbol</label>&nbsp;
                <label>{symbol.symbolName}</label>
              </div>
            </div>
          ))}
        </Col>
      </Row>
    );
  }

  componentDidMount() {
    var url = 'http://localhost:8080/exchange/availableSymbols'
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          symbols: data
        })
      })
      .catch(console.log)
  }

}

export default Symbol;
