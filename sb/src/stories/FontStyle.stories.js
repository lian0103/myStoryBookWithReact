import React from 'react';
import FontStyle from '../design/fontStyle/index';

export default {
    title: 'FontStyle',
    component: <FontStyle />,
  };

export const font1 = () => {
  return (
    <>
      fontSize 40
      <FontStyle size={40}/>
    </>
  )
}

export const font2 = () => {
  return (
    <>
      fontSize 100
      <FontStyle size={100}/>
    </>
  )
}