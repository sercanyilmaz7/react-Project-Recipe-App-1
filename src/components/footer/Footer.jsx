import React from 'react'
import Foot from './Footer.style'

const Footer = ({themeToogle}) => {
  return <Foot><button onClick={()=>themeToogle()}>Change Color</button></Foot>;
};

export default Footer