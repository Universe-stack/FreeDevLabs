import React from 'react';
import './communities.scss';

import { useSelector } from "react-redux";

const Communities = () => {
    
    const community = useSelector((state)=>state.communities.communities);
    console.log(community);
  return (
    <div>communities is {community}</div>
  )
}

export default Communities