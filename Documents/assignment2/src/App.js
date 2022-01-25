import React from 'react';
import {Route,Routes} from 'react-router-dom';
import styled from "styled-components";
import './App.css';
import Main from './Main';
import Review from './Review';
import {db} from './firebase';


function App() {
  const [name, setName] = React.useState("진희");
  
  React.useEffect(() => {
    console.log(db);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main name={name}/>}/>
        <Route path="/review/:week" element={<Review />}/>
      </Routes>

     
    </div>
  );
}



export default App;
