import React from 'react';
import Item from './Item';

class Row extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { pre, items } = this.props.row;
    const doms = [].map.call(items, (item, index) => {
      return <Item key={ index.toString() } item={ item } pre={ pre } />;
    });

    return (
      <div className='row'>
        { doms }
      </div>
    );
  }
}

export default Row;

