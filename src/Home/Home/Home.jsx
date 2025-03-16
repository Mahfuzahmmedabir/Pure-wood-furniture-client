import React from 'react';
import Banner from '../Banner/Banner';
// import FurnitureInfo from '../FurnitureInfo/FurnitureInfo';
import Category from '../Category/Categorys';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* <FurnitureInfo></FurnitureInfo> */}
      <Category></Category>
    </div>
  );
};

export default Home;
