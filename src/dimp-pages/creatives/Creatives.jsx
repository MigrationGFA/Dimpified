// import node module libraries
import React, { Fragment, useEffect } from "react";

// import sub components
import HeroDoubleRight from "./HeroDoubleRight";

import TemplatesNoPlay from "./TemplatesNoPlay";

import HeroLeftImage from "./HeroLeftImage";
import HeroLeftImage2 from "./HeroLeftImage2";

import LearnLatestSkills from "./LearnLatestSkills";

import HeroRightImage2 from "./HeroRightImage2";
import HeroRightImage from "./HeroRightImage";

import FAQsection from "./FAQsection";
import WorldClassInstructors from "./WorldClassInstructors";

// import custom components

// import layouts
import NavbarLanding from "../../dimp-home/NavbarLanding";
import FooterCenter from "../../dimp-home/FooterWithLinks";

// import data files
const Creatives = () => {
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

        <TemplatesNoPlay />

        <section className="px-lg-12 px-4 py-4 py-lg-12 bg-white">
          <HeroLeftImage />
        </section>

        <section className="px-lg-12 px-4 py-4 py-lg-12 bg-white">
          <HeroRightImage />
          <div className="my-6 my-lg-10 lh-2 mb-5 border-bottom"></div>
          <HeroLeftImage2 />
          <div className="my-6 my-lg-10 lh-2 mb-5 border-bottom"></div>

          <HeroRightImage2 />
        </section>

        <hr className="my-0 bg-transparent text-white" />

        <FAQsection />
      </main>

      {/*   Footer with center alignment */}
      <FooterCenter />
    </Fragment>
  );
};

export default Creatives;
