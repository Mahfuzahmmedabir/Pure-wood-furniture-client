import React from 'react';
import useItems from '../../hooks/useItems';
import Cards from './Card';

const FurnitureInfo = () => {
  const [furniture] = useItems();
  console.log(furniture);
  return (
    <div>
      <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {furniture?.map(item => (
          <Cards items={item} key={item._id}></Cards>
        ))}
      </div>
    </div>
  );
};

export default FurnitureInfo;
