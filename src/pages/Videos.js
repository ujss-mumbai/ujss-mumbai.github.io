import React from 'react';
import './../assets/css/Common.css';

const videoLinks = [
  'https://www.youtube.com/embed/O0MfEm-4pBM',
  'https://www.youtube.com/embed/hEJl0AK3nJ0?si=-kba8Mi1pqVZXL5-',
  'https://www.youtube.com/embed/RmeonbxqiNw?si=aM8Fq1hOB4bKbJL5',
  'https://www.youtube.com/embed/axsBHPPV7PE?si=a8ftWcDA9auQpxMw',
  'https://www.youtube.com/embed/fOXRy9N9fEU?si=hu_Dqc-EaLl-4fMb',
  'https://www.youtube.com/embed/xQ7o6BiEFOk?si=25aNg0gAui5JuMp0',
  'https://www.youtube.com/embed/bMXguz58nPE?si=60Ce4J8gMUlDs6h0',
  'https://www.youtube.com/embed/CNegq7PMkLs?si=8LfKNsNgfmbsoxci',
  'https://www.youtube.com/embed/0Bl83PwWv54?si=xNgTKYMOXFHz1zg_',
];

const Videos = () => {
  return (
    <div className='contanier'>
      <h2>Videos</h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center',
        }}
      >
        {videoLinks.map((link, index) => (
          <div
            key={index}
            style={{
              flex: '1 1 300px',
              maxWidth: '320px',
              aspectRatio: '16 / 9',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src={link}
              title={`YouTube video player ${index}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: '8px' }}
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
