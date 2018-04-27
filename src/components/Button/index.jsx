import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.button.className.indexOf('gradient') !== -1) {
      const btn = this.button;
      btn.onmousemove = function (e) {
        const x = e.pageX - btn.offsetLeft;
        const y = e.pageY - btn.offsetTop;

        btn.style.setProperty('--x', x + 'px');
        btn.style.setProperty('--y', y + 'px');
      };
    }
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
