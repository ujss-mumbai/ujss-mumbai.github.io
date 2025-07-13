import React from 'react';
import educationImage1 from '../assets/images/services/blood-donation1.jpg';
import educationImage2 from '../assets/images/services/blood-donation2.jpg';
import educationImage3 from '../assets/images/services/blood-donation3.jpg';
import educationImage4 from '../assets/images/services/blood-donation4.jpg';
import './../assets/css/Common.css';

const BloodDonation = () => {
    return (
        <div className='container page-container'>
            <div className="content-text-fluid top">
                <div style={{ flex: 1 }}>
                    <h2 className='page-title'>UJSS Blood Donation Drive</h2>
                    <p>
                        <strong>Utkal Jagruti Seva Sangh (UJSS)</strong> organizes blood donation camps regularly, typically once or twice a year, with a primary focus on supporting cancer patients. These camps are conducted in partnership with <strong>Tata Memorial Hospital</strong>, one of India’s leading cancer care institutions.
                    </p>
                    <p>
                        In addition to whole blood, our dedicated volunteers also donate platelets—an essential lifeline for patients undergoing chemotherapy and other intensive treatments. Through these selfless contributions, we bring hope and healing to those in need.
                    </p>
                    <p>
                        Every unit of blood or platelets donated can save a life, and every volunteer becomes part of a greater cause. Join our mission to serve humanity, stand by cancer warriors, and make a lasting impact through the gift of life.
                    </p>
                    <div className="image-gallery grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                        <img src={educationImage1} alt="blood donation" className="w-full h-auto rounded-xl shadow" />
                        {/* <img src={educationImage2} alt="blood donation" className="w-full h-auto rounded-xl shadow" /> */}
                        <img src={educationImage3} alt="blood donation" className="w-full h-auto rounded-xl shadow" />
                        <img src={educationImage4} alt="blood donation" className="w-full h-auto rounded-xl shadow" />
                    </div>

                </div>
                <div style={{ flex: 1 }}>
                    {/* <img src={educationImage} alt="Education" style={{ width: '100%', borderRadius: '8px' }} /> */}
                    <h3>📝 Register to Donate</h3>
                    <p>Fill out the form below to register as a volunteer donor. Our team will contact you before the next blood donation camp.</p>

                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfnFkRLrIIePnXyMEBfZ9r8LOqcX06RGU26SkkNZQ-8qiQ6ZA/viewform?embedded=true" width="100%" height="900" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </div>
            </div>
        </div>
    );
};

export default BloodDonation;
