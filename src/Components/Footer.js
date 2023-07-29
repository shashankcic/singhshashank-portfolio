import React from 'react';
import SmoothScroll from './Scroll';

function Footer({data}) {
  if(data){
    var networks= data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul>

           <ul className="copyright">
              <li>&copy; Copyright 2021 Shashank Singh</li>
           </ul>

        </div>
        <div id="go-top"><a onClick={SmoothScroll} title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }

export default Footer;
