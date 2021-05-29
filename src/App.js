import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Interests from './Components/Interests';
import Portfolio from './Components/Portfolio';

function App() {
  const [data,setData]=useState([]);
  const getData=() => {
    fetch('./resumeData.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(myData) {
        setData(myData);
      });
  }
  
  useEffect(() => {
    getData()
  },[])

  ReactGA.initialize('U-148397600-1');
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <div>
      <Header data={data.main}/>
      <About data={data.main}/>
      <Resume data={data.resume}/>
      <Portfolio data={data.portfolio}/>
      <Interests data={data.interests}/>
      <Contact data={data.main}/>
      <Footer data={data.main}/>
    </div>
  );
}

export default App;
