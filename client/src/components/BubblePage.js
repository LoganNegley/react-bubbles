import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import axiosWithAuth from '../axiosAuth.js/axiosWithAuth';

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    axios.get('http://localhost:5000/api/colors')
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error, 'error fetching color data with GET request')
    })
  },[])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
