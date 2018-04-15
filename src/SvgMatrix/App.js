import React from 'react';
import '../../public/css/style.css';
import { Rect } from './SvgElements';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matrix: [],
      column: 11,
      row: 6,
      size: 30
    };
    this.generateMatrix = this.generateMatrix.bind(this);
    this.handleRect = this.handleRect.bind(this);
  }

  componentDidMount() {
    this.generateMatrix();
  }

  handleRect(r, c) {
    // console.log(r, c);
    this.setState(prevState => {
      let matrix = prevState.matrix;
      matrix[r * prevState.column + c].color = '#149cec';
      return {
        matrix
      };
    });
  }

  generateMatrix() {
    const { column, row, size } = this.state;
    let matrix = new Array(column * row);
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < column; j++) {
        // matrix[i * column + j] = (i * column + j) % 2;
        matrix[i * column + j] = {
          column: j,
          row: i,
          color: (i * column + j) % 2 ? '#ec414d' : '#0183ff',
          size
        };
      }
    }

    this.setState({
      matrix
    });
  }

  render() {
    const { matrix } = this.state;
    // console.log(matrix);

    let rects = matrix.map(item => {
      return <Rect item={ item } handle={ this.handleRect } />;
    });
    return (
      <div>
        <h1>SvgMatrix</h1>
        <svg id='svg-root' version='1.1'
          baseProfile='full'
          width='300' height='300'
          xmlns='http://www.w3.org/2000/svg'>
          { rects }
        </svg>
      </div>
    );
  }
}

export default App;
