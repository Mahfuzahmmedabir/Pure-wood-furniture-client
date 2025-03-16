import React from 'react';

import Cards from './Card';
import useItems from '../../hooks/useItems';

const FurnitureInfo = ({ items }) => {
  const [furniture] = useItems()
  return (
    <div>
      <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {items?.map(item => (
          <Cards items={item} key={item._id}></Cards>
        ))}
      </div>
    </div>
  );
};

export default FurnitureInfo;
