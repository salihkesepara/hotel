import React, { Component } from "react";
import { Modal, Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from '../redux/actions/reservations';
import DateString from "../components/date-string";
import ReactCreditCard from "../components/react-credit-card";

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: {},
    };
  }
  _handlePayment = () => {
    console.log('Reservations Details: ', this.props.reservation);
    localStorage.setItem("reservation", JSON.stringify(this.props.reservation));

    alert('Reservasyon Gerçekleşti.')
  }

  _handlePaymentDisabled = () => {
    const { number, name, expiry, cvc } = this.state.card;
    return (number && name && cvc && expiry) ? false : true;
  }

  render() {
    return (
      <Modal.Dialog id="payment">
        <Modal.Body>
          <div className="d-flex flex-column">
            <ButtonGroup size="sm">
              <Button variant="light">Tarih</Button>
              <Button variant="light">Oda</Button>
              <Button variant="primary">Ödeme</Button>
            </ButtonGroup>
          </div>
          <Container>
            <DateString
              checkIn={this.props.reservation.checkIn}
              checkOut={this.props.reservation.checkOut}
            />
            <Row>
              <Col>
                Oda Tipi: {this.props.reservation.roomType},
                Manzara: {this.props.reservation.view}
              </Col>
            </Row>
            <Row>
              <Col>
                <ReactCreditCard onChange={card => this.setState({ card })} />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={() => this.props.history.goBack()}>Geri</Button>
          <Button variant="primary" disabled={this._handlePaymentDisabled()} onClick={this._handlePayment}>Ödeme Yap</Button>
        </Modal.Footer>
      </Modal.Dialog>
    )
  }
}

Payment.propTypes = {
  history: PropTypes.object,
  reservation: PropTypes.object,
  actions: PropTypes.object,
}

const mapStateToProps = state => ({
  reservation: state.reservations,
})

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Payment)