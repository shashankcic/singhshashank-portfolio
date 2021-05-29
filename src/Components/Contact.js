import React, { useState } from 'react';
import { 
  Timeline,
  Follow,
  Mention
} from 'react-twitter-widgets';

function Contact ({data}) {
  if(data){
      var name = data.name;
      var street = data.address.street;
      var city = data.address.city;
      var state = data.address.state;
      var zip = data.address.zip;
      var phone= data.phone;
      var message = data.contactmessage;
    }

    const onSubmit = async (event, setSubmitText) => {
      event.preventDefault();
      const formElements = [...event.currentTarget.elements];
      const isValid =
        formElements.filter((elem) => elem.name === "bot-field")[0].value === "";

      const validFormElements = isValid ? formElements : [];

      if (validFormElements.length < 1) {
        // or some other cheeky error message
        setSubmitText("It looks like you filled out too many fields!");
      } else {
        const filledOutElements = validFormElements
          .filter((elem) => !!elem.value)
          .map(
            (element) =>
              encodeURIComponent(element.name) +
              "=" +
              encodeURIComponent(element.value)
          )
          .join("&");

        await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: filledOutElements,
        })
          .then(() => {
            setSubmitText("Thanks for your feedback, your message has been sent successfully!");
          })
          .catch((_) => {
            setSubmitText(
              "There was an error with your submission, please email me using the address above."
            );
          });
      }
    };

    const [submitText, setSubmitText] = useState(null);



    return (
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1><span>Get In Touch.</span></h1>
          </div>
          <div className="ten columns">
            <p className="lead">{message}</p>
          </div>
        </div>

        <div className="row">
          <div className="eight columns">

            <form className="email-form" method="POST" id="contactForm1" name="contactForm1" data-netlify="true" onSubmit={e => onSubmit(e, setSubmitText)}>
              <input type="hidden" name="form-name" value="contactForm1" />
              <p style={{ display: "none" }}>
                <label>
                  Don’t fill this out if you expect to hear from us!
                  <input name="bot-field" value="" readOnly />
                </label>
              </p>
              <div>
                <label htmlFor="contactName">Name <span className="required">*</span></label>
                <input type="text" placeholder="Enter Name" required size="35" id="contactName" name="contactName" />
              </div>
              <div>
                <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                <input type="email" placeholder="Enter Email" required size="35" id="contactEmail" name="contactEmail" />
              </div>
              <div>
                <label htmlFor="contactSubject">Subject <span className="required">*</span></label>
                <input type="text" placeholder="Enter Subject" required size="35" id="contactSubject" name="contactSubject" />
              </div>
              <div>
                <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                <textarea cols="50" rows="15" placeholder="Enter Message" id="contactMessage" required name="contactMessage"></textarea>
              </div>
              <div>
                <button type="submit" className="submit">Submit</button>     
              </div>
            </form>
            {submitText && alert(submitText)}
          
        </div>
            
        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Address and Phone</h4>
            <p className="address">
               {name}<br />
               {street} <br />
               {city}, {state} {zip}<br />
               <span>{phone}</span>
            </p>
          </div>
          <div className="widget widget_tweets">
            <h4 className="widget-title">Latest Tweets</h4>
            <Timeline
              dataSource={{
                sourceType: 'profile',
                screenName: 'shashhaank'
              }}
              options={{
                height: '400',
                theme: 'dark'
              }}
            />
            {/*<Share 
              url={'https://singhshashank.com'}
              options={{ text: 'Check out this portfolio', via: 'shashhaank' }}
            />*/}
            <Follow username={'shashhaank'} />
            <Mention username={'shashhaank'} />
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Contact;
