// import node module libraries
import React, { useState } from "react";

import { useEffect } from "react";

const useResponsiveNavbar = () => {
  useEffect(() => {
    const handleResize = () => {
      const navbarItems = document.querySelectorAll(".navbar-nav li a");
      navbarItems.forEach((item) => {
        item.removeEventListener("click", handleDropdownToggle);
      });

      if (window.innerWidth < 991) {
        navbarItems.forEach((item) => {
          item.addEventListener("click", handleDropdownToggle);
        });
      }
    };

    const handleDropdownToggle = (event) => {
      const parentLi = event.currentTarget.parentElement;
      const dropdownMenu = parentLi.querySelector(".dropdown-menu");
      const icon = event.currentTarget.querySelector("i");
      if (dropdownMenu) {
        dropdownMenu.classList.toggle("show");
        icon.classList.toggle("fa-angle-up");
        icon.classList.toggle("fa-angle-down");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
};

const FormTemplate = () => {
  useResponsiveNavbar();

  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };
  const [activePanel, setActivePanel] = useState(null);

  const togglePanel = (panel) => {
    setActivePanel(activePanel === panel ? null : panel);
  };
  return (
    <div>
      <style>
        {`
        
        body {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }
       
          
          p {
            font-size: 12px;
          }
          
          h2 {
            font-weight: 600;
          }
          .middle {
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            top: 1rem;
            margin-bottom: 2rem;
          }
          
          .thin {
            font-family: Outfit;
            font-weight: 100;
          }
          
          select option {
            font-family: outfit;
            font-weight: 200;
          }
          
          .container {
            min-height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f1f1f1;
          }
          .container .card {
            height: 1080px;
            width: 100%;
            background-color: #f1f1f1;
            position: relative;
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
            font-family: "Outfit", sans-serif;
            border-radius: 0px;
          }
          .container .card .form {
            width: 100%;
            height: 100%;
          
            display: flex;
          }
          .container .card .left-side {
            width: 25%;
            background-color: #012169;
            height: 100%;
            border-top-right-radius: 30px;
            text-align: left
          
            padding: 20px 30px;
            box-sizing: border-box;
            position: fixed;
          }
          .inner {
            margin: 2rem 6rem;
            background-color: rgb(255, 255, 255);
            border-radius: 10px;
          }
          /*left-side-start*/
          .left-heading {
            color: #fff;
            text-align: left
          }
          .steps-content {
            margin-top: 30px;
            color: #fff;
          }
          .steps-content p {
            font-size: 12px;
            margin-top: 15px;
          }
          .progress-bar {
            list-style: none;
            /*color:#fff;*/
            margin-top: 30px;
            font-size: 13px;
            font-weight: 700;
            counter-reset: container 0;
            text-align: left
          }
          .progress-bar li {
            position: relative;
            margin-left: 40px;
            margin-top: 50px;
            counter-increment: container 1;
            color: #f0f1f2;
          }
          .progress-bar li::before {
            content: counter(container);
            line-height: 25px;
            text-align: center;
            position: absolute;
            height: 25px;
            width: 25px;
            border: 1px solid #4f6581;
            border-radius: 50%;
            left: -40px;
            top: -5px;
            z-index: 10;
            background-color: #012169;
          }
          
          .progress-bar li::after {
            content: "";
            position: absolute;
            height: 90px;
            width: 2px;
            background-color: #4f6581;
            z-index: 1;
            left: -27px;
            top: -70px;
          }
          
          .progress-bar li.active::after {
            background-color: #fff;
          }
          
          .progress-bar li:first-child:after {
            display: none;
          }
          
          
          .progress-bar li.active::before {
            color: #fff;
            border: 1px solid #fff;
          }
          .progress-bar li.active {
            color: #fff;
          }
          .d-none {
            display: none;
          }
          
          
          .container .card .right-side {
            width: 75%;
            margin-left: 25rem;
            background-color: #f1f1f1;
            height: 100%;
          
            border-radius: 0px;
          }
          
          .main {
            display: none;
          }
          .active {
            display: block;
          }
          .main {
            padding: 20px 40px;
          }
          .main small {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 2px;
            height: 30px;
            width: 30px;
            background-color: #ccc;
            border-radius: 50%;
            color: yellow;
            font-size: 19px;
          }
          .text {
            margin-top: 10px;
            text-align: center;
          }
          .congrats {
            text-align: center;
          }
          .text p {
            margin-top: 10px;
            font-size: 16px;
            font-weight: 500;
            color: #cbced4;
            text-align: center;
          }
          .input-text {
            margin: 30px 0;
            display: flex;
            gap: 20px;
          }
          
          .input-text .input-div {
            width: 100%;
            position: relative;
          }
          .input-text .input-div flex {
            width: 40%;
            position: relative;
          }
          input[type="text"] {
            width: 100%;
            height: 40px;
            border: none;
            outline: 0;
            border-radius: 5px;
            border: 1px solid #cbced4;
            gap: 20px;
            box-sizing: border-box;
            padding: 0px 10px;
          }
          input[type="date"] {
            width: 100%;
            height: 40px;
            border: none;
            outline: 0;
            border-radius: 5px;
            border: 1px solid #cbced4;
            gap: 20px;
            box-sizing: border-box;
            padding: 0px 10px;
          }
          input[type="email"] {
            width: 100%;
            height: 40px;
            border: none;
            outline: 0;
            border-radius: 5px;
            border: 1px solid #cbced4;
            gap: 20px;
            box-sizing: border-box;
            padding: 0px 10px;
          }
          input[type="number"] {
            width: 100%;
            height: 40px;
            border: none;
            outline: 0;
            border-radius: 5px;
            border: 1px solid #cbced4;
            gap: 20px;
            box-sizing: border-box;
            padding: 0px 10px;
          }
          input[type="tel"] {
            width: 100%;
            height: 40px;
            border: none;
            outline: 0;
            border-radius: 5px;
            border: 1px solid #cbced4;
            gap: 20px;
            box-sizing: border-box;
            padding: 0px 10px;
          }
          textarea {
            width: 100%;
            height: 40px;
            border: none;
            outline: 0;
            border-radius: 5px;
            border: 1px solid #cbced4;
            gap: 20px;
            box-sizing: border-box;
            padding: 0px 10px;
          }
          select {
            width: 100%;
            height: 40px;
            border: none;
            outline: 0;
            border-radius: 5px;
            border: 1px solid #cbced4;
            gap: 20px;
            box-sizing: border-box;
            padding: 0px 10px;
          }
          .input-text .input-div span {
            position: absolute;
            top: 10px;
            left: 10px;
            font-size: 14px;
            transition: all 0.5s;
          }
          .input-div input:focus ~ span,
          .input-div input:valid ~ span {
            top: -15px;
            left: 6px;
            font-size: 10px;
            font-weight: 600;
          }
          
          .input-div span {
            top: -15px;
            left: 6px;
            font-size: 10px;
          }
          .buttons button {
            height: 40px;
            width: 100px;
            border: none;
            border-radius: 5px;
            background-color: #012169;
            font-size: 12px;
            color: #fff;
            cursor: pointer;
          }
          .button_space {
            display: flex;
            gap: 20px;
          }
          .button_space button:nth-child(1) {
            background-color: #fff;
            color: #000;
            border: 1px solid#000;
          }
          .user_card {
            margin-top: 20px;
            margin-bottom: 40px;
            height: 200px;
            width: 100%;
            border: 1px solid #c7d3d9;
            border-radius: 10px;
            display: flex;
            overflow: hidden;
            position: relative;
            box-sizing: border-box;
          }
          .user_card span {
            height: 80px;
            width: 100%;
            background-color: #dfeeff;
          }
          .circle {
            position: absolute;
            top: 40px;
            left: 60px;
          }
          .circle span {
            height: 70px;
            width: 70px;
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 2px solid #fff;
            border-radius: 50%;
          }
          .circle span img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
          }
          .social {
            display: flex;
            position: absolute;
            top: 100px;
            right: 10px;
          }
          .social span {
            height: 30px;
            width: 30px;
            border-radius: 7px;
            background-color: #fff;
            border: 1px solid #cbd6dc;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 10px;
            color: #cbd6dc;
          }
          .social span i {
            cursor: pointer;
          }
          .heart {
            color: red !important;
          }
          .share {
            color: red !important;
          }
          .user_name {
            position: absolute;
            top: 110px;
            margin: 10px;
            padding: 0 30px;
            display: flex;
            flex-direction: column;
            width: 100%;
          }
          .user_name h3 {
            color: #4c5b68;
          }
          .detail {
            /*margin-top:10px;*/
            display: flex;
            justify-content: space-between;
            margin-right: 50px;
          }
          .detail p {
            font-size: 12px;
            font-weight: 700;
          }
          .detail p a {
            text-decoration: none;
            color: blue;
          }
          
          .checkmark__circle {
            stroke-dasharray: 166;
            stroke-dashoffset: 166;
            stroke-width: 2;
            stroke-miterlimit: 10;
            stroke: #7ac142;
            fill: none;
            animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
          }
          
          .checkmark {
            width: 56px;
            height: 56px;
            border-radius: 50%;
            display: block;
            stroke-width: 2;
            stroke: #fff;
            stroke-miterlimit: 10;
            margin: 10% auto;
            box-shadow: inset 0px 0px 0px #7ac142;
            animation: fill 0.4s ease-in-out 0.4s forwards,
              scale 0.3s ease-in-out 0.9s both;
          }
          
          .checkmark__check {
            transform-origin: 50% 50%;
            stroke-dasharray: 48;
            stroke-dashoffset: 48;
            animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
          }
          
          @keyframes stroke {
            100% {
              stroke-dashoffset: 0;
            }
          }
          @keyframes scale {
            0%,
            100% {
              transform: none;
            }
            50% {
              transform: scale3d(1.1, 1.1, 1);
            }
          }
          @keyframes fill {
            100% {
              box-shadow: inset 0px 0px 0px 30px #7ac142;
            }
          }
          
          .warning {
            border: 1px solid red !important;
          }
          
          /*right-side-end*/
          @media (max-width: 750px) {
            .container {
              height: scroll;
            }
            .inner {
              margin: 1rem 0rem;
              background-color: rgb(255, 255, 255);
              border-radius: 10px;
            }
            .container .card {
              max-width: 350px;
              height: auto !important;
              margin: 30px 0;
            }
            .container .card .right-side {
              width: 100%;
            }
            .input-text {
              display: block;
            }
          
            .input-text .input-div {
              margin-top: 20px;
            }
          
            .container .card .left-side {
              display: none;
            }
          }
           `}
      </style>
      <style>
        {`
 
 /*==========================
 tab rotate 
 ===========================*/
 /* @media (min-width: 992px) and (max-width: 1400px) {
   .header ul.navbar-nav > li > a {
     padding: 0 10px;
     font-size: 13px;
   }
 
   .container .card .right-side {
     background-color: #f1f1f1;
     height: 100%;
     width: 100%;
     margin-left: 0px;
     border-radius: 0px;
   }
   .container .card .left-side {
     
     display: none;
   }
   
 } */
 
 /*==========================
 tab device 
 ===========================*/
 @media (min-width: 768px) and (max-width: 991px) {
   .dropdown-menu.show {
     display: block;
   }
   .container .card .right-side {
     background-color: #f1f1f1;
     height: 100%;
     width: 100%;
     margin-left: 0px;
     border-radius: 0px;
   }
   .container .card .left-side {
     
     display: none;
   }
   .otp {
     padding: 0 4rem;
   }
   
 }
   
 
 /*==========================
 small device /mobile sm and large
 ===========================*/
 @media (max-width: 767px) {
  
   .container .card .right-side {
     background-color: #f1f1f1;
     height: 100%;
     width: 100%;
     margin-left: 0px;
     border-radius: 0px;
   }
   .container .card .left-side {
     
     display: none;
   }
   .input-text .input-div .otp {
     width: 16.67%;
     position: relative;
   }
   
 }
 

        `}
      </style>
      <body>
        <form id="businessOwnerForm">
          <div className="container">
            <div className="card">
              <div className="form">
                <div className="left-side">
                  <div className="steps-content">
                    <h3>
                      Step <span className="step-number">1</span>
                    </h3>
                  </div>
                  <ul className="progress-bar">
                    <li className="active">
                      Your Basic Details
                      <p className="thin">Provide your basic information</p>
                    </li>
                    <li>
                      Your Business Details
                      <p className="thin">
                        Provide more details about your business
                      </p>
                    </li>
                    <li>
                      Your Personal Details
                      <p className="thin">Provide more information about you</p>
                    </li>
                    <li>
                      Bio-Data
                      <p className="thin">Validate/ Provide your details</p>
                    </li>
                  </ul>
                </div>
                <div className="right-side">
                  <img
                    alt=""
                    src="assets/images/gfa+uk-removebg-preview.png"
                    style={{
                      left: "50%",
                      position: "relative",
                      top: "1rem",
                      transform: "translateX(-50%)",
                      width: "400px",
                    }}
                  />
                  <div className="inner">
                    <div className="main active">
                      <div
                        className="text"
                        style={{
                          textAlign: "left",
                        }}
                      >
                        <a
                          href="../index.html"
                          style={{
                            color: "#8d092f",
                            textDecoration: "solid underline",
                          }}
                        >
                          ← Go back
                        </a>
                      </div>
                      <div className="text">
                        <h2>Your Basic Details</h2>
                        <p>Kindly provide the details below.</p>
                        <span
                          className="input-group-text"
                          id="errorUser"
                          style={{
                            color: "red",
                            display: "none",
                          }}
                        />
                      </div>
                      <div className="input-text">
                        <div className="input-div mb-1">
                          <label className="form-label" htmlFor="email-id-icon">
                            You are an:
                          </label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text" />
                            <select className="form-select" name="category">
                              <option selected value="">
                                Business Owner
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="input-text">
                        <div className="input-div mb-1">
                          <label className="form-label" htmlFor="email-id-icon">
                            What is the current stage of your business?
                          </label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text" />
                            <select
                              className="form-select"
                              id="level"
                              name="business_stage"
                              onchange="toggleSTAGE(this);"
                              required
                            >
                              <option value="">- Select -</option>
                              <option value="Development">Development</option>
                              <option value="Growth">Growth</option>
                              <option value="Funding">Funding</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="imput-text mb-1">
                        <label className="form-label" htmlFor="email-id-icon">
                          What growth stage skills are you interested in
                          acquiring?
                        </label>
                        <div className="input-div input-group-merge">
                          <select
                            className="form-select select-stage"
                            id="stage"
                            name="growth_skill"
                            required
                          >
                            <option selected value="">
                              --Select--
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="input-text">
                        <div className="input-div mb-1">
                          <label
                            className="form-label"
                            htmlFor="contact-info-icon"
                          >
                            Telephone/WhatsApp number
                          </label>
                          <div className="input-group input-group-merge">
                            <input
                              className="form-control"
                              id="phoneInput"
                              name="phone"
                              placeholder="Mobile"
                              required
                              type="tel"
                            />
                          </div>
                        </div>
                      </div>
                      <span
                        className="input-group-text"
                        style={{
                          color: "red",
                        }}
                      >
                        **Kindly make sure this phone numer is linked to your
                        NIN.
                      </span>
                      <div className="input-text">
                        <div className="input-div mb-1">
                          <label
                            className="form-label"
                            htmlFor="contact-info-icon"
                          >
                            Email Address
                          </label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text" />
                            <input
                              className="form-control"
                              id="email"
                              name="email"
                              placeholder="Email Address"
                              required
                              type="email"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="input-text">
                        <div className="input-div mb-1">
                          <div className="input-group input-group-merge">
                            <input
                              className="form-check"
                              id="certification"
                              name="certification"
                              required
                              type="checkbox"
                            />
                            <label
                              className="form-label"
                              htmlFor="certification"
                            >
                              I agree to the
                              <a
                                href="terms.html"
                                style={{
                                  color: "#8d092f",
                                }}
                              >
                                terms and conditions
                              </a>
                              and
                              <a
                                href="terms.html"
                                style={{
                                  color: "#8d092f",
                                }}
                              >
                                privacy policy
                              </a>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="buttons">
                        <button id="checkUser">Next Step</button>
                        <button
                          className="next_button"
                          id="user_next"
                          style={{
                            display: "none",
                          }}
                        >
                          Next Step
                        </button>
                      </div>
                    </div>
                    <div className="main">
                      <div className="text">
                        <h2>Your Business Details</h2>
                        <p>
                          Kindly provide more details about your business below
                        </p>
                      </div>
                      <div className="input-text">
                        <div className="input-div mb-1">
                          <label
                            className="form-label"
                            htmlFor="contact-info-icon"
                          >
                            Business Name
                          </label>
                          <div className="input-group input-group-merge">
                            <input
                              className="form-control"
                              id="contact-info-icon"
                              name="business_name"
                              placeholder="Business Name"
                              required
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="input-text">
                        <div className="input-div mb-1">
                          <label
                            className="form-label"
                            htmlFor="contact-info-icon"
                          >
                            Business Address
                          </label>
                          <div className="input-group input-group-merge">
                            <input
                              className="form-control"
                              id="contact-info-icon"
                              name="business_address"
                              placeholder="Business Address"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="input-text">
                        <div className="input-div mb-1">
                          <label className="form-label" htmlFor="email-id-icon">
                            Number of Years in Operation
                          </label>
                          <div className="input-group input-group-merge">
                            <select
                              className="form-select"
                              id="basicSelect"
                              name="business_year"
                              required
                            >
                              <option value="">- Select -</option>
                              <option value="Less than 6 months">
                                Less than 6 months
                              </option>
                              <option value="6 months - 1 year">
                                6 months - 1 year
                              </option>
                              <option value="More than 1 year – 3 years">
                                More than 1 year – 3 years
                              </option>
                              <option value="More than 3 years – 5 years">
                                More than 3 years – 5 years
                              </option>
                              <option value="More than 5 years – 10 years">
                                More than 5 years – 10 years
                              </option>
                              <option value="More than 10 years">
                                More than 10 years
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="input-text">
                        <div className="input-div mb-1">
                          <label className="form-label" htmlFor="email-id-icon">
                            Is your business registered with the Corporate
                            Affairs Commission (CAC)?
                            <span
                              style={{
                                color: "red",
                              }}
                            >
                              *
                            </span>
                          </label>
                          <div className="input-group input-group-merge">
                            <select
                              className="form-select"
                              id="basicSelect"
                              name="business_reg"
                              required
                            >
                              <option value="">- Select -</option>
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="input-text">
                        <div className="input-div mb-1">
                          <label
                            className="form-label"
                            htmlFor="contact-info-icon"
                          >
                            Business Registration Number
                          </label>
                          <div className="input-group input-group-merge">
                            <input
                              className="form-control"
                              id="contact-info-icon"
                              name="reg_number"
                              placeholder="Business Registration Number"
                              type="number"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="input-text">
                        <div className="input-div mb-1">
                          <label className="form-label" htmlFor="email-id-icon">
                            Line of Business/Sector
                          </label>
                          <div className="input-group input-group-merge">
                            <select
                              className="form-select"
                              id="basicSelect"
                              name="business_sector"
                              required
                            >
                              <option value="">- Select -</option>
                              <option value="Advertising">Advertising</option>
                              <option value="Agribusiness">Agribusiness</option>
                              <option value="Agriculture">Agriculture</option>
                              <option value="Agriculture and Farming">
                                Agriculture and Farming
                              </option>
                              <option value="Apps">Apps</option>
                              <option value="Art">Art</option>
                              <option value="Artificial Intelligence">
                                Artificial Intelligence
                              </option>
                              <option value="Automotive">Automotive</option>
                              <option value="Beauty & Fashion">
                                Beauty & Fashion
                              </option>
                              <option value="Biotechnology">
                                Biotechnology
                              </option>
                              <option value="Banners">Banners</option>
                              <option value="Business">Business</option>
                              <option value="Business cards">
                                Business cards
                              </option>
                              <option value="Business planning">
                                Business planning
                              </option>
                              <option value="Caricatures">Caricatures</option>
                              <option value="Commerce and Shopping">
                                Commerce and Shopping
                              </option>
                              <option value="Community and Lifestyle">
                                Community and Lifestyle
                              </option>
                              <option value="Consumer Electronics">
                                Consumer Electronics
                              </option>
                              <option value="Consumer Goods">
                                Consumer Goods
                              </option>
                              <option value="Copywriting">Copywriting</option>
                              <option value="Data and Analytics">
                                Data and Analytics
                              </option>
                              <option value="Digital Health">
                                Digital Health
                              </option>
                              <option value="Education">Education</option>
                              <option value="Energy">Energy</option>
                              <option value="Entertainment">
                                Entertainment
                              </option>
                              <option value="Fashion">Fashion</option>
                              <option value="Finance">Finance</option>
                              <option value="Finance (FinTech, InsureTech, etc)">
                                Finance (FinTech, InsureTech, etc)
                              </option>
                              <option value="Financial Services">
                                Financial Services
                              </option>
                              <option value="Food">Food</option>
                              <option value="Food and Beverage">
                                Food and Beverage
                              </option>
                              <option value="Flyers & Posters">
                                Flyers & Posters
                              </option>
                              <option value="Gaming">Gaming</option>
                              <option value="Graphics & Design">
                                Graphics & Design
                              </option>
                              <option value="Green Technologies">
                                Green Technologies
                              </option>
                              <option value="Hardware">Hardware</option>
                              <option value="Health Care">Health Care</option>
                              <option value="Healthcare">Healthcare</option>
                              <option value="Health & Fitness">
                                Health & Fitness
                              </option>
                              <option value="Horoscope & Tarot">
                                Horoscope & Tarot
                              </option>
                              <option value="HTML & CSS">HTML & CSS</option>
                              <option value="Illustrations">
                                Illustrations
                              </option>
                              <option value="Impact Investing">
                                Impact Investing
                              </option>
                              <option value="Infrastructure development (affordable housing and sanitation)">
                                Infrastructure development (affordable housing
                                and sanitation)
                              </option>
                              <option value="Information Technology">
                                Information Technology
                              </option>
                              <option value="Insurance">Insurance</option>
                              <option value="Internet Services">
                                Internet Services
                              </option>
                              <option value="Languages">Languages</option>
                              <option value="Lending and Investments">
                                Lending and Investments
                              </option>
                              <option value="Lifestyle">Lifestyle</option>
                              <option value="Logo design">Logo design</option>
                              <option value="Manufacturing and raw material processing">
                                Manufacturing and raw material processing
                              </option>
                              <option value="Marketing">Marketing</option>
                              <option value="Media and Communications">
                                Media and Communications
                              </option>
                              <option value="Media and Entertainment">
                                Media and Entertainment
                              </option>
                              <option value="Mobile">Mobile</option>
                              <option value="Music and Audio">
                                Music and Audio
                              </option>
                              <option value="Oil and Gas">Oil and Gas</option>
                              <option value="Online classes & Teaching">
                                Online classes & Teaching
                              </option>
                              <option value="Payments">Payments</option>
                              <option value="Photo models">Photo models</option>
                              <option value="Photography">Photography</option>
                              <option value="Photoshop">Photoshop</option>
                              <option value="Postproduction">
                                Postproduction
                              </option>
                              <option value="Press release">
                                Press release
                              </option>
                              <option value="Presentations">
                                Presentations
                              </option>
                              <option value="Privacy and Security">
                                Privacy and Security
                              </option>
                              <option value="Professional Services">
                                Professional Services
                              </option>
                              <option value="Programming & IT">
                                Programming & IT
                              </option>
                              <option value="Proofreading & Editing">
                                Proofreading & Editing
                              </option>
                              <option value="Psychotherapy">
                                Psychotherapy
                              </option>
                              <option value="Real Estate">Real Estate</option>
                              <option value="Resumes">Resumes</option>
                              <option value="Retail/e-Commerce">
                                Retail/e-Commerce
                              </option>
                              <option value="Sales and Marketing">
                                Sales and Marketing
                              </option>
                              <option value="Science">Science</option>
                              <option value="Science and Engineering">
                                Science and Engineering
                              </option>
                              <option value="Sector Agnostic">
                                Sector Agnostic
                              </option>
                              <option value="Shipping industries">
                                Shipping industries
                              </option>
                              <option value="Social Impact">
                                Social Impact
                              </option>
                              <option value="Social-impact technology">
                                Social-impact technology
                              </option>
                              <option value="Software">Software</option>
                              <option value="Software (B2B, Enterprise SaaS)">
                                Software (B2B, Enterprise SaaS)
                              </option>
                              <option value="Sound effects">
                                Sound effects
                              </option>
                              <option value="Sports">Sports</option>
                              <option value="Sustainability">
                                Sustainability
                              </option>
                              <option value="Technology">Technology</option>
                              <option value="Transportation">
                                Transportation
                              </option>
                              <option value="Travel">Travel</option>
                              <option value="Video & Audio">
                                Video & Audio
                              </option>
                              <option value="Video spokesperson">
                                Video spokesperson
                              </option>
                              <option value="Voice-over">Voice-over</option>
                              <option value="Warehousing">Warehousing</option>
                              <option value="Web content">Web content</option>
                              <option value="Web design">Web design</option>
                              <option value="Wellness & Beauty">
                                Wellness & Beauty
                              </option>
                              <option value="Writing & Translation">
                                Writing & Translation
                              </option>
                              <option value="Others">Others</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="input-text">
                        <div className="input-div mb-1">
                          <label
                            className="form-label"
                            htmlFor="contact-info-icon"
                          >
                            Number of team members/staffs (including founder)
                          </label>
                          <div className="input-group input-group-merge">
                            <input
                              className="form-control"
                              id="contact-info-icon"
                              name="staff_num"
                              placeholder="Number of Employees*"
                              required
                              type="number"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="input-text">
                        <div className="input-div mb-1">
                          <label className="form-label" htmlFor="email-id-icon">
                            Which of these Digital Tools or Platforms Have You
                            Used in the Last Six Months?
                          </label>
                          <div className="input-group input-group-merge">
                            <select
                              className="form-select"
                              id="basicSelect"
                              name="digital_tools"
                              required
                            >
                              <option value="">- Select -</option>
                              <option value="None of them">None of them</option>
                              <option value="Instagram/Facebook/Twitter Ads">
                                Instagram/Facebook/Twitter Ads
                              </option>
                              <option value="CRM Systems">CRM Systems</option>
                              <option value="SEO">SEO</option>
                              <option value="Email marketing">
                                Email marketing
                              </option>
                              <option value="Business automation/software solutions">
                                Business automation/software solutions
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="input-text">
                        <div className="input-div mb-1">
                          <label className="form-label" htmlFor="email-id-icon">
                            Do You Have a Business Website?
                          </label>
                          <div className="input-group input-group-merge">
                            <select
                              className="form-select"
                              id="basicSelect"
                              name="business_website"
                              required
                            >
                              <option value="">- Select -</option>
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="input-text">
                        <div className="input-div mb-1">
                          <label
                            className="form-label"
                            htmlFor="contact-info-icon"
                          >
                            Please Indicate the URL of Your Business Website if
                            You Have
                          </label>
                          <div className="input-group input-group-merge">
                            <input
                              className="form-control"
                              id="contact-info-icon"
                              name="gfa1ai2-web"
                              placeholder="Website Url"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="input-text">
                        <div className="input-div mb-1">
                          <label className="form-label" htmlFor="email-id-icon">
                            Startup Model
                          </label>
                          <div className="input-group input-group-merge">
                            <select
                              className="form-select"
                              id="basicSelect"
                              name="business_model"
                            >
                              <option value="">- Select -</option>
                              <option value="B2B">
                                Business-to-Business (B2B)
                              </option>
                              <option value="B2B2C">
                                Business-to-Consumer (B2C)
                              </option>
                              <option value="B2C">
                                Business-to-Business-to-Consumer (B2B2C)
                              </option>
                              <option value="B2C/B2B">
                                Business-to-Consumer/Business-to-Business
                                (B2C)/(B2C)
                              </option>
                              <option value="D2C">
                                Direct-to-Consumer (D2C)
                              </option>
                              <option value="D2C/B2B">
                                Direct-to-Consumer/Business-to-Business
                                (D2C)/(B2B)
                              </option>
                              <option value="D2C/B2C">
                                Direct-to-Consumer/Business-to-Customer
                                (D2C)/(B2C)
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="input-text">
                        <div className="input-div mb-1">
                          <label className="form-label" htmlFor="email-id-icon">
                            Corporate Solutions
                          </label>
                          <div className="input-group input-group-merge">
                            <select
                              className="form-select"
                              id="basicSelect"
                              name="business_solution"
                            >
                              <option value="">- Select -</option>
                              <option value="Digital Banks">
                                Digital Banks
                              </option>
                              <option value="Energy">Energy</option>
                              <option value="Engineering/ESG">
                                Engineering/ESG
                              </option>
                              <option value="Financial Services">
                                Financial Services
                              </option>
                              <option value="FMCG/CPG">FMCG/CPG</option>
                              <option value="ICT Technology Products & Solutions">
                                ICT Technology Products & Solutions
                              </option>
                              <option value="Manufacturing">
                                Manufacturing
                              </option>
                              <option value="Payment Platform">
                                Payment Platform
                              </option>
                              <option value="Renewable Energy Software">
                                Renewable Energy Software
                              </option>
                              <option value="Telecommunication">
                                Telecommunication
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="input-text">
                        <div className="input-div mb-1">
                          <label className="form-label" htmlFor="email-id-icon">
                            Core solutions to corporate
                          </label>
                          <div className="input-group input-group-merge">
                            <select
                              className="form-select"
                              id="basicSelect"
                              name="business_core_solution"
                            >
                              <option value="">- Select -</option>
                              <option value="Increasing revenue">
                                Increasing revenue
                              </option>
                              <option value="Reducing company costs">
                                Reducing company costs
                              </option>
                              <option value="Enhance operational excellence, capabilities or performance management">
                                Enhance operational excellence, capabilities or
                                performance management
                              </option>
                              <option value="Accessing new markets/customers">
                                Accessing new markets/customers
                              </option>
                              <option value="Increasing sales in existing markets">
                                Increasing sales in existing markets
                              </option>
                              <option value="Improving your access to technology and other resources">
                                Improving your access to technology and other
                                resources
                              </option>
                              <option value="Improving your product offering for your customers">
                                Improving your product offering for your
                                customers
                              </option>
                              <option value="Diversifying your product offerings">
                                Diversifying your product offerings
                              </option>
                              <option value="Digital Transformation digital transformation for a company's business process, culture, and customer experiences to meet changing business and market requirements">
                                Digital Transformation digital transformation
                                for a company's business process, culture and
                                customer experiences to meet changing business
                                and market requirements
                              </option>
                              <option value="Aggregation of data and gaining new insights">
                                Aggregation of data and gaining new insights
                              </option>
                              <option value="Solutions to enable a smart workforce across multiple internal functions">
                                Solutions to enable a smart workforce across
                                multiple internal functions
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="input-text">
                        <div className="input-div mb-1">
                          <label className="form-label" htmlFor="email-id-icon">
                            Solution Ownership/Relationship Style
                          </label>
                          <div className="input-group input-group-merge">
                            <select
                              className="form-select"
                              id="basicSelect"
                              name="business_own_solution"
                              required
                            >
                              <option value="">- Select -</option>
                              <option value="Built In-house">
                                Built In-house
                              </option>
                              <option value="Investment Opportunity">
                                Investment Opportunity
                              </option>
                              <option value="Partnership/Joint Venture">
                                Partnership/Joint Venture
                              </option>
                              <option value="Acquisition">Acquisition</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="input-text">
                        <div className="input-div mb-1">
                          <label className="form-label" htmlFor="email-id-icon">
                            Country and relocated immediatly after Home Address
                          </label>
                          <div className="input-group input-group-merge">
                            <select
                              className="form-select"
                              id="basicSelect"
                              name="business_country"
                              required
                            >
                              <option value="">- Select -</option>
                              <option value="Afghanistan">Afghanistan</option>
                              <option value="Albania">Albania</option>
                              <option value="Algeria">Algeria</option>
                              <option value="American Samoa">
                                American Samoa
                              </option>
                              <option value="Andorra">Andorra</option>
                              <option value="Angola">Angola</option>
                              <option value="Anguilla">Anguilla</option>
                              <option value="Antartica">Antarctica</option>
                              <option value="Antigua and Barbuda">
                                Antigua and Barbuda
                              </option>
                              <option value="Argentina">Argentina</option>
                              <option value="Armenia">Armenia</option>
                              <option value="Aruba">Aruba</option>
                              <option value="Australia">Australia</option>
                              <option value="Austria">Austria</option>
                              <option value="Azerbaijan">Azerbaijan</option>
                              <option value="Bahamas">Bahamas</option>
                              <option value="Bahrain">Bahrain</option>
                              <option value="Bangladesh">Bangladesh</option>
                              <option value="Barbados">Barbados</option>
                              <option value="Belarus">Belarus</option>
                              <option value="Belgium">Belgium</option>
                              <option value="Belize">Belize</option>
                              <option value="Benin">Benin</option>
                              <option value="Bermuda">Bermuda</option>
                              <option value="Bhutan">Bhutan</option>
                              <option value="Bolivia">Bolivia</option>
                              <option value="Bosnia and Herzegowina">
                                Bosnia and Herzegowina
                              </option>
                              <option value="Botswana">Botswana</option>
                              <option value="Bouvet Island">
                                Bouvet Island
                              </option>
                              <option value="Brazil">Brazil</option>
                              <option value="British Indian Ocean Territory">
                                British Indian Ocean Territory
                              </option>
                              <option value="Brunei Darussalam">
                                Brunei Darussalam
                              </option>
                              <option value="Bulgaria">Bulgaria</option>
                              <option value="Burkina Faso">Burkina Faso</option>
                              <option value="Burundi">Burundi</option>
                              <option value="Cambodia">Cambodia</option>
                              <option value="Cameroon">Cameroon</option>
                              <option value="Canada">Canada</option>
                              <option value="Cape Verde">Cape Verde</option>
                              <option value="Cayman Islands">
                                Cayman Islands
                              </option>
                              <option value="Central African Republic">
                                Central African Republic
                              </option>
                              <option value="Chad">Chad</option>
                              <option value="Chile">Chile</option>
                              <option value="China">China</option>
                              <option value="Christmas Island">
                                Christmas Island
                              </option>
                              <option value="Cocos Islands">
                                Cocos (Keeling) Islands
                              </option>
                              <option value="Colombia">Colombia</option>
                              <option value="Comoros">Comoros</option>
                              <option value="Congo">Congo</option>
                              <option value="Congo">
                                Congo, the Democratic Republic of the
                              </option>
                              <option value="Cook Islands">Cook Islands</option>
                              <option value="Costa Rica">Costa Rica</option>
                              <option value="Cota D'Ivoire">
                                Cote d'Ivoire
                              </option>
                              <option value="Croatia">
                                Croatia (Hrvatska)
                              </option>
                              <option value="Cuba">Cuba</option>
                              <option value="Cyprus">Cyprus</option>
                              <option value="Czech Republic">
                                Czech Republic
                              </option>
                              <option value="Denmark">Denmark</option>
                              <option value="Djibouti">Djibouti</option>
                              <option value="Dominica">Dominica</option>
                              <option value="Dominican Republic">
                                Dominican Republic
                              </option>
                              <option value="East Timor">East Timor</option>
                              <option value="Ecuador">Ecuador</option>
                              <option value="Egypt">Egypt</option>
                              <option value="El Salvador">El Salvador</option>
                              <option value="Equatorial Guinea">
                                Equatorial Guinea
                              </option>
                              <option value="Eritrea">Eritrea</option>
                              <option value="Estonia">Estonia</option>
                              <option value="Ethiopia">Ethiopia</option>
                              <option value="Falkland Islands">
                                Falkland Islands (Malvinas)
                              </option>
                              <option value="Faroe Islands">
                                Faroe Islands
                              </option>
                              <option value="Fiji">Fiji</option>
                              <option value="Finland">Finland</option>
                              <option value="France">France</option>
                              <option value="France Metropolitan">
                                France, Metropolitan
                              </option>
                              <option value="French Guiana">
                                French Guiana
                              </option>
                              <option value="French Polynesia">
                                French Polynesia
                              </option>
                              <option value="French Southern Territories">
                                French Southern Territories
                              </option>
                              <option value="Gabon">Gabon</option>
                              <option value="Gambia">Gambia</option>
                              <option value="Georgia">Georgia</option>
                              <option value="Germany">Germany</option>
                              <option value="Ghana">Ghana</option>
                              <option value="Gibraltar">Gibraltar</option>
                              <option value="Greece">Greece</option>
                              <option value="Greenland">Greenland</option>
                              <option value="Grenada">Grenada</option>
                              <option value="Guadeloupe">Guadeloupe</option>
                              <option value="Guam">Guam</option>
                              <option value="Guatemala">Guatemala</option>
                              <option value="Guinea">Guinea</option>
                              <option value="Guinea-Bissau">
                                Guinea-Bissau
                              </option>
                              <option value="Guyana">Guyana</option>
                              <option value="Haiti">Haiti</option>
                              <option value="Heard and McDonald Islands">
                                Heard and Mc Donald Islands
                              </option>
                              <option value="Holy See">
                                Holy See (Vatican City State)
                              </option>
                              <option value="Honduras">Honduras</option>
                              <option value="Hong Kong">Hong Kong</option>
                              <option value="Hungary">Hungary</option>
                              <option value="Iceland">Iceland</option>
                              <option value="India">India</option>
                              <option value="Indonesia">Indonesia</option>
                              <option value="Iran">
                                Iran (Islamic Republic of)
                              </option>
                              <option value="Iraq">Iraq</option>
                              <option value="Ireland">Ireland</option>
                              <option value="Israel">Israel</option>
                              <option value="Italy">Italy</option>
                              <option value="Jamaica">Jamaica</option>
                              <option value="Japan">Japan</option>
                              <option value="Jordan">Jordan</option>
                              <option value="Kazakhstan">Kazakhstan</option>
                              <option value="Kenya">Kenya</option>
                              <option value="Kiribati">Kiribati</option>
                              <option value="Democratic People's Republic of Korea">
                                Korea, Democratic People's Republic of
                              </option>
                              <option value="Korea">Korea, Republic of</option>
                              <option value="Kuwait">Kuwait</option>
                              <option value="Kyrgyzstan">Kyrgyzstan</option>
                              <option value="Lao">
                                Lao People's Democratic Republic
                              </option>
                              <option value="Latvia">Latvia</option>
                              <option value="Lebanon">Lebanon</option>
                              <option value="Lesotho">Lesotho</option>
                              <option value="Liberia">Liberia</option>
                              <option value="Libyan Arab Jamahiriya">
                                Libyan Arab Jamahiriya
                              </option>
                              <option value="Liechtenstein">
                                Liechtenstein
                              </option>
                              <option value="Lithuania">Lithuania</option>
                              <option value="Luxembourg">Luxembourg</option>
                              <option value="Macau">Macau</option>
                              <option value="Macedonia">
                                Macedonia, The Former Yugoslav Republic of
                              </option>
                              <option value="Madagascar">Madagascar</option>
                              <option value="Malawi">Malawi</option>
                              <option value="Malaysia">Malaysia</option>
                              <option value="Maldives">Maldives</option>
                              <option value="Mali">Mali</option>
                              <option value="Malta">Malta</option>
                              <option value="Marshall Islands">
                                Marshall Islands
                              </option>
                              <option value="Martinique">Martinique</option>
                              <option value="Mauritania">Mauritania</option>
                              <option value="Mauritius">Mauritius</option>
                              <option value="Mayotte">Mayotte</option>
                              <option value="Mexico">Mexico</option>
                              <option value="Micronesia">
                                Micronesia, Federated States of
                              </option>
                              <option value="Moldova">
                                Moldova, Republic of
                              </option>
                              <option value="Monaco">Monaco</option>
                              <option value="Mongolia">Mongolia</option>
                              <option value="Montserrat">Montserrat</option>
                              <option value="Morocco">Morocco</option>
                              <option value="Mozambique">Mozambique</option>
                              <option value="Myanmar">Myanmar</option>
                              <option value="Namibia">Namibia</option>
                              <option value="Nauru">Nauru</option>
                              <option value="Nepal">Nepal</option>
                              <option value="Netherlands">Netherlands</option>
                              <option value="Netherlands Antilles">
                                Netherlands Antilles
                              </option>
                              <option value="New Caledonia">
                                New Caledonia
                              </option>
                              <option value="New Zealand">New Zealand</option>
                              <option value="Nicaragua">Nicaragua</option>
                              <option value="Niger">Niger</option>
                              <option selected value="Nigeria">
                                Nigeria
                              </option>
                              <option value="Niue">Niue</option>
                              <option value="Norfolk Island">
                                Norfolk Island
                              </option>
                              <option value="Northern Mariana Islands">
                                Northern Mariana Islands
                              </option>
                              <option value="Norway">Norway</option>
                              <option value="Oman">Oman</option>
                              <option value="Pakistan">Pakistan</option>
                              <option value="Palau">Palau</option>
                              <option value="Panama">Panama</option>
                              <option value="Papua New Guinea">
                                Papua New Guinea
                              </option>
                              <option value="Paraguay">Paraguay</option>
                              <option value="Peru">Peru</option>
                              <option value="Philippines">Philippines</option>
                              <option value="Pitcairn">Pitcairn</option>
                              <option value="Poland">Poland</option>
                              <option value="Portugal">Portugal</option>
                              <option value="Puerto Rico">Puerto Rico</option>
                              <option value="Qatar">Qatar</option>
                              <option value="Reunion">Reunion</option>
                              <option value="Romania">Romania</option>
                              <option value="Russia">Russian Federation</option>
                              <option value="Rwanda">Rwanda</option>
                              <option value="Saint Kitts and Nevis">
                                Saint Kitts and Nevis
                              </option>
                              <option value="Saint LUCIA">Saint LUCIA</option>
                              <option value="Saint Vincent">
                                Saint Vincent and the Grenadines
                              </option>
                              <option value="Samoa">Samoa</option>
                              <option value="San Marino">San Marino</option>
                              <option value="Sao Tome and Principe">
                                Sao Tome and Principe
                              </option>
                              <option value="Saudi Arabia">Saudi Arabia</option>
                              <option value="Senegal">Senegal</option>
                              <option value="Seychelles">Seychelles</option>
                              <option value="Sierra">Sierra Leone</option>
                              <option value="Singapore">Singapore</option>
                              <option value="Slovakia">
                                Slovakia (Slovak Republic)
                              </option>
                              <option value="Slovenia">Slovenia</option>
                              <option value="Solomon Islands">
                                Solomon Islands
                              </option>
                              <option value="Somalia">Somalia</option>
                              <option value="South Africa">South Africa</option>
                              <option value="South Georgia">
                                South Georgia and the South Sandwich Islands
                              </option>
                              <option value="Span">Spain</option>
                              <option value="SriLanka">Sri Lanka</option>
                              <option value="St. Helena">St. Helena</option>
                              <option value="St. Pierre and Miguelon">
                                St. Pierre and Miquelon
                              </option>
                              <option value="Sudan">Sudan</option>
                              <option value="Suriname">Suriname</option>
                              <option value="Svalbard">
                                Svalbard and Jan Mayen Islands
                              </option>
                              <option value="Swaziland">Swaziland</option>
                              <option value="Sweden">Sweden</option>
                              <option value="Switzerland">Switzerland</option>
                              <option value="Syria">
                                Syrian Arab Republic
                              </option>
                              <option value="Taiwan">
                                Taiwan, Province of China
                              </option>
                              <option value="Tajikistan">Tajikistan</option>
                              <option value="Tanzania">
                                Tanzania, United Republic of
                              </option>
                              <option value="Thailand">Thailand</option>
                              <option value="Togo">Togo</option>
                              <option value="Tokelau">Tokelau</option>
                              <option value="Tonga">Tonga</option>
                              <option value="Trinidad and Tobago">
                                Trinidad and Tobago
                              </option>
                              <option value="Tunisia">Tunisia</option>
                              <option value="Turkey">Turkey</option>
                              <option value="Turkmenistan">Turkmenistan</option>
                              <option value="Turks and Caicos">
                                Turks and Caicos Islands
                              </option>
                              <option value="Tuvalu">Tuvalu</option>
                              <option value="Uganda">Uganda</option>
                              <option value="Ukraine">Ukraine</option>
                              <option value="United Arab Emirates">
                                United Arab Emirates
                              </option>
                              <option value="United Kingdom">
                                United Kingdom
                              </option>
                              <option value="United States">
                                United States
                              </option>
                              <option value="United States Minor Outlying Islands">
                                United States Minor Outlying Islands
                              </option>
                              <option value="Uruguay">Uruguay</option>
                              <option value="Uzbekistan">Uzbekistan</option>
                              <option value="Vanuatu">Vanuatu</option>
                              <option value="Venezuela">Venezuela</option>
                              <option value="Vietnam">Viet Nam</option>
                              <option value="Virgin Islands (British)">
                                Virgin Islands (British)
                              </option>
                              <option value="Virgin Islands (U.S)">
                                Virgin Islands (U.S.)
                              </option>
                              <option value="Wallis and Futana Islands">
                                Wallis and Futuna Islands
                              </option>
                              <option value="Western Sahara">
                                Western Sahara
                              </option>
                              <option value="Yemen">Yemen</option>
                              <option value="Serbia">Serbia</option>
                              <option value="Zambia">Zambia</option>
                              <option value="Zimbabwe">Zimbabwe</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="input-text">
                        <div className="input-div mb-1">
                          <label className="form-label" htmlFor="email-id-icon">
                            Do you have a Wema Bank account?[Please note that
                            this will not affect your chances of being selected.
                            You will have the opportunity to open a Wema Bank
                            account in the course of the program]
                          </label>
                          <div className="input-group input-group-merge">
                            <select
                              className="form-select"
                              id="basicSelect"
                              name="wema_acct"
                            >
                              <option value="No">No</option>
                              <option value="Yes">Yes</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="input-text">
                        <div className="form-floating mb-0">
                          <label htmlFor="textarea-counter">
                            Briefly Describe your Business Idea and Your Vision
                            for the next 6-12 months*
                          </label>
                          <textarea
                            className="form-control char-textarea"
                            data-length="250"
                            id="textarea-counter"
                            name="business_description"
                            required
                            rows="5"
                            style={{
                              height: "100px",
                              width: "108%",
                            }}
                          />
                        </div>
                      </div>
                      <div className="input-text">
                        <div className="input-div mb-1">
                          <label className="form-label" htmlFor="email-id-icon">
                            Which of these Best Describes You? *
                          </label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text" />
                            <select
                              className="form-select"
                              id="basicSelect"
                              name="business_importance"
                              required
                            >
                              <option value="">- Select -</option>
                              <option value="Technology will be very important in running my business">
                                Technology will be very important in running my
                                business
                              </option>
                              <option value="Technology will not really be important in running my business">
                                Technology will not really be important in
                                running my business
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="input-text">
                        <div className="input-div mb-1">
                          <label className="form-label" htmlFor="email-id-icon">
                            Do you have a Wema Bank account?[Please note that
                            this will not affect your chances of being selected.
                            You will have the opportunity to open a Wema Bank
                            account in the course of the program]
                          </label>
                          <div className="input-group input-group-merge">
                            <select
                              className="form-select"
                              id="basicSelect"
                              name="wema_acct"
                            >
                              <option value="No">No</option>
                              <option value="Yes">Yes</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="input-text">
                        <div className="input-div mb-1">
                          <div className="input-group input-group-merge">
                            <input
                              className="form-check"
                              defaultValue="1"
                              id="assist-wema"
                              name="assist_wema"
                              required
                              type="checkbox"
                            />
                            <label className="form-label" htmlFor="assist-wema">
                              You can gain exclusive access to professional
                              development resources even after the conclusion of
                              the program by opening a Wema Bank account. If
                              you'd like assistance in setting one up, kindly
                              give us consent by checking the box below
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="buttons button_space">
                        <button className="back_button">Back</button>
                        <button className="next_button">Next Step</button>
                      </div>
                    </div>
                    <div className="main">
                      <div className="text">
                        <h2>Your Personal Details</h2>
                        <p>Kindly provide your peronal information below.</p>
                      </div>
                      <div className="input-text">
                        <div className="input-div mb-1">
                          <label className="form-label" htmlFor="email-id-icon">
                            Marital Status
                          </label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text" />
                            <select
                              className="form-select"
                              id="basicSelect"
                              name="marital_status"
                              required
                            >
                              <option value="">- Select -</option>
                              <option value="Single">Single</option>
                              <option value="Married">Married</option>
                              <option value="Divorced">Divorced</option>
                              <option value="Widowed">Widowed</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="input-text">
                        <div className="input-div mb-1">
                          <label className="form-label" htmlFor="email-id-icon">
                            State of Origin*
                          </label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text" />
                            <select
                              className="form-select"
                              id="state"
                              name="state_origin"
                              onchange="toggleLGA(this);"
                              required
                            >
                              <option selected value="">
                                - Select -
                              </option>
                              <option value="Abia">Abia</option>
                              <option value="Adamawa">Adamawa</option>
                              <option value="AkwaIbom">AkwaIbom</option>
                              <option value="Anambra">Anambra</option>
                              <option value="Bauchi">Bauchi</option>
                              <option value="Bayelsa">Bayelsa</option>
                              <option value="Benue">Benue</option>
                              <option value="Borno">Borno</option>
                              <option value="Cross River">Cross River</option>
                              <option value="Delta">Delta</option>
                              <option value="Ebonyi">Ebonyi</option>
                              <option value="Edo">Edo</option>
                              <option value="Ekiti">Ekiti</option>
                              <option value="Enugu">Enugu</option>
                              <option value="FCT">FCT</option>
                              <option value="Gombe">Gombe</option>
                              <option value="Imo">Imo</option>
                              <option value="Jigawa">Jigawa</option>
                              <option value="Kaduna">Kaduna</option>
                              <option value="Kano">Kano</option>
                              <option value="Katsina">Katsina</option>
                              <option value="Kebbi">Kebbi</option>
                              <option value="Kogi">Kogi</option>
                              <option value="Kwara">Kwara</option>
                              <option value="Lagos">Lagos</option>
                              <option value="Nasarawa">Nasarawa</option>
                              <option value="Niger">Niger</option>
                              <option value="Ogun">Ogun</option>
                              <option value="Ondo">Ondo</option>
                              <option value="Osun">Osun</option>
                              <option value="Oyo">Oyo</option>
                              <option value="Plateau">Plateau</option>
                              <option value="Rivers">Rivers</option>
                              <option value="Sokoto">Sokoto</option>
                              <option value="Taraba">Taraba</option>
                              <option value="Yobe">Yobe</option>
                              <option value="Zamfara">Zamafara</option>
                            </select>
                          </div>
                        </div>
                        <div className="input-div mb-1">
                          <label
                            className="form-label"
                            htmlFor="contact-info-icon"
                          >
                            Local Government Area of Origin
                          </label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text" />
                            <select
                              className="form-control select-lga"
                              id="lga"
                              name="local_origin"
                            >
                              <option value="">Select State To View</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="input-text">
                        <div className="input-div mb-1">
                          <label className="form-label" htmlFor="email-id-icon">
                            State of Residence
                          </label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text" />
                            <select
                              className="form-select"
                              id="basicSelect"
                              name="state_residence"
                              required
                            >
                              <option value="">- Select -</option>
                              <option value="Abia">Abia</option>
                              <option value="Adamawa">Adamawa</option>
                              <option value="Akwa Ibom">Akwa Ibom</option>
                              <option value="Anambra">Anambra</option>
                              <option value="Bauchi">Bauchi</option>
                              <option value="Bayelsa">Bayelsa</option>
                              <option value="Benue">Benue</option>
                              <option value="Borno">Borno</option>
                              <option value="Cross River">Cross River</option>
                              <option value="Delta">Delta</option>
                              <option value="Ebonyi">Ebonyi</option>
                              <option value="Edo">Edo</option>
                              <option value="Ekiti">Ekiti</option>
                              <option value="Enugu">Enugu</option>
                              <option value="Gombe">Gombe</option>
                              <option value="Imo">Imo</option>
                              <option value="Jigawa">Jigawa</option>
                              <option value="Kaduna">Kaduna</option>
                              <option value="Kano">Kano</option>
                              <option value="Katsina">Katsina</option>
                              <option value="Kebbi">Kebbi</option>
                              <option value="Kogi">Kogi</option>
                              <option value="Kwara">Kwara</option>
                              <option value="Lagos">Lagos</option>
                              <option value="Nasarawa">Nasarawa</option>
                              <option value="Niger">Niger</option>
                              <option value="Ogun">Ogun</option>
                              <option value="Ondo">Ondo</option>
                              <option value="Osun">Osun</option>
                              <option value="Oyo">Oyo</option>
                              <option value="Plateau">Plateau</option>
                              <option value="Rivers">Rivers</option>
                              <option value="Sokoto">Sokoto</option>
                              <option value="Taraba">Taraba</option>
                              <option value="Yobe">Yobe</option>
                              <option value="Zamfara">Zamfara</option>
                              <option value="Federal Capital Territory">
                                Federal Capital Territory
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className="input-div mb-1">
                          <label
                            className="form-label"
                            htmlFor="contact-info-icon"
                          >
                            City/town of Residence
                          </label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text" />
                            <input
                              className="form-control"
                              id="contact-info-icon"
                              name="city_residence"
                              placeholder="City/town of Residence"
                              required
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="input-text">
                        <div className="input-div mb-1">
                          <label
                            className="form-label"
                            htmlFor="contact-info-icon"
                          >
                            Home Address
                          </label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text" />
                            <input
                              className="form-control"
                              id="contact-info-icon"
                              minLength="5"
                              name="home_address"
                              placeholder="Home Address"
                              required
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="input-text">
                        <div className="input-div mb-1">
                          <label
                            className="form-label"
                            htmlFor="contact-info-icon"
                          >
                            Highest level of education?
                          </label>
                          <div className="input-group input-group-merge">
                            <select
                              className="form-select"
                              id="basicSelect"
                              name="level_edu"
                              required
                            >
                              <option value="">- Select -</option>
                              <option value="No Formal Education">
                                No Formal Education
                              </option>
                              <option value="Primary School Completed">
                                Primary School Completed
                              </option>
                              <option value="Secondary School Completed">
                                Secondary School Completed
                              </option>
                              <option value="Vocational/Technical Diploma">
                                Vocational/Technical Diploma
                              </option>
                              <option value="OND">OND</option>
                              <option value="HND">HND</option>
                              <option value="Bachelor's Degree">
                                Bachelor's Degree
                              </option>
                              <option value="Postgraduate Diploma">
                                Postgraduate Diploma
                              </option>
                              <option value="Master's Degree">
                                Master's Degree
                              </option>
                              <option value="Doctorate (Ph.D.)">
                                Doctorate (Ph.D.)
                              </option>
                              <option value="Professional Qualification">
                                Professional Qualification
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="buttons button_space">
                        <button className="back_button">Back</button>
                        <button className="next_button">Next Step</button>
                      </div>
                    </div>
                    <div className="main">
                      <div className="text">
                        <h2>Your Bio-data</h2>
                        <p>Kindly provide/validate the details below.</p>
                      </div>
                      <div className="input-text">
                        <div className="input-div mb-1">
                          <label
                            className="form-label"
                            htmlFor="first-name-icon"
                          >
                            First Name
                          </label>
                          <div className="input-group input-group-merge">
                            <input
                              className="form-control"
                              id="first-name"
                              minLength="3"
                              name="first_name"
                              placeholder="First Name"
                              required
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="input-div mb-1">
                          <label
                            className="form-label"
                            htmlFor="first-name-icon"
                          >
                            Middle Name
                          </label>
                          <div className="input-group input-group-merge">
                            <input
                              className="form-control"
                              id="middle-name"
                              minLength="3"
                              name="middle_name"
                              placeholder="Middle Name"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="input-div mb-1">
                          <label
                            className="form-label"
                            htmlFor="first-name-icon"
                          >
                            Last Name
                          </label>
                          <div className="input-group input-group-merge">
                            <input
                              className="form-control"
                              id="last-name"
                              minLength="3"
                              name="last_name"
                              placeholder="Last Name"
                              required
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="input-text">
                        <div className="input-div mb-1">
                          <label className="form-label" htmlFor="email-id-icon">
                            Gender
                          </label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text" />
                            <select
                              className="form-select"
                              id="genderSelect"
                              name="gender"
                              required
                            >
                              <option value="">- Select -</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="input-text">
                        <div className="input-div mb-1">
                          <label
                            className="form-label"
                            htmlFor="contact-info-icon"
                          >
                            Date of Birth
                          </label>
                          <div className="input-group input-group-merge">
                            <span className="input-group-text" />
                            <input
                              className="form-control"
                              id="dob"
                              name="dob"
                              placeholder="YYYY-MM-DD"
                              required
                              type="date"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="input-text">
                        <div className="input-div mb-1">
                          <div className="input-group input-group-merge">
                            <input
                              className="form-check"
                              id="certification"
                              name="certification"
                              required
                              type="checkbox"
                            />
                            <label
                              className="form-label"
                              htmlFor="certification"
                            >
                              I certify that the information provided above is
                              accurate to the best of my knowledge. I understand
                              that any false information may lead to
                              disqualification from the program.*
                            </label>
                          </div>
                        </div>
                      </div>
                      <div id="hiddenField" />
                      <input
                        defaultValue="no"
                        id="isVerified"
                        name="isVerified"
                        type="hidden"
                      />
                      <div className="buttons button_space">
                        <button
                          className="submit_button"
                          id="submit_button"
                          onclick="submitBusinessOwnerForm()"
                          style={{
                            backgroundColor: "#8d092f",
                            color: "white",
                          }}
                          type="button"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </body>
    </div>
  );
};
export default FormTemplate;
