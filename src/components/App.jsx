import React from 'react';
import Demo from './Button/Demo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h1>This is home!</h1>
        <Demo />
      </div>
    );
  }
}

export default App;
