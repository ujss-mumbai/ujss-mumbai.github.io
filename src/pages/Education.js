import React from 'react';
import educationImage from '../assets/images/services/education.jpg';
import './../assets/css/Common.css';

const Education = () => {
  return (
    <div className='container page-container'>
      <div className="content-text-fluid">
        <div style={{ flex: 1 }}>
          <h2 className='page-title'>Education Support by UJSS</h2>
          <p>
            <strong>Utkal Jagruti Seva Sangh (UJSS)</strong> believes that education is the foundation of a better future. To ensure that no deserving student is left behind due to financial hardship, we provide financial assistance to economically challenged students for their school, college, or vocational education.
          </p>
          <p>
            By supporting their academic journey, we aim to empower young minds and help them break the cycle of poverty. Your support can help nurture the next generation of leaders, professionals, and changemakers.
          </p>
          <p>
            In addition to financial support, UJSS also organizes online Odia education classes every Sunday, enabling students from across the globe to connect with their roots and strengthen their language skills. This initiative has seen active participation from students worldwide, fostering cultural learning and community bonding beyond borders.
          </p>
          <p>
            Education is not just a gift—it’s an investment in humanity’s future. Join us in shaping lives through learning.
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <img src={educationImage} alt="Education" style={{ width: '100%', borderRadius: '8px' }} />
        </div>
      </div>
    </div>
  );
};

export default Education;
