import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import { useEffect, useState } from 'react';
import MyContext from "./Context";
import Component from "./Component";

function App() {
  const [myData, setMyData] = useState([])
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://images-kavita.s3.eu-west-1.amazonaws.com/componants.json');
        setMyData(response.data)
      }
      catch (error) {
        console.error('error fetching JSON : error')

      }

    }
    fetchData()
  }, [])


  return (
    <>
      <MyContext.Provider  value={myData}>
      <Component />
      </MyContext.Provider>
    </>
  );
}

export default App;
