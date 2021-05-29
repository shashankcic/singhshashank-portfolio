import React from 'react';

function Interests ({data}) {
  if(data){
    var interests = data.interests.map(function(interests){
      return  <li key={interests.interest}>
          <blockquote>
             <p>{interests.interest}</p>
          </blockquote>
       </li>
    })
  }

  return (
    <section id="interests">
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1><span>Interests</span></h1>
          </div>

          <div className="ten columns flex-container">
            <ul className="slides">
              {interests}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Interests;
