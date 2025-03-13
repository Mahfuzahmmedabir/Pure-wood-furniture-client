import React from 'react';
import useItems from '../../hooks/useItems';
import Cards from './Card';

const FurnitureInfo = () => {
  const [furniture] = useItems();
  console.log(furniture);
  return (
    <div>
      {furniture.length}
      <div className="grid   gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {furniture?.map(item => (
          <Cards items={item} key={item._id}></Cards>
        ))}
      </div>
    </div>
  );
};

export default FurnitureInfo;
