import React from "react";
import hero from '../images/humaaans-removebg-preview.png';
import actpic1 from '../images/afro-girl-removebg-preview.png';
import actpic2 from '../images/callcenter-png-removebg-preview.png';


function Home() {
  return (
    <div className="container">
      <header className="headerSec">
        <div className="headSec1">
          <h1>Welcome to the site</h1>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
            ipsa sequi voluptates libero reiciendis nesciunt!
          </h4>
         <button className='signBtn'>Sign In</button>
        </div>
        <div className="headSec2">
        <img className="headSec2Img" src={hero} width="600" alt="humman"/>
        </div>
      </header>
      <section className="quoteSec">
        <h4>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
          beatae cupiditate omnis, debitis aliquam explicabo necessitatibus quos
          magnam dicta minima voluptates libero esse eos molestiae nulla
          eligendi impedit quod error?
        </h4>
      </section>
      <section className="actionSec">
        <div className="actSecs">
        <img className="actSecsImg1" src={actpic1} width="200" alt="humman"/>
          <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis nisi, sint, facilis a vero aliquam alias optio iure voluptatem pariatur in sequi fugiat commodi dolor rerum illo impedit repellendus hic.</h5>
          <button className='signBtn'>Try Now</button>
        </div>
        <div className="actSecs">
        <img className="actSecsImg1" src={actpic2} width="200" alt="humman"/>
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi beatae eius nam veniam! Doloremque, pariatur?</h5>
          <button className='signBtn'>More Here</button>
        </div>
      </section>
      <footer className="footerSec">
        <h2>Footer goes here</h2>
        <h1>footer</h1>
      </footer>
    </div>
  );
}

export default Home;
