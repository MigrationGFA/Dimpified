// import node module libraries
import React, { Fragment, useEffect } from "react";

// import sub components
import HeroRightImage from "./HeroRightImage";

import ImproveKPI from "./ImproveKPI";
import TemplatesNoPlay from "./TemplatesNoPlay";

import HeroLeftImage from "./HeroLeftImage";

import LearnLatestSkills from "./LearnLatestSkills";


import HeroLeftImage2 from "./HeroLeftImage2";

import FAQsection from "./FAQsection";



// import layouts
import NavbarLanding from "../../dimp-home/NavbarLanding";
import FooterCenter from "../../dimp-home/FooterWithLinks";

// import data files
import LogoList2 from "../../data/marketing/clientlogos/LogoList2";

const CustomerTraining = () => {
  useEffect(() => {
    document.body.className = "bg-white";
  });

  return (
    <Fragment>
      {/*   Landing Page Navbar */}
      <NavbarLanding center />

      {/*   section  */}
      <main>
        {/*  learn today hero section */}
        <HeroRightImage />

       
        
        <TemplatesNoPlay />
          
       

        {/*  Building strong foundational skills */}
        <ImproveKPI />
        <section className="px-12 py-4 py-lg-16 bg-white">
          <HeroLeftImage />
  
        </section>
        <LearnLatestSkills/>
        <section className="px-12 py-4 py-lg-16 bg-white">
         <HeroLeftImage2 />
          
        </section>


       
        <hr className="my-0 bg-transparent text-white" />
       
       
        <FAQsection />
      </main>

      {/*   Footer with center alignment */}
      <FooterCenter />
    </Fragment>
  );
};

export default CustomerTraining;
