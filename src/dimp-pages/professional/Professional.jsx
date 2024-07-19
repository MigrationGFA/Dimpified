// import node module libraries
import React, { Fragment, useEffect } from "react";

// import sub components
import HeroGradient from "./HeroGradient";

import TemplatesNoPlay from "./TemplatesNoPlay";

import HeroLeftImage from "./HeroLeftImage";
import HeroRightImage from "./HeroRightImage";
import HeroRightImage2 from "./HeroRightImage2"

import HeroLeftImage2 from "./HeroLeftImage2";

import FAQsection from "./FAQsection";

// import layouts
import NavbarLanding from "../../dimp-home/NavbarLanding";
import FooterCenter from "../../dimp-home/FooterWithLinks";

// import data files
import LogoList2 from "../../data/marketing/clientlogos/LogoList2";

const Professional = () => {
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
        <HeroGradient />

        {/*  Building strong foundational skills */}

        
        <TemplatesNoPlay />
        <section className=" px-lg-12 px-4 py-lg-10 bg-white">
          <HeroLeftImage />
        </section>
        <section className=" px-lg-12 px-4 py-lg-10 bg-white">
          <HeroRightImage />
        </section>

        <section className="px-lg-12 px-4 py-4 py-lg-16 bg-white">
          <HeroLeftImage2 />
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

export default Professional;
