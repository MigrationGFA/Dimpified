import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AffiliateIntegration = () => {
  const [isReferralCandyActive, setReferralCandyActive] = useState(false);

  const handleCheckboxChange = () => {
    setReferralCandyActive(!isReferralCandyActive);
  };

  return (
    <div className="container mt-5">
      <h2>Affiliates</h2>
      <p>Integrate affiliate marketing via ReferralCandy or Refersion to boost product promotion.</p>
      <button className="btn btn-success mb-3">Save</button>

      <div className="row border">
        {/* Left side with gray background */}
        <div className="col-md-8 p-4" style={{ backgroundColor: '#f5f5f5' }}>
          <h4>ReferralCandy</h4>
          <p>
            ReferralCandy is an ecommerce store plugin that helps you get more word of mouth sales.
            Sign up for an account via LearnWorlds <a href="#">here</a> and get $50 worth of credits (1+1 months free).
          </p>
          <img
            src="https://via.placeholder.com/150"
            alt="ReferralCandy"
            className="img-fluid"
          />
        </div>

        {/* Right side with white background */}
        <div className="col-md-4 p-4" style={{ backgroundColor: '#fff' }}>
          <div className="form-check text-end">
            <input
              className="form-check-input"
              type="checkbox"
              checked={isReferralCandyActive}
              onChange={handleCheckboxChange}
              id="activateReferralCandy"
            />
            <label className="form-check-label ms-2" htmlFor="activateReferralCandy">
              Activate
            </label>
          </div>

          {isReferralCandyActive && (
            <div className="mt-4">
              <div className="mb-3">
                <label htmlFor="appId" className="form-label">App ID</label>
                <input type="text" className="form-control" id="appId" placeholder="App ID" />
              </div>
              <div>
                <label htmlFor="secretKey" className="form-label">Secret Key</label>
                <input type="text" className="form-control" id="secretKey" placeholder="Secret Key" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AffiliateIntegration;
