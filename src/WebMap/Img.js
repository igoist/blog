import React from 'react';

class Img extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { path } = this.props;
    const dirname = '/Web';
    return (
      <div className='wrap'>
        {/* <img src={ dirname + '/' + path } /> */}
        <a href={ dirname + '/' + path } target='__blank'>
          { path }
        </a>
      </div>
    );
  }
}

export default Img;
