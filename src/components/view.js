import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col, ButtonToolbar, ToggleButtonGroup, ToggleButton } from "react-bootstrap";

class View extends Component {
  render() {
    return (
      <Row md="12">
        <Col md="4" sm="4">
          Manzara Seçimi
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
              <ToggleButton value="kara">Kara </ToggleButton>
              <ToggleButton value="deniz">Deniz</ToggleButton>
            </ToggleButtonGroup>
          </ButtonToolbar>
        </Col>
      </Row>
    );
  }
}

View.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default View;