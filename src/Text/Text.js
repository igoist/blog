import React from 'react';
import './index.css';

class Text extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ifInput: false,
      text: 'text test...'
    };
  }

  componentDidMount() {
    console.log(this.wrap);
    let wrap = this.wrap;
    let input = this.input;
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

    wrap.addEventListener('dblclick', () => {
      {/* console.log('dd'); */}
      this.setState({
        ifInput: true
      });
    });

    input.addEventListener('blur', () => {
      this.setState({
        ifInput: false,
        text: input.value
      });
      window.onmousemove = null;
    });
  }

  render() {
    const { text, ifInput } = this.state;
    const textPartClassName = ifInput ? 'text-part hidden' : 'text-part';
    const inputPartClassName = ifInput ? 'input-part' : 'input-part hidden';
    return (
      <div className='text-wrap' ref={ wrap => { this.wrap = wrap; }}>
        <div className={ textPartClassName }>
          <p>{ text }</p>
        </div>
        <div className={ inputPartClassName }>
          <input type='text' placeholder='text' ref={ input => { this.input = input; }} />
        </div>
      </div>
    );
  }
}

export default Text;
