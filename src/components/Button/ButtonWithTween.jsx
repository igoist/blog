import React from 'react';
// import Tween from './Tween';
import Tween from '../../../public/js/lib/Tween';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const btn = this.button;
    if (this.button.className.indexOf('gradient') !== -1) {
      btn.onmousemove = function (e) {
        const x = e.pageX - btn.offsetLeft;
        const y = e.pageY - btn.offsetTop;

        btn.style.setProperty('--x', x + 'px');
        btn.style.setProperty('--y', y + 'px');
      };
    }

    let { typeA, typeB } = this.props;
    if (!typeA) {
      typeA = 'Elastic';
      typeB = 'easeOut';
    }

    const from = 1;
    const to = 0.86;

    btn.addEventListener('mousedown', () => {
      let start = 0, during = 20;
      let _run = function() {
        start++;
        let scale = Tween[typeA][typeB](start, from, to - from, during);
        btn.style.transform = `scale(${scale})`;
        // console.log(scale, btn.style.transform);
        if (start < during) requestAnimationFrame(_run);
      };
      _run();
    });

    btn.addEventListener('mouseup', () => {
      let start = 0, during = 20;
      let _run = function() {
        start++;
        let scale = Tween[typeA][typeB](start, to, from - to, during);
        btn.style.transform = `scale(${scale})`;
        // console.log(scale, btn.style.transform);
        if (start < during) requestAnimationFrame(_run);
      };
      _run();
    });
  }

  render() {
    let { name, className, margin } = this.props.item;
    if (!className) {
      className = 'btn blue';
    }
    const pre = this.props.pre;
    if (pre) {
      className += ' ' + this.props.pre;
    }

    return (
      <button ref={ button => { this.button = button; }} className={ className } style={{ margin }}>
        <span>{ name }</span>
      </button>
    );
  }
}


export default Button;
