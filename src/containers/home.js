import React, { Component } from "react";
import { Modal, Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from '../redux/actions/reservations';
import DatePicker from 'react-date-picker'

class Home extends Component {
  componentDidMount() {
    const reservation = JSON.parse(localStorage.getItem("reservation"));
    if (reservation) {
      reservation.checkIn = new Date(reservation.checkIn);
      reservation.checkOut = new Date(reservation.checkOut);

      this.props.actions.updateRoomInfo(reservation);
      localStorage.clear();
    }
  }

  _handleGoDetail = () => {
    if (this.props.checkIn !== null && this.props.checkOut !== null) {
      this.props.history.push("/details");
    }
  }

  _handleGoDetailDisabled = () => {
    return (this.props.checkIn && this.props.checkOut) ? false : true;
  }

  render() {
    return (
      <Modal.Dialog id="home">
        <Modal.Body>
          <div className="d-flex flex-column">
            <ButtonGroup size="sm">
              <Button variant="primary">Tarih</Button>
              <Button variant="light">Oda</Button>
              <Button variant="light">Ödeme</Button>
            </ButtonGroup>
          </div>

          <Container>
            <Row md="12">
              <Col md="6" sm="6">
                Check-in Tarihi
              </Col>
              <Col md="6" sm="6">
                <DatePicker
                  required={true}
                  format="dd-MM-y"
                  value={this.props.checkIn}
                  onChange={checkIn => this.props.actions.updateRoomInfo({ checkIn })}
                />
              </Col>
            </Row>
            <Row md="12">
              <Col md="6" sm="6">
                Check-out Tarihi
              </Col>
              <Col md="6" sm="6">
                <DatePicker
                  required={true}
                  format="dd-MM-y"
                  value={this.props.checkOut}
                  onChange={checkOut => this.props.actions.updateRoomInfo({ checkOut })}
                />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" disabled={this._handleGoDetailDisabled()} onClick={this._handleGoDetail}>İleri</Button>
        </Modal.Footer>
      </Modal.Dialog >
    );
  }
}

Home.propTypes = {
  history: PropTypes.object,
  checkIn: PropTypes.object,
  checkOut: PropTypes.object,
  actions: PropTypes.object,
};

const mapStateToProps = state => ({
  checkIn: state.reservations.checkIn,
  checkOut: state.reservations.checkOut,
})

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)