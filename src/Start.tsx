import React from 'react';
import { useNavigate} from "react-router-dom";


const Start = () => {
  const navigate = useNavigate();
  const redirectURL = ()=>{
    window.location.href= "https://arieotech.com/";
  }
return(
    <section id="hero" className="d-flex align-items-center">

    <div className="container">
      <div className="row">
        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
          <h1>Sell NFTs</h1>
          <h2>Be a part of the Crypto World</h2>
          <div className="mt-2">
               <button  className="btn btn-primary mr-3" onClick={ () => navigate('/nft') }>Explore</button> &nbsp;
               <button  className="btn btn-primary" onClick={redirectURL}>Create</button>
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 hero-img">
          <img src= {require("./img/arieotech-dark.png")} className="img-fluid" alt=""/>
        </div>
      </div>
    </div>

  </section>
);
};

export default Start;