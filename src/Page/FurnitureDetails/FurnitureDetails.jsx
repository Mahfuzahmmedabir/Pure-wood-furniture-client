import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FurnitureDetails = () => {
  const furnitureInfo = useLoaderData();
  console.log(furnitureInfo);
  const { image, name, price, descriptions } = furnitureInfo;
  return (
    <div>
      <div className="lg:flex gap-8 p-4  py-6">
        <div className="lg:w-5/12 ">
          <img className="w-[800px]" src={image} alt="" />
        </div>
        <div className="lg:w-6/12">
          <h2 className="font-semibold text-3xl">{name}</h2>
          <h3 className="text-2xl mt-3">TK: {price}</h3>
          <p>
            <span className="font-semibold">Description:</span> {descriptions}
          </p>

          <button className="mt-3 border bg-black text-white font-semibold px-3 py-2 ">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FurnitureDetails;
