import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Liquid } from '@ant-design/plots';

export default function Percentile(){
  const config = {
    percent: 0.25,
    outline: {
      border: 4,
      distance: 8,
    },
    wave: {
      length: 128,
    },
    height:350
  };
  return <Liquid {...config} />;
};
