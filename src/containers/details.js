import React, { Component } from "react";
import { Modal, Container, Button, ButtonGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from '../redux/actions/reservations';
import DateString from "../components/date-string";
import RoomType from "../components/room-type";
import View from "../components/view";

class Details extends Component {
  _handleGoBack = () => {
    this.props.history.goBack()
  }

  _handleGoPayment = () => {
    this.props.history.push("/payment")
  }

  _handleGoPaymentDisabled = () => {
    return (this.props.reservation.roomType && this.props.reservation.view) ? false : true;
  }

  render() {
    console.log('reservation: ', this.props.reservation);
    return (
      <Modal.Dialog id="details">
        <Modal.Body>
          <div className="d-flex flex-column">
            <ButtonGroup size="sm">
              <Button variant="light">Tarih</Button>
              <Button variant="primary">Oda</Button>
              <Button variant="light">Ödeme</Button>
            </ButtonGroup>
          </div>

          <Container>
            <DateString
              checkIn={this.props.reservation.checkIn}
              checkOut={this.props.reservation.checkOut}
            />
            <RoomType
              value={this.props.reservation.roomType}
              onChange={roomType => this.props.actions.updateRoomInfo({ roomType })}
            />
            <View
              value={this.props.reservation.view}
              onChange={view => this.props.actions.updateRoomInfo({ view })}
            />
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={this._handleGoBack}>Geri</Button>
          <Button variant="primary" disabled={this._handleGoPaymentDisabled()} onClick={this._handleGoPayment}>İleri</Button>
        </Modal.Footer>
      </Modal.Dialog >
    );
  }
}

Details.propTypes = {
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
)(Details)