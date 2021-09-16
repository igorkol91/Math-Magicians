import React from 'react';
import PropTypes from 'prop-types';

export default class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    const { value } = this.props;
    e.target.value = value;
  }

  render() {
    const { value } = this.props;
    return (
      <div className="w-100">
        <input className="w-75 displayInput" onChange={(e) => this.handleChange(e)} type="text" value={value} />
      </div>
    );
  }
}

Display.propTypes = {
  value: PropTypes.string.isRequired,
};
