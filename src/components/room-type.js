import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col, ButtonToolbar, ToggleButtonGroup, ToggleButton } from "react-bootstrap";
// import { RadioGroup, RadioButton } from 'react-radio-buttons'

class RoomType extends Component {
  render() {
    return (
      <Row md="12">
        <Col md="4" sm="4">
          Oda Tipi
        </Col>
        <Col md="8" sm="8">
          <ButtonToolbar>
            <ToggleButtonGroup
              size="sm"
              type="radio"
              name="options"
              defaultValue={this.props.value}
              onChange={this.props.onChange}
            >
              <ToggleButton value="standart">Standart </ToggleButton>
              <ToggleButton value="deluxe">Deluxe</ToggleButton>
              <ToggleButton value="suit">Suit</ToggleButton>
            </ToggleButtonGroup>
          </ButtonToolbar>
        </Col>
      </Row>
    );
  }
}

RoomType.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default RoomType;