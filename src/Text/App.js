import React from 'react';
import '../../public/css/style.css';
import Text from './Text';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      res: [],
    };
    this.loadMap = this.loadMap.bind(this);
  }

  componentDidMount() {
    this.loadMap();
  }

  loadMap() {
  }

  render() {
    return (
      <div>
        <h1>Text!</h1>
        <Text />
      </div>
    );
  }
}

export default App;
