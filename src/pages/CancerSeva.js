import React from 'react';
import educationImage from '../assets/images/services/cancer.jpeg';
import './../assets/css/Common.css';

const CancerSeva = () => {
  return (
    <div className='container page-container'>
      <div className="content-text-fluid">
        <div style={{ flex: 1 }}>
          <h2 className='page-title'>Cancer Seva by UJSS</h2>
          <p>
            <strong>Utkal Jagruti Seva Sangh (UJSS)</strong> is deeply committed to supporting cancer patients during their most difficult journey. Our volunteers regularly visit patients undergoing treatment at <strong>Tata Memorial Hospital</strong> and those staying at <strong>Shree Ashok Singhal Rugna Seva Sadan</strong>, <strong>Shraddha Foundation</strong>, and <strong>Nana Palkar Rugna Seva Sadan</strong> in Mumbai.
          </p>
          <p>
            We donate essential comfort items such as fruits, bedsheets, pillow covers, fans, buckets, and soaps—simple yet meaningful contributions that bring relief, dignity, and a touch of care to their daily lives.
          </p>
          <p>
            Each visit is an opportunity to offer emotional support and show that they are not alone in their fight. Join us in spreading hope and compassion—because even the smallest act of kindness can brighten someone’s battle against cancer.
          </p>

        </div>
        <div style={{ flex: 1 }}>
          <img src={educationImage} alt="Education" style={{ width: '100%', borderRadius: '8px' }} />
        </div>
      </div>
    </div>
  );
};

export default CancerSeva;
