import React from 'react';
import './../assets/css/Events.css';


// Import images from assets/images/events
import event1 from '../assets/images/events/shradha1.jpg';
import event2 from '../assets/images/events/shradha2.jpg';
import event3 from '../assets/images/events/shradha3.jpg';
import event4 from '../assets/images/events/shradha4.jpg';
import event5 from '../assets/images/events/shradha5.jpg';
import event6 from '../assets/images/events/shradha6.jpg';
import event7 from '../assets/images/events/shradha7.jpg';
import event8 from '../assets/images/events/shradha8.jpg';
import event9 from '../assets/images/events/shradha9.jpg';
import event10 from '../assets/images/events/shradha10.jpg';
import event11 from '../assets/images/events/shradha11.jpg';

const Events = () => {
  return (
    <div className="container">
      <p className="description">
        <strong>UJSS: Serving with Heart, Impacting Lives</strong>
        <p>
          Explore glimpses of the selfless service activities carried out by Utkal Jagruti Seva Sangh across Mumbai and beyond.
          Each image captures a moment of compassion, unity, and unwavering commitment to uplift those in need.
        </p><p>
          From organizing blood donation drives and cancer patient support to disaster relief and cow protection, our volunteers stand at the forefront of every cause. These snapshots reflect the essence of true seva—where helping others is not an act of charity, but a way of life.
        </p><p>
          Join us in this journey of service, and become part of a growing movement dedicated to bringing light to the lives of the underserved.
        </p><p>
          Together, we don’t just serve — we create lasting change.
        </p></p>
      <div className="image-gallery">
        <img src={event2} alt="Event 2" />
        <img src={event3} alt="Event 3" />
        <img src={event6} alt="Event 3" />

        <img src={event4} alt="Event 3" />
        <img src={event5} alt="Event 3" />
        <img src={event1} alt="Event 1" />

        <span>
          <img src={event7} alt="Event 3" />
          <img src={event8} alt="Event 3" />
          <img src={event9} alt="Event 3" />
        </span>
        <img src={event10} alt="Event 3" />
        <img src={event11} alt="Event 3" />

      </div>
    </div>
  );
};

export default Events;
