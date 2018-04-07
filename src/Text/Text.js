import React from 'react';
import './index.css';
import Popover from './Popover';

class Text extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ifInput: false,
      ifPopover: 3,
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
      this.setState(prevState => {
        let result;
        if (prevState.ifPopover === 3) {
          result = 3;
        }
        if (prevState.ifPopover === 2) {
          result = 2;
        }
        if (prevState.ifPopover === 1) {
          result = 0;
        }
        if (prevState.ifPopover === 0) {
          result = 2;
        }
        return {
          ifInput: true,
          ifPopover: result
        };
      });
    });

    wrap.addEventListener('keydown', (e) => {
      if ((e.key === 'e' || e.key === 'E') && e.ctrlKey) {
        this.setState(prevState => {
          let result;
          if (prevState.ifPopover === 3) {
            result = 1;
          }
          if (prevState.ifPopover === 2) {
            result = 1;
          }
          if (prevState.ifPopover === 1) {
            result = 0;
          }
          if (prevState.ifPopover === 0) {
            result = 1;
          }
          return {
            ifPopover: result
          };
        });
      }
    });

    input.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        this.setState(prevState => {
          let result;
          if (prevState.ifPopover === 3) {
            result = 3;
          }
          if (prevState.ifPopover === 2) {
            result = 2;
          }
          if (prevState.ifPopover === 1) {
            console.log('heere');
            result = 0;
          }
          if (prevState.ifPopover === 0) {
            result = 2;
          }
          return {
            ifInput: false,
            ifPopover: result,
            text: input.value
          };
        });
        window.onmousemove = null;
      }
    });

    input.addEventListener('blur', () => {
      this.setState(prevState => {
        let result;
        if (prevState.ifPopover === 3) {
          result = 3;
        }
        if (prevState.ifPopover === 2) {
          result = 2;
        }
        if (prevState.ifPopover === 1) {
          result = 0;
        }
        if (prevState.ifPopover === 0) {
          result = 2;
        }
        return {
          ifInput: false,
          ifPopover: result,
          text: input.value
        };
      });
      window.onmousemove = null;
    });
  }

  render() {
    const { text, ifInput, ifPopover } = this.state;
    const textPartClassName = ifInput ? 'text-part hidden' : 'text-part';
    const inputPartClassName = ifInput ? 'input-part' : 'input-part hidden';
    console.log('render with', this.state.ifPopover);
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
        <Popover hidden={ ifPopover } />
      </div>
    );
  }
}

export default Text;
