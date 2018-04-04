import React from 'react';
import Img from './Img';
import '../../public/css/WebMap/index.css';

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
    let xhr = new XMLHttpRequest();
    xhr.overrideMimeType('application/json');
    xhr.open('GET', './assets/map/map.json');
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        const res = JSON.parse(xhr.response);
        console.log(res);
        this.setState(() => ({ res }));
      }
    };
    xhr.send();
  }

  render() {
    const res = this.state.res;
    let imgs = [];
    if (res.imgs) {
      imgs = [].map.call(res.imgs, (img, index) => {
        return <Img key={ index.toString() } path={img.path} />;
      });
    }
    return (
      <div>
        <h1>This is home!</h1>
        { imgs }
      </div>
    );
  }
}

export default App;
