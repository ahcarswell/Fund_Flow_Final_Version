import React from 'react';

import PaymentForm from './PaymentForm/PaymentForm'

import './Payment.css';

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <div className="w3-container w3-padding-32" id="payment">
        <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
          Payment
        </h3>
        <p>Donate Today! </p>
        <div className="w3">
          <PaymentForm />
        </div>
      </div>
    );
  }
}

export default Payment;
