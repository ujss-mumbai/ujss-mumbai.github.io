import React from 'react';
import educationImage from '../assets/images/services/gramvikash.jpg';
import './../assets/css/Common.css';

const GramVikash = () => {
  return (
    <div className='container page-container'>
      <div className="content-text-fluid">
        <div style={{ flex: 1 }}>
          <h2 className='page-title'>Gram Vikash by UJSS</h2>
          <p>
            At <strong>Utkal Jagruti Seva Sangh (UJSS)</strong>, we believe that true progress lies in uplifting our villages. We encourage people living in Mumbai, especially <em>Pravasi Odias</em>, to stay connected with their roots and support the development of their native villages.
          </p>
          <p>
            Through awareness, resources, and collective efforts, we aim to improve education, health, livelihood, and infrastructure in rural areas. Whether it’s mentoring youth, sponsoring education, or aiding farmers—we invite everyone to play a role in rural transformation.
          </p>
          <p>
            Let’s bridge the gap between urban and rural lives and grow together with purpose and pride.
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <img src={educationImage} alt="Education" style={{ width: '100%', borderRadius: '8px' }} />
        </div>
      </div>
    </div>
  );
};

export default GramVikash;
