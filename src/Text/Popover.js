import React from 'react';

class Popover extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   hidden: this.props.hidden
    // };

    this.handle = this.handle.bind(this);
  }

  handle(hidden) {
    if (hidden < 3) {
      let wrap = this.wrap;
      if (hidden === 0) {
        wrap.className = 'popover popover-placement-right zoom-big-leave zoom-big-leave-active';
        setTimeout(() => {
          wrap.className = 'popover popover-placement-right popover-hidden';
        }, 150);
      } else if (hidden === 1) {
        wrap.className = 'popover popover-placement-right zoom-big-enter zoom-big-enter-active';
      } else {
        wrap.className = 'popover popover-placement-right popover-hidden';
      }
    }
  }

  componentDidMount() {
    // let wrap = this.wrap;
    // wrap.className = 'popover popover-placement-right zoom-big-enter zoom-big-enter-active';
    // const { hidden } = this.props;
    // this.handle(hidden);
    // console.log('create popover');
  }

  render() {
    const { hidden } = this.props;
    this.handle(hidden);
    return (
      <div style={{ position: 'absolute', top: '0px', left: '0px', width: '100%' }}>
        <div>
          <div ref={ wrap => { this.wrap = wrap; }} className='popover popover-placement-right popover-hidden' style={{ left: '767px', top: '20.562px', transformOrigin: '-4px 50% 0px' }}>
            <div className='popover-content'>
              <div className='popover-arrow'></div>
              <div className='popover-inner'>
                <div>
                  <div className='popover-title'>
                    <span>Title{ hidden }</span>
                  </div>
                  <div className='popover-inner-content'>
                    <div>
                      <p>Content</p>
                      <p>Content</p>
                      <input type='text' />
                      <input type='text' />
                      <input type='text' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Popover;
