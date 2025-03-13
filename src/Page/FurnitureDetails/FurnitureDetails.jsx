import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FurnitureDetails = () => {
  const furnitureInfo = useLoaderData();
  console.log(furnitureInfo);
  const { image, name } = furnitureInfo;
  return (
    <div>
      <div className="flex gap-4">
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <h3>{name}</h3>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FurnitureDetails;
