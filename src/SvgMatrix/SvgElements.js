import React from 'react';

class Rect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let { color, column, row, size } = this.props.item;
    let { handle } = this.props;
    return (
      <rect x={ column * size } y={ row * size } width={ size } height={ size } stroke={ color } fill={ color } stroke-width='1' onMouseOver={ () => handle(row, column) } />
    );
  }
}

export { Rect };
