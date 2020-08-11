import React from 'react';
import Tab from '../design/Tab/index';

export default {
    title: 'Tab',
    component: <Tab />,
  };

export const tab1 = () => {
  return (
    <>
      <Tab/>
    </>
  )
}

export const tab2 = () => {
  return (
    <>
      <Tab themeDark={true}/>
    </>
  )
}


