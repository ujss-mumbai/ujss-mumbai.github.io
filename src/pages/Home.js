import React from 'react';
import Slider from 'react-slick';
import './../assets/css/Home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import banner1 from './../assets/images/banner/1.jpg';
import banner2 from './../assets/images/banner/2.jpg';
import banner4 from './../assets/images/banner/4.jpg';
import banner3 from './../assets/images/banner/3.jpg';
import banner5 from './../assets/images/banner/5.jpg';
import banner6 from './../assets/images/banner/6.jpg';
import banner7 from './../assets/images/banner/7.jpg';

import omicon from './../assets/images/om.png';


import aboutImage from './../assets/images/odisha2.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="container">
      {/* Slider */}
      <Slider {...sliderSettings}>
        <div>
          <img src={banner4} alt="Slide 1" className="slider-image" />
        </div>
        <div>
          <img src={banner3} alt="Slide 2" className="slider-image" />
        </div>
        <div>
          <img src={banner1} alt="Slide 3" className="slider-image" />
        </div>
        <div>
          <img src={banner2} alt="Slide 4" className="slider-image" />
        </div>
        {/* <div>
          <img src={banner5} alt="Slide 5" className="slider-image" />
        </div> */}
        <div>
          <img src={banner6} alt="Slide 6" className="slider-image" />
        </div>
        <div>
          <img src={banner7} alt="Slide 7" className="slider-image" />
        </div>
      </Slider>

      {/* Mission, Vision, Function */}
      <h2 className="heading-center">
        सेवा परमोधर्मः
      </h2>
      <div className="flex-between-gap">
        <div className="flex-1-border-padding-center home-card">
          <div className="icon-om"><img src={omicon} /></div>
          <h3>MISSION</h3>
          <p className="flex-1-text-left">
            To serve the needy through compassionate and disciplined volunteerism.
            Provide support during crises—be it medical, financial, or natural disasters.
            Promote selfless service rooted in Indian cultural values.
            Collaborate with like-minded organizations for greater social impact.
            Uplift lives by addressing physical, mental, and spiritual needs.
          </p>
        </div>
        <div className="flex-1-border-padding-center home-card">
          <div className="icon-om"><img src={omicon} /></div>
          <h3>VISION</h3>
          <p className="flex-1-text-left">
            To build a caring and inclusive society inspired by Odia culture.
            Ensure timely help reaches people in their hour of need.
            Foster unity, compassion, and cultural pride among communities.
            Preserve and promote traditional values for future generations.
            Be a beacon of hope through dedicated and organized service.
          </p>
        </div>
        <div className="flex-1-border-padding-center home-card">
          <div className="icon-om"><img src={omicon} /></div>
          <h3>FUNCTION</h3>
          <p className="flex-1-text-left">
            Conduct rescue, relief, and rehabilitation operations during natural calamities.

            Organize blood donation drives, especially for cancer patients.

            Provide financial aid and support to economically disadvantaged individuals.

            Distribute food, clothing, and spiritual literature like the Bhagavad Gita.

            Promote and preserve the Odia language, traditions, and culture.

            Collaborate with like-minded organizations to expand the impact of seva (service).

            Protect and care for cows as part of traditional values.
          </p>
        </div>
      </div>

      {/* About Us */}
      <h2 className="about-us-heading">ABOUT US</h2>
      <div className="flex-gap-align-center">
        <div className="flex-1-text-left flex-1 about-text-wrap">
          <p>
            Utkal Jagruti Seva Sangh (UJSS), founded in Mumbai by a group of dedicated Pravasi Odias, is a voluntary organization committed to the service of the underprivileged. Drawing strength from a network of selfless volunteers (swayamsevaks), UJSS has been at the forefront of humanitarian efforts, be it during natural disasters, medical emergencies, or cultural preservation missions.
          </p><p>
            With a legacy of turning challenges into opportunities, UJSS works across multiple dimensions—relief, rehabilitation, spiritual outreach, and social welfare—to bring hope to the helpless. The Sangh also emphasizes cultural revival by fostering Odia values and traditions, contributing to national development through its grassroots efforts.
          </p><p>
            Anyone with a spirit of service can join or benefit from this noble endeavor.
          </p>
          <button className="button-read-more" onClick={() => navigate('/about')}>
            Read More..
          </button>
        </div>
        <div className="flex-1 about-image-wrap">
          <img src={aboutImage} alt="About Us" className="about-image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
