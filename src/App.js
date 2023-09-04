import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import { Componant, useEffect,useState } from 'react';
import context from "./Context";

function App() {
  const[myData,setMyData]=useState([])
 useEffect(()=>{
  async function fetchData(){
    try{
    const response=await axios.get('http://images-kavita.s3.eu-west-1.amazonaws.com/componants.json');
  setMyData(response.data)}
  catch(error){
    console.error('error fetching JSON : error')

  }   
  
 }
fetchData()}, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         { JSON.stringify(myData)}
<context.provider value ={myData}>
  <Componant/>
</context.provider>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      
      </header>
    </div>
  );
}

export default App;
