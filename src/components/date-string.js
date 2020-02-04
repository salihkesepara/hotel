import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";

class DateString extends Component {
  addZero = value => {
    return parseInt(value) < 10 ? '0' + value : value;
  }

  render() {
    const { checkIn, checkOut } = this.props;
    return (
      <Row md="12">
        <Col md="12" sm="12">
          Check-in: {this.addZero(checkIn.getDate())}/{this.addZero(checkIn.getMonth() + 1)}/{checkIn.getFullYear()},
          Check-out: {this.addZero(checkOut.getDate())}/{this.addZero(checkOut.getMonth() + 1)}/{checkOut.getFullYear()}
        </Col>
      </Row>
    );
  }
}

DateString.propTypes = {
  checkIn: PropTypes.object,
  checkOut: PropTypes.object,
};

export default DateString;