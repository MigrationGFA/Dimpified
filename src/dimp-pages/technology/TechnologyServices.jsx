// import node module libraries
import React, { Fragment, useEffect } from "react";

// import sub components
import HeroDoubleRight from "./HeroDoubleRight";

import TemplatesNoPlay from "./TemplatesNoPlay";

import HeroLeftImage from "./HeroLeftImage";
import HeroLeftImage2 from "./HeroLeftImage2";
import HeroLeftImage3 from "./HeroLeftImage3";


import HeroRightImage from "./HeroRightImage";

import HeroRightImage2 from "./HeroRightImage2";

import FAQsection from "./FAQsection";

// import custom components

// import layouts
import NavbarLanding from "../../dimp-home/NavbarLanding";
import FooterCenter from "../../dimp-home/FooterWithLinks";

// import data files
const TechnologyServices = () => {
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
        <HeroDoubleRight />

       

        {/*  Building strong foundational skills */}

        {/* <section className="px-4 py-4 py-lg-10 bg-white">
          <HeroLeftImage />
        </section> */}
        <section className="px-4 py-4 py-lg-8 bg-white">
          <HeroRightImage2 />
        </section>
        <TemplatesNoPlay />
        
        
        <section className="px-4 py-4 py-lg-10 bg-white">
          <HeroLeftImage2 />
        </section>
        <section className="px-4 py-4 py-lg-10 bg-white">
          <HeroRightImage />
        </section>
        
        <section className="px-4 py-4 py-lg-10 bg-white">
          <HeroLeftImage3 />
        </section>

        <hr className="my-0 bg-transparent text-white" />

        <FAQsection />
      </main>

      {/*   Footer with center alignment */}
      <FooterCenter />
    </Fragment>
  );
};

export default TechnologyServices;
