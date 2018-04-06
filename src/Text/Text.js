import React from 'react';
import './index.css';
import Popover from './Popover';

class Text extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ifInput: false,
      ifPopover: false,
      text: 'text test...'
    };
  }

  componentDidMount() {
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
      this.setState({
        ifInput: true
      });
    });

    wrap.addEventListener('keydown', (e) => {
      if ((e.key === 'e' || e.key === 'E') && e.ctrlKey) {
        this.setState({
          ifPopover: !this.state.ifPopover
        });
      }
    });

    input.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        this.setState({
          ifInput: false,
          text: input.value
        });
        window.onmousemove = null;
      }
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
    const { text, ifInput, ifPopover } = this.state;
    const textPartClassName = ifInput ? 'text-part hidden' : 'text-part';
    const inputPartClassName = ifInput ? 'input-part' : 'input-part hidden';
    return (
      <div>
        <div className='text-wrap' ref={ wrap => { this.wrap = wrap; }}>
          <div className={ textPartClassName }>
            <p>{ text }</p>
          </div>
          <div className={ inputPartClassName }>
            <input type='text' name='no' placeholder='text' defaultValue={ text } ref={ input => { this.input = input; }} />
          </div>
        </div>
        { ifPopover ?
          <Popover /> : null
        }
      </div>
    );
  }
}

export default Text;
