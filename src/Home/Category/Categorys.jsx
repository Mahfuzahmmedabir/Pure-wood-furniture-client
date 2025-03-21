import React, { useState } from 'react';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';
import useItems from '../../hooks/useItems';
import FurnitureInfo from '../FurnitureInfo/FurnitureInfo';
const Categorys = () => {
  const [isActiveTab, setActiveTab] = useState('');
  console.log(isActiveTab);
  const [furniture] = useItems();
  console.log(furniture);
  const sofa = furniture.filter(item => item.category === 'Sofa');
  const table = furniture.filter(item => item.category === 'Table');
  const chair = furniture.filter(item => item.category === 'Chair');
  const bed = furniture.filter(item => item.category === 'Bed');
  const cabinet = furniture.filter(item => item.category === 'Cabinet');

  const data = [
    {
      label: 'Sofa',
      value: 'Sofa',
      desc: <FurnitureInfo items={sofa}></FurnitureInfo>,
    },
    {
      label: 'Table',
      value: 'Table',
      desc: <FurnitureInfo items={table}></FurnitureInfo>,
    },
    {
      label: 'Chair',
      value: 'Chair',
      desc: <FurnitureInfo items={chair}></FurnitureInfo>,
    },
    {
      label: 'Bed',
      value: 'angular',
      desc: <FurnitureInfo items={bed}></FurnitureInfo>,
    },
    {
      label: 'Cabinet',
      value: 'Cabinet',
      desc: <FurnitureInfo items={cabinet}></FurnitureInfo>,
    },
  ];
  return (
    <div>
      <h2 className="text-center text-4xl my-6 font-semibold">
        Select Your Item
      </h2>
      <Tabs className="">
        <TabsHeader className="cursor-pointer font-bold">
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={
                isActiveTab === value
                  ? 'bg-base-300 font-semibold rounded-2xl lg:text-xl'
                  : 'font-semibold lg:text-xl'
              }
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        {isActiveTab ? (
          ''
        ) : (
          <>
            <FurnitureInfo items={furniture}></FurnitureInfo>
          </>
        )}
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default Categorys;
