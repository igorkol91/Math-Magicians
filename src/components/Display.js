import React from 'react';

export default class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="w-100">
        <input className="w-75 displayInput" type="text" />
      </div>
    );
  }
}
