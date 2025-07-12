import React from 'react';
import '../assets/css/Email.css';

const Email = () => {
  return (
    <div className="email-page-container">
      {/* Left Sidebar with steps */}
      <div className="left-sidebar">
        <h2>PUBLIC PROFILE SHARE - #1222</h2>
        <div className="step active">
          <div className="step-circle active">1</div>
          <a href="#" className="step-text active">Public Profile Shared</a>
        </div>
        <div className="step inactive">
          <div className="step-circle">2</div>
          <span className="step-text">Follow Up 1 Sent</span>
        </div>
        <div className="step inactive">
          <div className="step-circle">3</div>
          <span className="step-text">Appointment Scheduled?</span>
        </div>
        <div className="step inactive">
          <div className="step-circle">4</div>
          <span className="step-text">Feedback Email to Clinician</span>
        </div>
      </div>

      {/* Right Content */}
      <div className="right-content">
        {/* Email Info */}
        <div className="email-info">
          <div>
            <strong>TO:</strong>
            <span>mailtobrijesh2003@gmail.com</span>
          </div>
          <div>
            <strong>SENDER:</strong>
            <span>Brijesh Sajeev</span>
          </div>
          <div>
            <strong>COMPANY</strong>
            <span>Referralgps</span>
          </div>
          <div>
            <strong>LANGUAGE:</strong>
            <span>en</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div>
          <strong>SHARED VIA EMAIL:</strong>
          <div className="progress-bar" style={{marginTop: '8px'}}>
            <div className="progress-step completed">
              <span className="checkmark"></span>
              Email Sent
            </div>
            <div className="progress-step">
              Email Opened
            </div>
            <div className="progress-step">
              Email Clicked
            </div>
          </div>
        </div>

        {/* Message Box */}
        <div style={{marginTop: '20px'}}>
          <strong>MESSAGE:</strong>
          <div className="message-box" style={{marginTop: '8px'}}>
            Hello Brijesh Sajeev,{"\n\n"}
            Hello man, I have shared few provider profiles that could be usefull for you{"\n\n"}
            Please see the recommended treatment professional(s) below who may fit your needs. Click the link(s) for details and contact information.{"\n\n"}
            <ul>
              <li><a href="#">A Restored Outlook LLC, Clinical Social Work/Therapist</a></li>
              <li><a href="#">A Better Mind A Better Me, LLC, Clinical Social Work/Therapist, A Better Mind A Better Me LLC</a></li>
              <li><a href="#">A Better Tomorrow Counseling Services, LLC, Clinical Social Work/Therapist, A Better Tomorrow Counseling Services, LLC</a></li>
            </ul>
            The information shared is to the best of our knowledge, please contact the provider to verify eligibility.{"\n\n"}
            Warm Regards,{"\n"}
            Gajendra Jena
          </div>
        </div>

        {/* Resend Email Link */}
        <div className="resend-link" style={{marginTop: 'auto'}}>
          resend email?
        </div>
      </div>
    </div>
  );
};

export default Email;
