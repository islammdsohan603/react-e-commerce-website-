import React, { use } from 'react';
import Cart from './Cart';

const FoodsData = ({ promiesData, isMoon }) => {
  const facthData = use(promiesData);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {facthData.map((food, index) => (
        <Cart food={food} key={food.id} index={index} isMoon={isMoon} />
      ))}
    </div>
  );
};

export default FoodsData;
