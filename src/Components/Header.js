import React from 'react';
import '../App.css'
import SmoothScroll from './Scroll';

function Header ({data}){
  if(data){
    var name = data.name;
    var occupation= data.occupation;
    var description= data.description;
    var city= data.address.city;
    var networks= data.social.map(function(network){
      return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
    })
  }

  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
        <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
        <ul id="nav" className="nav">
          <li className="current"><a onClick={SmoothScroll} href="#home">Home</a></li>
          <li><a  onClick={SmoothScroll} href="#about">About</a></li>
          <li><a  onClick={SmoothScroll} href="#resume">Resume</a></li>
          <li><a  onClick={SmoothScroll} href="#portfolio">Works</a></li>
          <li><a  onClick={SmoothScroll} href="#interests">Interests</a></li>
          <li><a  onClick={SmoothScroll} href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline tracking-in-expand-fwd">I'm {name}.</h1>
          <h3>I'm a {city} based <span>{occupation}</span>. <br/>{description}.</h3>
          <hr />
          <ul className="social">
             {networks}
          </ul>
        </div>
      </div>
      <p className="scrolldown">
        <a  onClick={SmoothScroll} href="#about"><i className="icon-down-circle"></i></a>
      </p>
    </header>
  );
}

export default Header;
