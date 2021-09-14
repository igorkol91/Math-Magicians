import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { value } = this.props;
    return (
      <button className="w-100" type="button">
        {value}
        {' '}
      </button>
    );
  }
}
Button.propTypes = {
  value: PropTypes.string.isRequired,
};
