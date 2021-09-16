import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = (e) => {
    const { onClick } = this.props;
    onClick(e.target.innerHTML);
  }

  render() {
    const { value } = this.props;
    return (
      <button className="w-100" type="button" onClick={(e) => this.handleClick(e)}>
        {value}
      </button>
    );
  }
}
Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
