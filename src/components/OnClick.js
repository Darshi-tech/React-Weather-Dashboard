import React, { Component } from 'react';


class ImgOnClick extends Component {
  render() {
    return (
      <div onClick={this.handleClick}>
        <input ref={input => this.inputElement = input} />
      </div>
    );
  }

  handleClick = (e) => {
    this.inputElement.click();
  }
}
export default ImgOnClick;