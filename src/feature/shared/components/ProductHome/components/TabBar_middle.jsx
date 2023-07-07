/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import TabItem_four from './TabItem_four';
import TabItem_one from './TabItem_one';
import TabItem_three from './TabItem_three';
import TabItem_two from './TabItem_two';

const TabBar_middle = ({ data }) => {
  const { button } = data.tabBar_middle;
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="flex flex-row flex-wrap items-center justify-between w-3/5 m-3 mx-auto text-sm font-semibold text-center text-gray-400 md:text-lg ">
        <button
          type="button"
          onClick={() => handleTabClick('tab1')}
          className="focus:border-b-4 hover:text-blue-500 focus:text-blue-500 focus:border-blue-500"
        >
          {button[0]}
        </button>
        <button
          type="button"
          onClick={() => handleTabClick('tab2')}
          className="focus:border-b-4 hover:text-blue-500 focus:text-blue-500 active:border-blue-500"
        >
          {button[1]}
        </button>
        <button
          type="button"
          onClick={() => handleTabClick('tab3')}
          className="focus:border-b-4 hover:text-blue-500 focus:text-blue-500 active:border-blue-500"
        >
          {button[2]}
        </button>
        <button
          type="button"
          onClick={() => handleTabClick('tab4')}
          className="focus:border-b-4 hover:text-blue-500 focus:text-blue-500 active:border-blue-500"
        >
          {button[3]}
        </button>
      </div>
      <div className="w-full mt-4 mb-8 border-b border-b-[#cccccc]"></div>
      <div className="w-full mt-4 flex justify-center items-center">
        {activeTab === 'tab1' && <TabItem_one data={data} />}
        {activeTab === 'tab2' && <TabItem_two data={data} />}
        {activeTab === 'tab3' && <TabItem_three data={data} />}
        {activeTab === 'tab4' && <TabItem_four data={data} />}
      </div>
    </div>
  );
};

export default TabBar_middle;
