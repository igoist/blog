import React from 'react';
import './index.css';

class Text extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    console.log(this.wrap);
    let wrap = this.wrap;
    wrap.addEventListener('mousedown', (e) => {
      let offsetTop =  e.pageY - wrap.offsetTop;
      let offsetLeft = e.pageX - wrap.offsetLeft;
      {/* console.log(wrap.offsetTop - e.pageY, wrap.offsetLeft - e.pageX); */}
      window.onmousemove = (e) => {
        wrap.style = `top: ${e.pageY - offsetTop}px; left: ${e.pageX - offsetLeft}px;`;
      };
    });
    wrap.addEventListener('mouseup', () => {
      window.onmousemove = null;
    });
  }

  render() {
    return (
      <div className='text-wrap' ref={ wrap => { this.wrap = wrap; }}>
        <p>text test</p>
      </div>
    );
  }
}

export default Text;
