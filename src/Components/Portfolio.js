import React, { useEffect } from 'react';
import '../App.css';

function Portfolio ({data}) {
  if(data){
    var projects = data.projects.map(function(projects){
      var projectImage = process.env.PUBLIC_URL + '/images/portfolio/'+projects.image;
      return <div key={projects.title} className="columns portfolio-item">
         <div className="item-wrap">
          <a href={projects.url} title={projects.title}>
             <img alt={projects.title} src={projectImage} />
             <div className="overlay">
                <div className="portfolio-item-meta">
               <h5>{projects.title}</h5>
                   <p>{projects.category}</p>
                </div>
              </div>
            <div className="link-icon"><i className="fa fa-link"></i></div>
          </a>
        </div>
      </div>
    })
  }

  useEffect(() => {
    window.MediumWidget.Init({
      renderTo: '#medium-widget', 
      params: {
        "resource":"https://medium.com/@singhshashank",
        "postsPerLine":1,
        "limit":4,
        "picture":"small",
        "fields":[
          "description",
          "author",
          "claps",
          "publishAt"
        ],
        "ratio":"landscape"
      }
    });
    return () => {
      window.MediumWidget.unmount();
    };
  }, [])

  return (
    <section id="portfolio">
      <div className="row">
       <div className="twelve columns collapsed">
          <h1>Check Out Some of My Work</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {projects}
          </div>
        </div>
        <div id="medium-widget"></div>
      </div>

    </section>
  );
}

export default Portfolio;
