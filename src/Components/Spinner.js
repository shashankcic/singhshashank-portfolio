import React from 'react';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function Spinner() {
	return (
		<div style={{
									position: 'absolute', left: '50%', top: '50%',
        					transform: 'translate(-50%, -50%)'
								}}>
		  <Loader
		    type="Oval"
		    color="#00BFFF"
		    height={200}
		    width={200}
		  />
		  <h1 style={{fontFamily: "Josefin Sans", textAlign: "center", color: "#00BFFF"}}>Loading</h1>
	  </div>
	);
}

export default Spinner;
