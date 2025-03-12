import React from 'react';
import useItems from '../../hooks/useItems';
import Cards from './Card';

const FurnitureInfo = () => {
  const [furniture] = useItems();
  console.log(furniture);
  return (
    <div className="bg-blue-500 px-12">
      {furniture.length}
      <div className="grid mx-auto  gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {furniture?.map(item => (
          <Cards items={item}></Cards>
        ))}
      </div>
    </div>
  );
};

export default FurnitureInfo;
