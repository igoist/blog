import React from 'react';

class Popover extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let wrap = this.wrap;
    wrap.className = 'popover popover-placement-right zoom-big-enter zoom-big-enter-active';
  }

  componentWillUnmount() {
    let wrap = this.wrap;
    // how to ...
    wrap.className = 'popover popover-placement-right zoom-big-leave zoom-big-leave-active';
  }

  render() {
    return (
      <div style={{ position: 'absolute', top: '0px', left: '0px', width: '100%' }}>
        <div>
          <div ref={ wrap => { this.wrap = wrap; }} className='popover popover-placement-right popover-hidden' style={{ left: '767px', top: '20.562px', transformOrigin: '-4px 50% 0px' }}>
            <div className='popover-content'>
              <div className='popover-arrow'></div>
              <div className='popover-inner'>
                <div>
                  <div className='popover-title'>
                    <span>Title</span>
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
