import React from 'react';

export default function PaymentForm() {
  return (
    <div>
      <ul
        className="nav bg-light nav-pills rounded nav-fill mb-3"
        role="tablist"
      >
        <li className="nav-item">
          <a
            className="nav-link active"
            data-toggle="pill"
            href="#nav-tab-card"
          >
            <i className="fa fa-credit-card" /> Credit Card
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="pill" href="#nav-tab-paypal">
            <i className="fab fa-paypal" /> Paypal
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="pill" href="#nav-tab-bank">
            <i className="fa fa-university" /> Bank Transfer
          </a>
        </li>
      </ul>

      <div className="tab-content">
        <div className="tab-pane fade show active" id="nav-tab-card">
          <p className="alert alert-success">Some text success or error</p>
          <form role="form">
            <div className="form-group">
              <label htmlFor="username">Full name (on the card)</label>
              <input
                type="text"
                className="form-control"
                name="username"
                placeholder=""
                required=""
              />
            </div>

            <div className="form-group">
              <label htmlFor="cardNumber">Card number</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  name="cardNumber"
                  placeholder=""
                />
                <div className="input-group-append">
                  <span className="input-group-text text-muted">
                    <i className="fab fa-cc-visa" />
                    <i className="fab fa-cc-amex" />
                    <i className="fab fa-cc-mastercard" />
                  </span>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-8">
                <div className="form-group">
                  <label>
                    <span className="hidden-xs">Expiration</span>{' '}
                  </label>
                  <div className="form-inline">
                    <select className="form-control">
                      <option>MM</option>
                      <option>01 - Janurary</option>
                      <option>02 - February</option>
                      <option>03 - March</option>
                      <option>04 - April</option>
                      <option>05 - May</option>
                      <option>06 - June</option>
                      <option>07 - July</option>
                      <option>08 - August</option>
                      <option>09 - September</option>
                      <option>10 - October</option>
                      <option>11 - November</option>
                      <option>12 - December</option>
                    </select>
                    <span className="span"> / </span>
                    <select className="form-control">
                      <option>YY</option>
                      <option>2017</option>
                      <option>2018</option>
                      <option>2019</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="form-group">
                  <label
                    data-toggle="tooltip"
                    title=""
                    data-original-title="3 digits code on back side of the card"
                  >
                    CVV <i className="fa fa-question-circle" />
                  </label>
                  <input className="form-control" required="" type="text" />
                </div>
              </div>
            </div>
            <button
              className="subscribe btn btn-primary btn-block"
              type="button"
            >
              {' '}
              Confirm{' '}
            </button>
          </form>
        </div>
        <div className="tab-pane fade" id="nav-tab-paypal">
          <p>Paypal is easiest way to pay online</p>
          <p>
            <button type="button" className="btn btn-primary">
              {' '}
              <i className="fab fa-paypal" /> Log in my Paypal{' '}
            </button>
          </p>
          <p>
            <strong>Note:</strong> Paypal is not responsible for any third-party
            payment transactions{' '}
          </p>
        </div>
        <div className="tab-pane fade" id="nav-tab-bank">
          <p>Bank account details</p>
          <dl className="param">
            <dt>BANK: </dt>
            <dd> THE WORLD BANK</dd>
          </dl>
          <dl className="param">
            <dt>Account number: </dt>
            <dd> 12345678912345</dd>
          </dl>
          <dl className="param">
            <dt>IBAN: </dt>
            <dd> 123456789</dd>
          </dl>
          <p>
            <strong>Note:</strong> Your bank is not responsible....{' '}
          </p>
        </div>
      </div>
    </div>
  );
}
