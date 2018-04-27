import React from 'react';
{/* import Button from './index'; */}
import Button from './ButtonWithTween';

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const item = this.props.item;
    // const pre = this.props.pre;
    return (
      <div className='item'>
        {/* <Button item={ item } pre={ pre } /> */}
        <Button { ...this.props } />
      </div>
    );
  }
}

export default Item;
