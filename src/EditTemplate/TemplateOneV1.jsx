// import node module libraries
import React, { useState } from "react";

import { useEffect } from "react";
import EditableBlock from "./EditableBlock";
import { useSelector, useDispatch } from "react-redux";
import { updateContent, updateStyles } from "../features/Template/Template1";
import { setActiveSection } from "../features/Template/activeTemplateSection";
import SideEditor from "./SideEditor";
import { Container } from "react-bootstrap";

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

const TemplateOne = () => {
  useResponsiveNavbar();

  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };
  const [activePanel, setActivePanel] = useState(null);

  const [styles, setStyles] = useState({
    home: {
      backgroundColor: "#ffffff",
      color: "#000000",
      fontFamily: "Arial, sans-serif",
      fontStyle: "normal",
      border: "1px solid #000",
      padding: "10px",
    },
    about: {
      backgroundColor: "#ffffff",
      color: "#000000",
      fontFamily: "Arial, sans-serif",
      fontStyle: "normal",
      border: "1px solid #000",
      padding: "10px",
    },
    who: {
      backgroundColor: "#ffffff",
      color: "#000000",
      fontFamily: "Arial, sans-serif",
      fontStyle: "normal",
      border: "1px solid #000",
      padding: "10px",
    },
    contact: {
      backgroundColor: "#ffffff",
      color: "#000000",
      fontFamily: "Arial, sans-serif",
      fontStyle: "normal",
      border: "1px solid #000",
      padding: "10px",
    },
    faq: {
      backgroundColor: "#ffffff",
      color: "#000000",
      fontFamily: "Arial, sans-serif",
      fontStyle: "normal",
      border: "1px solid #000",
      padding: "10px",
    },
  });

  const renderSection = (id, children) => (
    <section
      id={id}
      className="py-5"
      style={styles[id]}
      onClick={() => setActiveSection(id)}
    >
      <Container>{children}</Container>
    </section>
  );

  const togglePanel = (panel) => {
    setActivePanel(activePanel === panel ? null : panel);
  };
  return (
    <div>
      <style>
        {`




@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"');

@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
body,
p {
  font-family: "Poppins", sans-serif;
  line-height: 26px;
  font-size: 16px;
  color: #888888;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #1c1c24;
  font-family: "Poppins", sans-serif;
}

h1,
h2 {
  font-family: "Poppins", sans-serif;
}

h1 {
  font-size: 36px;
  line-height: 36px;
  font-weight: 900;
}

h2 {
  font-size: 30px;
  line-height: 36px;
  font-weight: 700;
}

h3 {
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: 700;
}

h4 {
  font-size: 18px;
  line-height: 28px;
  font-weight: 700;
}

h5 {
  font-size: 14px;
  line-height: 24px;
}




/* Global styles
================================================== */
html {
  overflow-x: hidden !important;
  width: 100%;
  height: 100%;
  position: relative;
  text-rendering: optimizeLegibility;
}

body {
  border: 0;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

ul {
  padding: 0;
  margin: 0;
}

a:link,
a:visited {
  text-decoration: none;
}

a {
  color: #038c25;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
}

a:hover {
  text-decoration: none;
  color: #038c25;
}

a.read-more {
  color: #038c25;
  font-weight: 700;
}

a.read-more:hover {
  color: #222;
}


          

.body-color {
  background: #161362;
  color: #fff;
}

section,
.section-padding {
  padding: 100px 0;
  position: relative;
}

.section-bg {
  background: #f9fafc;
}

.no-padding {
  padding: 0;
}

.p-60 {
  padding: 60px 0;
}

.media > .pull-left {
  margin-right: 20px;
}

.gap-60 {
  clear: both;
  height: 60px;
}

.gap-40 {
  clear: both;
  height: 40px;
}

.gap-30 {
  clear: both;
  height: 30px;
}

.gap-20 {
  clear: both;
  height: 20px;
}

.mb-25 {
  margin-bottom: 25px;
}

.mb-30 {
  margin-bottom: 30px;
}

.mb-60 {
  margin-bottom: 60px;
}

.mb-70 {
  margin-bottom: 70px;
}

.mb-100 {
  margin-bottom: 100px;
}

.mt-60 {
  margin-top: 60px;
}

.mrb-30 {
  margin-bottom: 30px;
}

.mrb-80 {
  margin-bottom: -80px;
}

.mr-70 {
  margin-right: 70px;
}

.mr-80 {
  margin-right: 80px;
}

.mr-100 {
  margin-right: 100px;
}

.ml-70 {
  margin-left: 70px;
}

.mr-70 {
  margin-right: 70px;
}

.mr-80 {
  margin-right: 80px;
}

.mr-100 {
  margin-right: 100px;
}

.mrt-0 {
  margin-top: 0 !important;
}

.pab {
  padding-bottom: 0;
}

a:focus {
  outline: 0;
}

img.pull-left {
  margin-right: 20px;
  margin-bottom: 20px;
}

img.pull-right {
  margin-left: 20px;
  margin-bottom: 20px;
}

.unstyled {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Dropcap */
.dropcap {
  font-size: 48px;
  line-height: 60px;
  padding: 0 7px;
  display: inline-block;
  float: left;
  font-weight: 700;
  margin: 5px 15px 5px 0;
  position: relative;
  text-transform: uppercase;
}

.btn {
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  background: #038c25;
  height: 50px;
  padding: 0 35px;
  line-height: 50px;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -ms-border-radius: 3px;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
  outline: none;
  text-decoration: none;
  cursor: pointer;
}
.btn:focus {
  outline: none;
}
.btn:hover {
  color: #fff;
  background: #d20055;
  -webkit-box-shadow: 0px 20px 30px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 20px 30px 0px rgba(0, 0, 0, 0.15);
}
.btn.fill {
  background: transparent;
  padding: 0 25px;
  color: #fff;
  margin-left: 20px;
  border: 2px solid #fff;
}
.btn.fill:hover {
  background: #038c25;
  border-color: #038c25;
}
.btn.btn-round {
  border-radius: 36px;
  -webkit-border-radius: 36px;
  -ms-border-radius: 36px;
}

.btn-link {
  font-size: 16px;
  font-weight: 700;
  color: #222222;
  text-decoration: none !important;
}
.btn-link i {
  margin-left: 6px;
  position: relative;
  top: 2px;
}
.btn-link:hover {
  color: #038c25;
}

.section-title,
.column-title {
  font-size: 30px;
  font-weight: 800;
  color: #222222;
  position: relative;
  padding-bottom: 30px;
  margin-bottom: 85px;
  text-align: center;
}
.section-title:after,
.column-title:after {
  position: absolute;
  left: 0;
  top: 0;
  content: "";
  right: 0;
  background-image: url(../images/shap/title.png);
  background-repeat: no-repeat;
  background-size: center center;
  background-position: contain;
  width: 70px;
  height: 10px;
  margin: auto auto 0;
  top: auto;
  bottom: 0;
}
.section-title span,
.column-title span {
  display: block;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  line-height: 26px;
  color: #888888;
  text-transform: uppercase;
  letter-spacing: 1.4px;
  margin-bottom: 10px;
  margin-top: -5px;
}
.section-title.white,
.column-title.white {
  color: #fff;
}
.section-title.white:after,
.column-title.white:after {
  background-image: url(../images/shap/title-white.png);
}
.section-title.white span,
.column-title.white span {
  color: #fff;
}

.column-title {
  margin-bottom: 35px;
  line-height: 42px;
  text-align: left;
}
.column-title span {
  margin-top: 0;
}
.column-title:after {
  right: auto;
}

.ts-title {
  font-size: 24px;
}

.hidden-title {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}

.gradient {
  position: relative;
}
.gradient:before {
  position: absolute;
  left: 0;
  top: 0;
  background-image: -webkit-linear-gradient(
    306deg,
    #321575 0%,
    #8d0b93 51%,
    #ff0066 100%,
    #ff057c 100%
  );
  background-image: -o-linear-gradient(
    306deg,
    #321575 0%,
    #8d0b93 51%,
    #ff0066 100%,
    #ff057c 100%
  );
  background-image: linear-gradient(
    144deg,
    #321575 0%,
    #8d0b93 51%,
    #ff0066 100%,
    #ff057c 100%
  );
  width: 100%;
  height: 100%;
  content: "";
  opacity: 0.902;
}

.overlay:before {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  content: "";
  background: rgba(0, 0, 0, 0.5);
}

/* Pagination */
.pages {
  margin-bottom: -5px;
  text-align: center;
}
.pages .pagination {
  margin: 0;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.pages .pagination li:first-child a,
.pages .pagination li:last-child a {
  border-radius: 50%;
}
.pages .pagination li a {
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -ms-border-radius: 50%;
  margin-right: 8px;
  color: #7c7c7c;
  width: 40px;
  height: 40px;
  padding: 10px 0;
}

.pagination > .active > a,
.pagination > .active > a:hover,
.pagination > li > a:hover {
  color: #fff;
  background: #ff0763;
  border: 1px solid transparent;
}

.color-primary {
  color: #ff057c !important;
}

/*  */
/*==========================
      header area
===========================*/
.header .navbar {
  padding: 10px 0;
}

.header .navbar-brand {
  padding: 0;
}

.header ul.navbar-nav > li > a {
  font-weight: 700;
  font-size: 14px;
  line-height: 78px;
  text-transform: uppercase;
  padding: 0 20px;
  display: block;
}
.header ul.navbar-nav > li > a:hover {
  color: #038c25;
}

.header ul.navbar-nav > li.header-ticket {
  margin-top: 15px;
}
.header ul.navbar-nav > li.header-ticket .ticket-btn {
  height: 40px;
  line-height: 40px;
  padding: 0px 25px;
  background: #00c1c1;
  margin-left: 30px;
}
.header ul.navbar-nav > li.header-ticket .ticket-btn:hover {
  background: #038c25;
}

.header ul.navbar-nav li .dropdown-menu {
  padding: 10px 20px;
  min-width: 230px;
  margin: 0;
  border-radius: 0;
  -webkit-box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2);
  border: none;
}
.header ul.navbar-nav li .dropdown-menu li a {
  padding: 12px 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
  font-size: 14px;
  display: block;
  color: #222;
}
.header ul.navbar-nav li .dropdown-menu li a:hover {
  color: #038c25;
}
.header ul.navbar-nav li .dropdown-menu li:last-child a {
  border-bottom: none;
}

.header.header-transparent {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 2;
  height: auto;
}
.header.header-transparent .navbar-brand {
  padding: 0;
}
.header.header-transparent .navbar-brand img {
  vertical-align: top;
}
.header.header-transparent ul.navbar-nav {
  position: relative;
  top: 5px;
}
.header.header-transparent ul.navbar-nav > li > a {
  color: #fff;
  line-height: 72px;
}
.header.header-transparent.nav-border {
  border-bottom: 1px solid #363d8a;
  padding: 10px 0;
}
.header.header-transparent.nav-border .navbar {
  padding: 0px 0;
}
.header.header-transparent.nav-border
  ul.navbar-nav
  > li.header-ticket
  .ticket-btn {
  background: #3a6af0;
}

.header.h-transparent2 {
  padding: 30px 0;
}
.header.h-transparent2 .navbar.navbar-light ul.navbar-nav > li > a {
  color: #03a64a;
}
.header.h-transparent2 button.navbar-toggler {
  position: absolute;
  right: 0;
  top: -50px;
  padding: 8px 12px;
  font-size: 22px;
}
.header.h-transparent2 .ticket-btn.btn {
  border-radius: 36px;
  -webkit-box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.15);
  background: #fff;
  color: #03a64a;
  font-size: 14px;
  padding: 0 25px;
  height: 40px;
  line-height: 40px;
  padding: 0 25px;
}
.header.h-transparent2 .ticket-btn.btn:hover {
  background: #038c25;
  color: #fff;
}
.header.h-transparent2.sticky {
  background: rgba(255, 255, 255, 0.95);
  -webkit-box-shadow: 0 8px 17px rgba(0, 0, 0, 0.02);
  box-shadow: 0 8px 17px rgba(0, 0, 0, 0.02);
}

.header.header-classic .navbar {
  padding: 0;
}

.header.header-classic ul.navbar-nav {
  margin-top: 5px;
}
.header.header-classic ul.navbar-nav > li > a {
  color: #222222;
  line-height: 74px;
}
.header.header-classic ul.navbar-nav > li > a:hover {
  color: #038c25;
}
.header.header-classic ul.navbar-nav > li.active > a {
  color: #038c25;
}
.header.header-classic ul.navbar-nav > li.header-ticket .ticket-btn {
  background: #038c25;
  color: #fff;
}
.header.header-classic ul.navbar-nav > li.header-ticket .ticket-btn:hover {
  -webkit-box-shadow: none;
  box-shadow: none;
  background: #d20055;
}

.header.sticky {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 99;
  background: rgba(26, 24, 49, 0.95);
  padding: 5px 0;
}
.header.sticky .navbar {
  padding: 0;
}
.header.sticky.fade_down_effect {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
}
.header.sticky.header-classic {
  background: #fff;
  -webkit-box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2);
  padding: 0;
}

.dropdown-menu.show {
  display: none;
}

@media (min-width: 991px) {
  .header ul.navbar-nav li:hover > .dropdown-menu {
    display: block;
    border: none;
  }
}

/*==========================
      hero area
===========================*/
.hero-area {
  padding: 0;
}


.banner-item {
  min-height: 850px;
  color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  -webkit-backface-visibility: hidden;
  position: relative;
}
.banner-item:before {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  content: "";
}
.banner-item .banner-content-wrap {
  padding: 250px 0 182px;
  z-index: 1;
  position: relative;
}
.banner-item .banner-content-wrap .banner-info {
  font-size: 18px;
  font-weight: normal;
  line-height: 24px;
  margin-bottom: 10px;
  color: #fff;
}
.banner-item .banner-content-wrap .banner-title {
  font-size: 64px;
  font-weight: 800;
  color: #fff;
  text-transform: capitalize;
  line-height: 74px;
  margin-bottom: 50px;
}
.banner-item .banner-content-wrap .banner-btn .btn {
  height: 55px;
  line-height: 55px;
  padding: 0 55px;
}
.banner-item .banner-content-wrap .banner-btn .btn.fill {
  padding: 0 25px;
}

.banner-img img {
  max-width: 100%;
}

.countdown {
  margin-bottom: 60px;
}
.hero-area.centerd-item .banner-item {
  min-height: 770px;
  padding: 30px 0;
}
.hero-area.centerd-item .banner-item:before {
  background: url(../images/hero_area/banner_slices2.png) no-repeat center
    center;
  z-index: 1;
}
.hero-area.centerd-item .banner-item:after {
  position: absolute;
  left: 0;
  top: 0;
  margin: auto;
  background: #038c25;
  content: "";
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -ms-border-radius: 50%;
  bottom: 0;
  width: 725px;
  right: 0;
  height: 725px;
}
.hero-area.centerd-item .banner-item .banner-content-wrap {
  padding: 117px;
  z-index: 1;
  position: relative;
}
.hero-area.centerd-item .banner-item .banner-content-wrap .banner-title {
  text-transform: none;
  font-size: 48px;
  line-height: 64px;
  margin-bottom: 40px;
}
.hero-area.centerd-item .banner-item .banner-content-wrap p.banner-title {
  font-size: 20px;
  line-height: 26px;
}
.hero-area.centerd-item .banner-item .countdown {
  margin-bottom: 60px;
}

.hero-area.content-left .banner-item {
  margin: 100px 50px 0;
  min-height: 650px;
  -webkit-box-shadow: 0px 100px 100px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 100px 100px 0px rgba(0, 0, 0, 0.2);
  background-position: top center;
}
.hero-area.content-left .banner-item .banner-content-wrap {
  padding: 115px 0;
}
.hero-area.content-left .banner-item .banner-content-wrap .title-shap-img {
  margin-bottom: 20px;
  max-width: 70px;
}
.hero-area.content-left .banner-item .banner-content-wrap .banner-title {
  text-transform: initial;
  margin-bottom: 20px;
}
.hero-area.content-left .banner-item .banner-content-wrap .banner-info {
  margin-bottom: 35px;
  font-style: italic;
  font-size: 20px;
}

@media (min-width: 1400px) {
  .hero-area.content-left .banner-item {
    max-width: 1350px;
    margin-left: auto;
    margin-right: auto;
  }
}

/*==========================
      intro area
===========================*/
.ts-intro {
  padding: 80px 0 60px;
}

.intro-line {
  background-repeat: no-repeat;
  background-position: center;
}

.single-intro-text {
  padding: 40px 45px 40px 40px;
  -webkit-box-shadow: 0px 20px 25px 0px rgba(0, 0, 0, 0.08);
  box-shadow: 0px 20px 25px 0px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -ms-border-radius: 5px;
  overflow: hidden;
  position: relative;
  background: #fff;
  z-index: 2;
}
.single-intro-text i {
  position: absolute;
  right: -10px;
  top: 20px;
  font-size: 55px;
  color: #bababa;
}
.single-intro-text p {
  margin-bottom: 0;
}
.single-intro-text .count-number {
  position: absolute;
  right: -55px;
  bottom: -55px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -ms-border-radius: 50%;
  background: #038c25;
  color: #fff;
  display: block;
  text-align: left;
  font-size: 16px;
  font-weight: 700;
  padding: 25px 30px;
}

.intro-video {
  width: 700px;
  height: 700px;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -ms-border-radius: 50%;
  position: relative;
  overflow: hidden;
  margin: -130px -160px;
  z-index: 1;
}
.intro-video img {
  width: 100%;
  height: 100%;
}
.intro-video:before {
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#e6005d),
    color-stop(65%, rgba(115, 0, 47, 0.35)),
    to(rgba(0, 0, 0, 0))
  );
  background-image: -webkit-linear-gradient(
    left,
    #e6005d 0%,
    rgba(115, 0, 47, 0.35) 65%,
    rgba(0, 0, 0, 0) 100%
  );
  background-image: -o-linear-gradient(
    left,
    #e6005d 0%,
    rgba(115, 0, 47, 0.35) 65%,
    rgba(0, 0, 0, 0) 100%
  );
  background-image: linear-gradient(
    90deg,
    #e6005d 0%,
    rgba(115, 0, 47, 0.35) 65%,
    rgba(0, 0, 0, 0) 100%
  );
  background-image: -webkit-linear-gradient(
    90deg,
    #e6005d 0%,
    rgba(115, 0, 47, 0.35) 65%,
    rgba(0, 0, 0, 0) 100%
  );
  background-image: -ms-linear-gradient(
    90deg,
    #e6005d 0%,
    rgba(115, 0, 47, 0.35) 65%,
    rgba(0, 0, 0, 0) 100%
  );
  position: absolute;
  left: 0;
  top: 0;
  content: "";
  width: 100%;
  height: 100%;
}

.video-btn {
  right: 0;
  position: absolute;
  left: 0;
  top: 50%;
  margin: auto;
  text-align: center;
  color: #fff;
  font-size: 80px;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
  width: 80px;
  height: 80px;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.video-btn:hover {
  color: #038c25;
}

.ts-intro-item {
  padding: 100px 0 70px;
}
.ts-intro-item .single-intro-text {
  -webkit-box-shadow: 0px 10px 35px 0px rgba(0, 0, 0, 0.08);
  box-shadow: 0px 10px 35px 0px rgba(0, 0, 0, 0.08);
}

.intro-left-content p {
  margin-bottom: 40px;
  padding-right: 10px;
}

.ts-intro.event-intro {
  padding-top: 120px;
  padding-bottom: 0;
}
.ts-intro.event-intro .single-intro-text {
  padding: 35px 50px 40px;
  background: transparent;
  -webkit-box-shadow: none;
  box-shadow: none;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
}
.ts-intro.event-intro .single-intro-text i {
  position: relative;
  left: 0;
  font-size: 64px;
  display: block;
  margin-bottom: 45px;
  color: #fff;
}
.ts-intro.event-intro .single-intro-text .ts-title,
.ts-intro.event-intro .single-intro-text p {
  color: #fff;
}
.ts-intro.event-intro .single-intro-text:hover {
  background: #120f4e;
}

/*==========================
     ts speaker
===========================*/
.ts-speakers {
  padding-top: 120px;
  padding-bottom: 40px;
  position: relative;
  overflow: hidden;
}

.ts-speaker {
  position: relative;
  text-align: center;
  margin-bottom: 55px;
}
.ts-speaker .speaker-img {
  width: 255px;
  height: 255px;
  position: relative;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -ms-border-radius: 50%;
  overflow: hidden;
  margin: auto auto 20px;
}
.ts-speaker .speaker-img img {
  width: 100%;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
}
.ts-speaker .speaker-img:before {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  content: "";
  background: rgba(59, 29, 130, 0.5);
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
  opacity: 0;
  z-index: 1;
}
.ts-speaker .view-speaker {
  position: absolute;
  left: 0;
  top: 70%;
  right: 0;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  color: #fff;
  font-size: 22px;
  width: 50px;
  height: 50px;
  margin: auto;
  border: 2px solid #ddd;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -ms-border-radius: 50%;
  padding: 12px 0;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
  opacity: 0;
  z-index: 2;
}
.ts-speaker .ts-title {
  margin-bottom: 5px;
}
.ts-speaker .ts-title a {
  color: #222222;
}
.ts-speaker:hover .speaker-img img {
  -webkit-transform: scale(1.2);
  -ms-transform: scale(1.2);
  transform: scale(1.2);
}
.ts-speaker:hover .speaker-img:before {
  opacity: 1;
}
.ts-speaker:hover .view-speaker {
  top: 50%;
  opacity: 1;
}
.ts-speaker:hover .ts-title a {
  color: #038c25;
}
.ts-speaker.white-text .ts-title a,
.ts-speaker.white-text p {
  color: #fff;
}

.speaker-classic {
  padding-top: 100px;
}
.speaker-classic .ts-speaker {
  margin-bottom: 60px;
}
.speaker-classic .ts-speaker .speaker-img {
  width: 100%;
  height: auto;
  border-radius: 0;
  -webkit-border-radius: 0;
  -ms-border-radius: 0;
}
.speaker-classic .ts-speaker .ts-speaker-info {
  position: absolute;
  right: 0;
  bottom: -13px;
  background: #fff;
  z-index: 1;
  width: 90%;
  padding: 20px 0 10px;
}
.speaker-classic .ts-speaker .ts-speaker-info .ts-title {
  margin-bottom: 0;
}
.speaker-classic .ts-speaker .ts-speaker-info p {
  margin-bottom: 0;
}

.speaker-shap img {
  position: absolute;
  left: 0;
  top: 0;
  max-width: 100px;
}
.speaker-shap img.shap1 {
  top: 15%;
}
.speaker-shap img.shap2 {
  bottom: 0;
  left: auto;
  top: 35%;
  right: 0;
  margin: auto;
}
.speaker-shap img.shap3 {
  top: auto;
  bottom: -25px;
  margin: auto;
  left: 6%;
}

.ts-speaker-popup {
  background: #fff;
  padding: 0;
  position: relative;
}
.ts-speaker-popup .ts-speaker-popup-img img {
  width: 100%;
}
.ts-speaker-popup .ts-speaker-popup-content {
  padding: 60px 40px;
}
.ts-speaker-popup .ts-speaker-popup-content .ts-title {
  margin-bottom: 10px;
}
.ts-speaker-popup .ts-speaker-popup-content .speakder-designation {
  display: block;
  font-size: 14px;
  margin-bottom: 20px;
}
.ts-speaker-popup .ts-speaker-popup-content .company-logo {
  margin-bottom: 15px;
}
.ts-speaker-popup .ts-speaker-popup-content p {
  margin-bottom: 25px;
}
.ts-speaker-popup .ts-speaker-popup-content h4 {
  font-size: 20px;
  font-weight: 700;
}
.ts-speaker-popup .ts-speaker-popup-content .session-name {
  margin-bottom: 15px;
}
.ts-speaker-popup .ts-speaker-popup-content .speaker-session-info p {
  color: #038c25;
  margin-bottom: 30px;
}
.ts-speaker-popup .ts-speaker-popup-content .ts-speakers-social a {
  color: #ababab;
  margin-right: 18px;
}
.ts-speaker-popup .ts-speaker-popup-content .ts-speakers-social a:hover {
  color: #038c25;
}
.ts-speaker-popup button.mfp-close {
  font-size: 30px;
}

/*==========================
     ts-experiences
===========================*/
.ts-experiences {
  padding: 0;
  overflow: hidden;
  background: #d97823;
}
.ts-experiences .exp-img {
  min-height: 480px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

.ts-exp-wrap {
  background: #038c25;
  min-height: 480px;
  position: relative;
}
.ts-exp-wrap:before {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  content: "";
  background: url(../images/shap/cta_bg.png) no-repeat 100% / cover;
}
.ts-exp-wrap:after {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  content: "";
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#321575),
    color-stop(51%, #8d0b93),
    color-stop(100%, #ff0066),
    to(#ff057c)
  );
  background-image: -webkit-linear-gradient(
    left,
    #321575 0%,
    #8d0b93 51%,
    #ff0066 100%,
    #ff057c 100%
  );
  background-image: -o-linear-gradient(
    left,
    #321575 0%,
    #8d0b93 51%,
    #ff0066 100%,
    #ff057c 100%
  );
  background-image: linear-gradient(
    90deg,
    #321575 0%,
    #8d0b93 51%,
    #ff0066 100%,
    #ff057c 100%
  );
  opacity: 0.302;
}
.ts-exp-wrap .ts-exp-content {
  max-width: 560px;
  padding: 100px 80px;
  position: relative;
  z-index: 1;
}
.ts-exp-wrap .ts-exp-content .column-title {
  color: #fff;
  font-weight: 600;
  margin-bottom: 10px;
}
.ts-exp-wrap .ts-exp-content .column-title span {
  color: #fff;
}
.ts-exp-wrap .ts-exp-content .column-title:after {
  display: none;
}
.ts-exp-wrap .ts-exp-content p {
  margin-bottom: 30px;
  color: #fff;
}
.ts-exp-wrap .ts-exp-content p strong {
  font-size: 48px;
  font-weight: 700;
  color: #fff;
}
.ts-exp-wrap .ts-exp-content p span {
  font-size: 14px;
  font-weight: 400;
  line-height: 26px;
  color: #fff;
  margin-left: 10px;
  top: -20px;
  position: relative;
}

/*============================
 ts schedule 
 ===========================*/
.ts-schedule-info {
  position: relative;
}
.ts-schedule-info ul {
  position: relative;
  text-align: center;
  border: none;
  min-height: 380px;
}
.ts-schedule-info ul li a {
  height: 245px;
  width: 245px;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -ms-border-radius: 50%;
  background-image: -webkit-linear-gradient(
    135deg,
    #22e1ff 0%,
    #1d8fe1 49%,
    #625eb1 100%
  );
  background-image: -o-linear-gradient(
    135deg,
    #22e1ff 0%,
    #1d8fe1 49%,
    #625eb1 100%
  );
  background-image: linear-gradient(
    -45deg,
    #22e1ff 0%,
    #1d8fe1 49%,
    #625eb1 100%
  );
  background-image: -webkit-linear-gradient(
    -45deg,
    #22e1ff 0%,
    #1d8fe1 49%,
    #625eb1 100%
  );
  background-image: -ms-linear-gradient(
    -45deg,
    #22e1ff 0%,
    #1d8fe1 49%,
    #625eb1 100%
  );
  opacity: 0.502;
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  color: #fff;
  padding: 100px 0;
}
.ts-schedule-info ul li a h3 {
  font-size: 30px;
  font-weight: 700;
  color: #fff;
  opacity: 0.5;
}
.ts-schedule-info ul li a span {
  text-transform: capitalize;
  opacity: 0.5;
}
.ts-schedule-info ul li:nth-child(1) a {
  top: 140px;
  background-image: -webkit-linear-gradient(340deg, #fc6076 0%, #ff9a44 100%);
  background-image: -o-linear-gradient(340deg, #fc6076 0%, #ff9a44 100%);
  background-image: linear-gradient(110deg, #fc6076 0%, #ff9a44 100%);
}
.ts-schedule-info ul li:nth-child(2) a {
  left: 130px;
  top: -15px;
}
.ts-schedule-info ul li:nth-child(3) a {
  top: 100px;
  left: auto;
  right: 0;
  background-image: -webkit-radial-gradient(
    50% 50%,
    circle closest-side,
    #57c6e1 0%,
    #b49fda 0%,
    #7ac5d8 0%,
    #eea2a2 0%,
    #b1aff0 0%,
    #836df0 100%
  );
  background-image: -o-radial-gradient(
    50% 50%,
    circle closest-side,
    #57c6e1 0%,
    #b49fda 0%,
    #7ac5d8 0%,
    #eea2a2 0%,
    #b1aff0 0%,
    #836df0 100%
  );
  background-image: radial-gradient(
    50% 50%,
    circle closest-side,
    #57c6e1 0%,
    #b49fda 0%,
    #7ac5d8 0%,
    #eea2a2 0%,
    #b1aff0 0%,
    #836df0 100%
  );
}
.ts-schedule-info ul li a.active {
  -webkit-box-shadow: 0px 20px 30px 0px rgba(0, 0, 0, 0.12);
  box-shadow: 0px 20px 30px 0px rgba(0, 0, 0, 0.12);
  opacity: 1;
  z-index: 2;
}
.ts-schedule-info ul li a.active h3,
.ts-schedule-info ul li a.active span {
  opacity: 1;
}

.schedule-listing {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
}
.schedule-listing .schedule-slot-time {
  background: #d20055;
  color: #fff;
  padding: 60px 28px;
  font-size: 18px;
  font-weight: 700;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 18%;
  flex: 0 0 18%;
  max-width: 18%;
}
.schedule-listing .schedule-slot-time span {
  display: block;
  line-height: 26px;
}
.schedule-listing .schedule-slot-info {
  position: relative;
  padding: 35px 40px 35px 170px;
  border: 1px dashed #e5e5e5;
  border-left: none;
  width: 100%;
}
.schedule-listing .schedule-slot-info .schedule-slot-speakers {
  position: absolute;
  left: 40px;
  top: 0;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -ms-border-radius: 50%;
  bottom: 0;
  margin: auto;
}
.schedule-listing .schedule-slot-info .schedule-slot-title {
  font-size: 24px;
}
.schedule-listing .schedule-slot-info .schedule-slot-title strong {
  font-size: 14px;
  color: #888888;
  margin-left: 12px;
}
.schedule-listing .schedule-slot-info p {
  margin-bottom: 0;
}
.schedule-listing:hover .schedule-slot-title {
  color: #03a64a;
}
.schedule-listing:nth-of-type(even) .schedule-slot-time {
  background: #038c25;
}
.schedule-listing.launce .schedule-slot-time {
  padding: 40px 28px;
}
.schedule-listing.launce .schedule-slot-title {
  float: left;
  margin-bottom: 0;
}
.schedule-listing.launce .schedule-slot-info-content img {
  float: right;
}

.schedule-listing-btn {
  text-align: center;
  margin-top: 60px;
}

.schedule-tabs .tab-pane.active,
.direction-tabs .tab-pane.active {
  -webkit-animation-name: fadeRight;
  animation-name: fadeRight;
  -webkit-animation-duration: 1.5s;
  animation-duration: 1.5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeRight {
  from {
    opacity: 0;
    -webkit-transform: translate3d(20px, 0, 0);
    transform: translate3d(20px, 0, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeRight {
  from {
    opacity: 0;
    -webkit-transform: translate3d(20px, 0, 0);
    transform: translate3d(20px, 0, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.ts-schedule-nav {
  text-align: center;
  margin-bottom: 90px;
}
.ts-schedule-nav ul {
  border: none;
}
.ts-schedule-nav ul li {
  margin: 0 3px;
}
.ts-schedule-nav ul li a {
  font-size: 12px;
  color: #222222;
  text-transform: uppercase;
  background: #f1f0f6;
  display: block;
  padding: 20px 50px;
  position: relative;
}
.ts-schedule-nav ul li a:before {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 15px 15px 0;
  border-color: transparent #038c25 transparent transparent;
  position: absolute;
  left: 0;
  bottom: -15px;
  content: "";
  opacity: 0;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
}
.ts-schedule-nav ul li a h3 {
  font-size: 24px;
  font-weight: 400;
  color: #222222;
  margin-bottom: 0;
  text-transform: capitalize;
}
.ts-schedule-nav ul li a.active {
  background: #038c25;
  color: #fff;
}
.ts-schedule-nav ul li a.active h3 {
  color: #fff;
}
.ts-schedule-nav ul li a.active:before {
  opacity: 1;
}

.schedule-tabs-item .schedule-listing-item {
  position: relative;
}
.schedule-tabs-item .schedule-listing-item .schedule-slot-time {
  font-size: 14px;
  color: #038c25;
  margin-bottom: 10px;
  display: block;
}
.schedule-tabs-item .schedule-listing-item .schedule-slot-title {
  margin-bottom: 10px;
}
.schedule-tabs-item .schedule-listing-item .schedule-slot-name {
  font-size: 14px;
  line-height: 36px;
  color: #888888;
  font-weight: 700;
  margin-bottom: 5px;
}
.schedule-tabs-item .schedule-listing-item .schedule-slot-speakers {
  position: absolute;
  top: 60px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -ms-border-radius: 50%;
  -webkit-box-shadow: 19.799px 19.799px 40px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 19.799px 19.799px 40px 0px rgba(0, 0, 0, 0.1);
  background-image: -webkit-linear-gradient(315deg, #82e182 0%, #0acbf5 100%);
  background-image: -o-linear-gradient(315deg, #82e182 0%, #0acbf5 100%);
  background-image: linear-gradient(135deg, #82e182 0%, #0acbf5 100%);
}
.schedule-tabs-item .schedule-listing-item:before {
  position: absolute;
  top: -30px;
  width: 2px;
  height: 100%;
  content: "";
  background: #f1f0f6;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
}
.schedule-tabs-item .schedule-listing-item:after {
  position: absolute;
  width: 10px;
  height: 10px;
  content: "";
  border: 2px solid #038c25;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -ms-border-radius: 50%;
  top: 80px;
  background: #fff;
}
.schedule-tabs-item .schedule-listing-item.schedule-left {
  padding: 60px 125px 20px 0;
  text-align: right;
  margin-top: 245px;
}
.schedule-tabs-item
  .schedule-listing-item.schedule-left
  .schedule-slot-speakers {
  right: 30px;
}
.schedule-tabs-item .schedule-listing-item.schedule-left:before {
  right: -17px;
}
.schedule-tabs-item .schedule-listing-item.schedule-left:after {
  right: -21px;
}
.schedule-tabs-item .schedule-listing-item.schedule-right {
  padding: 60px 20px 0px 125px;
  text-align: left;
}
.schedule-tabs-item
  .schedule-listing-item.schedule-right
  .schedule-slot-speakers {
  left: 30px;
}
.schedule-tabs-item .schedule-listing-item.schedule-right:before {
  left: -15px;
}
.schedule-tabs-item .schedule-listing-item.schedule-right:after {
  left: -19px;
}
.schedule-tabs-item .schedule-listing-item:hover:before {
  background: #038c25;
}

@media (min-width: 1024px) {
  .box-style {
    padding-bottom: 150px;
  }
  .box-style .row {
    position: relative;
  }
  .box-style .row .item .about-intro-text {
    padding: 50px 55px 0 55px;
  }
  .box-style .indicator {
    position: absolute;
    content: "";
    height: 100%;
    left: 33.3333333333%;
    position: absolute;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    -webkit-transition: left 500ms cubic-bezier(0.694, 0, 0.335, 1);
    -o-transition: left 500ms cubic-bezier(0.694, 0, 0.335, 1);
    transition: left 500ms cubic-bezier(0.694, 0, 0.335, 1);
    width: 33.3333333333%;
    z-index: -1;
    -webkit-box-shadow: 0px 15px 60px 0px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 15px 60px 0px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }
  .box-style .row .item:nth-child(1):hover ~ .indicator {
    left: 0;
  }
  .box-style .row .item:nth-child(3):hover ~ .indicator {
    left: 66.6666666%;
  }
}

/*====================================
      ts-pricing
=====================================*/
.ts-pricing {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.ts-pricing .speaker-shap .shap2 {
  top: 150px;
  bottom: auto;
}
.ts-pricing.p-60 {
  padding-top: 20px;
}
.ts-pricing-bg {
  position: relative;
}
.ts-pricing-bg::before {
  position: absolute;
  content: "";
  background-color: transparent;
  background-image: -webkit-linear-gradient(
    306deg,
    rgba(68, 63, 198, 0.85) 0%,
    #038c25 60%
  );
  background-image: -o-linear-gradient(
    306deg,
    rgba(68, 63, 198, 0.85) 0%,
    #038c25 60%
  );
  background-image: linear-gradient(
    144deg,
    rgba(68, 63, 198, 0.85) 0%,
    #038c25 60%
  );
  opacity: 0.95;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  -webkit-filter: brightness(57%) contrast(123%) saturate(100%) blur(0)
    hue-rotate(0deg);
  filter: brightness(57%) contrast(123%) saturate(100%) blur(0) hue-rotate(0deg);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

.pricing-dot {
  width: 100%;
  display: block;
}

.pricing-dot1 {
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
  display: block;
  width: 100%;
  margin-top: -2px;
}

.pricing-item {
  position: relative;
  max-width: 320px;
  margin: auto;
}
.pricing-item.disebled {
  opacity: 0.7;
  cursor: no-drop;
}
.pricing-item.disebled .btn {
  background: #a077a6;
  cursor: no-drop;
}

.ts-pricing-box {
  background: #fff;
  padding: 40px;
  text-align: center;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
}
.ts-pricing-box:hover {
  -webkit-box-shadow: 0px 20px 30px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 20px 30px 0px rgba(0, 0, 0, 0.4);
}
.ts-pricing-box .ts-pricing-header .ts-pricing-name {
  font-size: 20px;
  font-weight: 800;
  color: #03a64a;
  text-transform: uppercase;
  margin-bottom: 15px;
}
.ts-pricing-box .ts-pricing-header .ts-pricing-price {
  font-size: 58px;
  font-weight: 900;
  color: #03a64a;
  margin-bottom: 20px;
}
.ts-pricing-box .ts-pricing-header .ts-pricing-price span {
  margin-right: 10px;
}
.ts-pricing-box .ts-pricing-progress .ts-pricing-value {
  font-weight: 700;
  color: #038c25;
  margin-bottom: 25px;
}
.ts-pricing-box .ts-progress {
  width: 100%;
  height: 10px;
  background: #ebedf4;
  margin-bottom: 10px;
}
.ts-pricing-box .ts-progress .ts-progress-inner {
  background-image: -webkit-linear-gradient(
    306deg,
    #321575 0%,
    #8d0b93 51%,
    #ff0066 100%,
    #ff057c 100%
  );
  background-image: -o-linear-gradient(
    306deg,
    #321575 0%,
    #8d0b93 51%,
    #ff0066 100%,
    #ff057c 100%
  );
  background-image: linear-gradient(
    144deg,
    #321575 0%,
    #8d0b93 51%,
    #ff0066 100%,
    #ff057c 100%
  );
  height: 100%;
}
.ts-pricing-box .promotional-code .promo-code-text {
  font-weight: 400;
  color: #038c25;
}
.ts-pricing-box .pricing-btn {
  margin-bottom: 25px;
  position: relative;
}
.ts-pricing-box .pricing-btn:before,
.ts-pricing-box .pricing-btn:after {
  position: absolute;
  left: -14px;
  top: 0;
  content: "";
  width: 25px;
  height: 25px;
  display: block;
  background: #fff;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -ms-border-radius: 50%;
  bottom: 0;
  margin: auto;
}
.ts-pricing-box .pricing-btn:after {
  position: absolute;
  left: auto;
  top: 0;
  right: -14px;
}
.ts-pricing-box .vate-text {
  margin-bottom: 0;
}

.ts-pricing-item {
  text-align: center;
  background: #fff;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -ms-border-radius: 5px;
  padding: 40px;
  margin-top: 50px;
}
.ts-pricing-item .ts-pricing-header i {
  font-size: 70px;
  height: 160px;
  width: 160px;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -ms-border-radius: 50%;
  display: block;
  margin: auto;
  background: #03a64a;
  color: #fff;
  padding: 45px 0;
  margin-top: -100px;
  margin-bottom: 40px;
}
.ts-pricing-item .ts-pricing-name {
  font-size: 24px;
  font-weight: 700;
  color: #03a64a;
  margin-bottom: 35px;
}
.ts-pricing-item .ts-pricing-price {
  font-size: 48px;
  font-weight: 800;
  position: relative;
  margin-bottom: 50px;
}
.ts-pricing-item .ts-pricing-price img {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  text-align: center;
  top: 0;
}
.ts-pricing-item .ts-pricing-price span {
  position: relative;
  z-index: 1;
  color: #03a64a;
}
.ts-pricing-item p {
  margin-bottom: 30px;
}
.ts-pricing-item .btn {
  background: #03a64a;
}
.ts-pricing-item.disebled {
  cursor: no-drop;
  opacity: 0.7;
}
.ts-pricing-item.disebled .ts-pricing-header i {
  background: #e7e7e7;
}
.ts-pricing-item.disebled .ts-pricing-header .ts-pricing-name {
  color: #cccccc;
}
.ts-pricing-item.disebled .ts-pricing-price span {
  opacity: 0.5;
}
.ts-pricing-item.disebled .btn {
  background: #e7e7e7;
}
.ts-pricing-item.active .ts-pricing-header i,
.ts-pricing-item.active .btn {
  background: #038c25;
}
.ts-pricing-item.active .ts-pricing-name,
.ts-pricing-item.active .ts-pricing-price span {
  color: #038c25;
}

.ts-pricing.classic .ts-pricing-item {
  -webkit-box-shadow: 19.799px 19.799px 40px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 19.799px 19.799px 40px 0px rgba(0, 0, 0, 0.1);
}

.pricing-wrap .pricing-item .ts-pricing-box {
  background: #120f4e;
}
.pricing-wrap .pricing-item .ts-pricing-box .ts-pricing-name,
.pricing-wrap .pricing-item .ts-pricing-box .ts-pricing-price,
.pricing-wrap .pricing-item .ts-pricing-box .amount-progres-text,
.pricing-wrap .pricing-item .ts-pricing-box .vate-text {
  color: #fff;
}
.pricing-wrap .pricing-item .ts-pricing-box .pricing-btn:before,
.pricing-wrap .pricing-item .ts-pricing-box .pricing-btn:after {
  background: #120f4e;
}

/*=================================
   blog
 =================================*/
.ts-blog {
  padding-bottom: 70px;
}
.ts-blog .speaker-shap .shap2 {
  top: 200px;
  bottom: auto;
}
.ts-blog .speaker-shap .shap1 {
  top: auto;
  bottom: 25%;
}
.ts-blog .post .post-body {
  -webkit-box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.05);
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.05);
}
.ts-blog .post .post-body .entry-header .entry-title {
  font-size: 24px;
  font-weight: 700;
}
.ts-blog .post:hover .post-body {
  -webkit-box-shadow: 0px 20px 30px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 20px 30px 0px rgba(0, 0, 0, 0.1);
}
.ts-blog .post.white-text .post-body {
  background: #120f4e;
}
.ts-blog .post.white-text .post-body .entry-header .entry-title a,
.ts-blog .post.white-text .post-body .entry-content p,
.ts-blog .post.white-text .post-body .post-footer .btn-link {
  color: #fff;
}

.post-meta {
  font-size: 13px;
  margin-bottom: 15px;
}
.post-meta .post-author {
  margin-right: 25px;
  text-transform: uppercase;
}
.post-meta .post-meta-date {
  display: inline-block;
  color: #038c25;
  text-transform: uppercase;
  word-spacing: 5px;
}

.post .post-media.post-image {
  width: calc(100% - 40px);
  margin: 0 auto 5px auto;
  position: relative;
}
.post .post-media.post-image img {
  -webkit-box-shadow: 0px 15px 20px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 15px 20px 0px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
}

.post .post-body {
  padding: 150px 20px 25px 30px;
  margin: -130px 0px 30px;
  -webkit-box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.05);
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  background: #fff;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
}
.post .post-body .entry-header .entry-title {
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 15px;
}
.post .post-body .entry-header .entry-title a {
  color: #222222;
}
.post .post-body .entry-header .entry-title a:hover {
  color: #03a64a;
}
.post .post-body .entry-content p {
  line-height: 26px;
  color: #888888;
}

.post:hover .post-body {
  -webkit-box-shadow: 0px 20px 30px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 20px 30px 0px rgba(0, 0, 0, 0.1);
}
.post:hover .post-body .entry-header .entry-title a {
  color: #03a64a;
}

.main-container .post .post-body {
  margin-bottom: 50px;
}

.post-meta {
  font-size: 13px;
  margin-bottom: 15px;
}
.post-meta .post-author {
  margin-right: 25px;
  text-transform: uppercase;
}
.post-meta .post-meta-date {
  display: inline-block;
  color: #038c25;
  text-transform: uppercase;
}

.post .post-media.post-image {
  width: calc(100% - 40px);
  margin: 0 auto 5px auto;
  position: relative;
}
.post .post-media.post-image img {
  -webkit-box-shadow: 0px 15px 20px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 15px 20px 0px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
}

.post .post-body {
  padding: 150px 20px 25px 30px;
  margin: -130px 0px 30px;
  -webkit-box-shadow: 0px 20px 30px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 20px 30px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}
.post .post-body .entry-header .entry-title {
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 15px;
}
.post .post-body .entry-header .entry-title a {
  color: #03a64a;
}
.post .post-body .entry-header .entry-title a:hover {
  color: #038c25;
}
.post .post-body .entry-content p {
  line-height: 26px;
  color: #888888;
}

/*==========================
      sponsors
============================*/
.ts-intro-sponsors {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.ts-intro-sponsors .sponsors-logo img {
  margin: 0 38px 50px;
}

/*==========================
      map direction
============================*/
.ts-map-direction .speaker-shap .shap4 {
  left: auto;
  right: 0;
  top: 200px;
}

.ts-map-direction .speaker-shap .shap2 {
  right: 40px;
}

.location-form .form-group {
  margin-bottom: 20px;
}
.location-form .form-group label {
  font-weight: 700;
}
.location-form .form-group .form-control {
  width: 100%;
  height: 55px;
  border-radius: 0;
  -webkit-border-radius: 0;
  -ms-border-radius: 0;
  padding: 0 20px;
}
.location-form .form-group .form-control:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
}

.checkbox-list {
  margin-bottom: 35px;
}
.checkbox-list .single-check-mark {
  display: inline-block;
  position: relative;
}
.checkbox-list .single-check-mark input[type="radio"] {
  display: none;
}
.checkbox-list .single-check-mark label {
  cursor: pointer;
  margin: 0 40px 0 30px;
}
.checkbox-list .single-check-mark input[type="radio"] + label:before {
  background: transparent;
  content: "";
  height: 10px;
  position: absolute;
  top: 8px;
  width: 10px;
  border-radius: 50%;
  display: inline-block;
  z-index: 2;
  left: 5px;
  background: #038c25;
  opacity: 0;
}
.checkbox-list .single-check-mark input[type="radio"] + label:after {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #d4d4d4;
  content: "";
  position: absolute;
  display: inline-block;
  left: 0px;
  top: 3px;
}
.checkbox-list .single-check-mark input[type="radio"]:checked + label::before {
  opacity: 1;
}
.checkbox-list .single-check-mark:last-of-type label {
  margin-right: 0;
}

.ts-map .mapouter .gmap_canvas {
  position: relative;
  height: 535px;
  width: 535px;
  overflow: hidden;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -ms-border-radius: 50%;
  border: none;
}
.ts-map .mapouter .gmap_canvas iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  border: none;
}

.ts-map-tabs ul {
  padding: 0;
  margin-bottom: 40px;
}
.ts-map-tabs ul li {
  position: relative;
}
.ts-map-tabs ul li:before {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  top: auto;
  content: "";
  background: #f5f5f5;
  width: 100%;
  height: 2px;
}
.ts-map-tabs ul li a {
  font-size: 16px;
  color: #888888;
  font-weight: 700;
  border-bottom: 2px solid transparent;
  position: relative;
  padding: 8px 15px;
  margin-right: 20px;
}
.ts-map-tabs ul li a:before {
  position: absolute;
  left: 0;
  top: 39px;
  content: "";
  width: 10px;
  height: 10px;
  display: block;
  border: 2px solid #038c25;
  right: 0;
  margin: auto;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  border-top: 0;
  border-left: 0;
  background: #fff;
  opacity: 0;
  visibility: hidden;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
}
.ts-map-tabs ul li a.active {
  color: #038c25;
  border-color: #038c25;
}
.ts-map-tabs ul li a.active:before {
  opacity: 1;
  visibility: visible;
}
.ts-map-tabs ul li:last-child a {
  margin-right: 0;
}

.direction-tabs-content .contact-info-box {
  position: relative;
}

.direction-tabs-content h3 {
  font-size: 20px;
  margin-bottom: 15px;
}

.direction-tabs-content p {
  margin-bottom: 5px;
}
.direction-tabs-content p strong {
  font-weight: 700;
  color: #222;
}

.direction-tabs-content p.derecttion-vanue {
  margin-bottom: 30px;
}

/*====================================
         ts-book-seat
 ====================================*/
.ts-book-seat {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;
}
.ts-book-seat:before {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  content: "";
  background: rgba(0, 0, 0, 0.65);
}
.ts-book-seat:after {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url(../images/lines-2.png);
  content: "";
  background-repeat: no-repeat;
  background-position: center;
  z-index: 0;
}
.ts-book-seat .book-seat-content {
  position: relative;
  z-index: 1;
}
.ts-book-seat .book-seat-content .section-title {
  margin-bottom: 40px;
}
.ts-book-seat .book-seat-content p {
  color: #fff;
  margin-bottom: 20px;
}

/*====================================
         ts newsletter
 ====================================*/
.ts-footer-newsletter {
  position: relative;
}

.ts-newsletter {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-color: #03a64a;
  padding: 55px 0 60px;
  position: absolute;
  width: 100%;
  z-index: 1;
}
.ts-newsletter:before,
.ts-newsletter:after {
  position: absolute;
  left: 0;
  top: 0;
  content: "";
  background: url(../images/shap/subscribe_slice_left.png) no-repeat;
  height: 100%;
  width: 100%;
  background-position: center;
  background-size: cover;
}
.ts-newsletter:after {
  background: url(../images/shap/subscribe_slice_right.png) no-repeat;
  left: auto;
  right: 0;
  background-size: cover;
}
.ts-newsletter .ts-newsletter-content {
  position: relative;
  z-index: 1;
}
.ts-newsletter .ts-newsletter-content .section-title {
  padding-bottom: 0;
  margin-bottom: 55px;
  color: #fff;
}
.ts-newsletter .ts-newsletter-content .section-title span {
  color: #fff;
}
.ts-newsletter .ts-newsletter-content .section-title:after {
  display: none;
}

.newsletter-form {
  position: relative;
  z-index: 1;
}
.newsletter-form .email-form-group {
  margin-right: 10px;
}
.newsletter-form .email-form-group .form-control {
  background: transparent;
  border: none;
  border-bottom: 1px solid #6f55b0;
  border-radius: 0;
  -webkit-border-radius: 0;
  -ms-border-radius: 0;
  font-size: 14px;
  line-height: 40px;
  padding: 0;
  color: #fff;
}
.newsletter-form .email-form-group .form-control:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
  outline: none;
}
.newsletter-form .email-form-group .form-control::-webkit-input-placeholder {
  color: #fff;
}
.newsletter-form .email-form-group .form-control:-ms-input-placeholder {
  color: #fff;
}
.newsletter-form .email-form-group .form-control::-ms-input-placeholder {
  color: #fff;
}
.newsletter-form .email-form-group .form-control::placeholder {
  color: #fff;
}

/*================================
      ts-footer
 ==================================*/
.ts-footer {
  background: #1a1831;
  padding: 250px 0 50px;
}

.ts-footer-social ul {
  padding: 0;
}
.ts-footer-social ul li {
  display: inline-block;
  list-style: none;
}
.ts-footer-social ul li a {
  display: block;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -ms-border-radius: 50%;
  border: 1px solid #525164;
  text-align: center;
  color: #fff;
  font-size: 14px;
  padding: 7px 0;
  margin: 0 5px;
}
.ts-footer-social ul li a:hover {
  background: #038c25;
  border-color: #038c25;
  -webkit-transform: rotate(360deg);
  -ms-transform: rotate(360deg);
  transform: rotate(360deg);
}

.footer-menu ul li {
  display: inline-block;
}
.footer-menu ul li a {
  color: #a8a8ad;
  margin: 0 20px;
  position: relative;
}
.footer-menu ul li a:before {
  position: absolute;
  left: -24px;
  top: 1px;
  bottom: 0;
  margin: auto;
  content: "";
  background: #5f5e6f;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -ms-border-radius: 50%;
}
.footer-menu ul li a:hover {
  color: #038c25;
}
.footer-menu ul li:first-child a:before {
  display: none;
}

.copyright-text p {
  margin-bottom: 0;
  color: #a8a8ad;
}

.ts-footer.ts-footer-item {
  background: transparent;
  padding: 0px 0;
}
.ts-footer.ts-footer-item .footer-border {
  border-top: 1px solid #2e2b72;
  padding: 60px 0;
}
.ts-footer.ts-footer-item .footer-menu ul li a {
  color: #fff;
}
.ts-footer.ts-footer-item .footer-menu ul li a:before {
  display: none;
}
.ts-footer.ts-footer-item .footer-menu ul li:first-child a {
  margin-left: 0;
}
.ts-footer.ts-footer-item .ts-footer-social ul li a {
  border-color: #464482;
}
.ts-footer.ts-footer-item .newsletter-form {
  margin-bottom: 35px;
  margin-top: -15px;
}
.ts-footer.ts-footer-item .newsletter-form .email-form-group .form-control {
  border-bottom-color: #464482;
}
.ts-footer.ts-footer-item .copyright-text p {
  color: #fff;
}

/*==================================
   ts funfact 
 ==================================*/
.ts-funfact {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  padding: 80px 0;
}

.ts-single-funfact {
  padding-right: 100px;
  position: relative;
}
.ts-single-funfact:before {
  position: absolute;
  left: 0;
  bottom: 0;
  content: "";
  background: url(../images/shap/funfact_wave.png) no-repeat;
  width: 100px;
  height: 10px;
}
.ts-single-funfact .funfact-num {
  font-size: 64px;
  font-weight: 900;
  color: #fff;
  margin-bottom: 15px;
}
.ts-single-funfact .funfact-title {
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  padding-bottom: 30px;
}

/*=================================
      ts-intro-outcome
=================================*/
.ts-intro-outcome {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  padding-top: 170px;
}

.ts-single-outcome {
  text-align: center;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -ms-border-radius: 50%;
  width: 250px;
  height: 250px;
  background-image: -webkit-linear-gradient(340deg, #fc6076 0%, #ff9a44 100%);
  background-image: -o-linear-gradient(340deg, #fc6076 0%, #ff9a44 100%);
  background-image: linear-gradient(110deg, #fc6076 0%, #ff9a44 100%);
  -webkit-box-shadow: 0px 20px 30px 0px rgba(0, 0, 0, 0.12);
  box-shadow: 0px 20px 30px 0px rgba(0, 0, 0, 0.12);
  padding: 55px 0;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
}
.ts-single-outcome i {
  font-size: 80px;
  color: #fff;
  display: block;
  margin-bottom: 30px;
}
.ts-single-outcome .ts-title {
  color: #fff;
}
.ts-single-outcome:hover i {
  -webkit-animation-name: shake;
  animation-name: shake;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.outcome-item:nth-of-type(1) .ts-single-outcome {
  background-image: -webkit-linear-gradient(340deg, #fc6076 0%, #ff9a44 100%);
  background-image: -o-linear-gradient(340deg, #fc6076 0%, #ff9a44 100%);
  background-image: linear-gradient(110deg, #fc6076 0%, #ff9a44 100%);
}

.outcome-item:nth-of-type(2) .ts-single-outcome {
  background-image: -webkit-radial-gradient(
    50% 50%,
    circle closest-side,
    #57c6e1 0%,
    #b49fda 0%,
    #7ac5d8 0%,
    #eea2a2 0%,
    #b1aff0 0%,
    #836df0 100%
  );
  background-image: -o-radial-gradient(
    50% 50%,
    circle closest-side,
    #57c6e1 0%,
    #b49fda 0%,
    #7ac5d8 0%,
    #eea2a2 0%,
    #b1aff0 0%,
    #836df0 100%
  );
  background-image: radial-gradient(
    50% 50%,
    circle closest-side,
    #57c6e1 0%,
    #b49fda 0%,
    #7ac5d8 0%,
    #eea2a2 0%,
    #b1aff0 0%,
    #836df0 100%
  );
}

.outcome-item:nth-of-type(3) .ts-single-outcome {
  background-image: -webkit-linear-gradient(
    135deg,
    #22ffa4 0%,
    #43c47a 49%,
    #10ae23 100%
  );
  background-image: -o-linear-gradient(
    135deg,
    #22ffa4 0%,
    #43c47a 49%,
    #10ae23 100%
  );
  background-image: linear-gradient(
    -45deg,
    #22ffa4 0%,
    #43c47a 49%,
    #10ae23 100%
  );
}

.outcome-item:nth-of-type(4) .ts-single-outcome {
  background-image: -webkit-linear-gradient(
    135deg,
    #22e1ff 0%,
    #1d8fe1 49%,
    #625eb1 100%
  );
  background-image: -o-linear-gradient(
    135deg,
    #22e1ff 0%,
    #1d8fe1 49%,
    #625eb1 100%
  );
  background-image: linear-gradient(
    -45deg,
    #22e1ff 0%,
    #1d8fe1 49%,
    #625eb1 100%
  );
}

/* Page banner area */
.page-banner-area {
  position: relative;
  min-height: 400px;
  color: #fff;
  background-position: 50% 50%;
  -webkit-background-size: cover;
  background-size: cover;
  -webkit-backface-visibility: hidden;
}

.page-banner-title {
  position: absolute;
  top: 50%;
  width: 100%;
  height: 100%;
}
.page-banner-title h2 {
  color: #fff;
  font-size: 60px;
  text-transform: uppercase;
  font-weight: 800;
  margin-bottom: 20px;
}
.page-banner-title .breadcrumb {
  background: none;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.page-banner-title .breadcrumb li a {
  color: #fff;
  margin-right: 5px;
}
.page-banner-title .breadcrumb a:hover {
  color: #ccc;
}

.breadcrumb {
  padding: 0;
  background: none;
}
.breadcrumb a:hover {
  color: #fff;
}
.breadcrumb > li {
  font-weight: 400;
}

/* ---- isotope ---- */
.grid {
  background: #ddd;
}

/* clear fix */
.grid:after {
  content: "";
  display: block;
  clear: both;
}

/* ---- .grid-item ---- */
.ts-gallery {
  padding-bottom: 70px;
}

.grid-item img {
  display: block;
  max-width: 100%;
}

.ts-grid-item {
  margin: 0 -15px;
  background: transparent;
}
.ts-grid-item .grid-item {
  padding: 0 15px;
  margin-bottom: 30px;
}
.ts-grid-item .grid-item a.ts-popup {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: block;
}
.ts-grid-item .grid-item a.ts-popup img {
  width: 100%;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
}
.ts-grid-item .grid-item a.ts-popup:hover img {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}

.ts-gallery .gallery-wrap {
  margin-top: 40px;
}

.ts-gallery .gallery-2 {
  margin: -40px 0 -60px -100px;
  position: relative;
}

.ts-gallery .speaker-shap .shap1 {
  top: 50%;
  opacity: 0.4;
}

/* Sponsors
================================================== */
.ts-sponsors .sponsor-padding {
  padding-left: 30px;
  padding-right: 30px;
}

.ts-sponsors .sponsor-title {
  max-width: 750px;
  margin: 0 auto;
  display: block;
}

.ts-sponsors .sponsors-logo {
  margin: 60px 0;
  min-height: 125px;
  padding: 0 30px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-line-pack: center;
  align-content: center;
}
.ts-sponsors .sponsors-logo img {
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
}
.ts-sponsors .sponsors-logo:hover img {
  -webkit-filter: none;
  filter: none;
}

.ts-sponsors.sponsors-border {
  padding: 0;
}
.ts-sponsors.sponsors-border .sponsors-wrap {
  border-bottom: 1px solid #2e2b72;
}

/* Contact
================================================== */
.ts-contact .single-contact-feature {
  -webkit-box-shadow: none;
  box-shadow: none;
  border: 1px solid #eeeeee;
  border-radius: 0;
}
.ts-contact .single-contact-feature p strong {
  color: #222222;
}
.ts-contact .single-contact-feature span.fa {
  font-size: 20px;
}

.ts-contact-form .contact-form .form-group {
  margin-bottom: 30px;
}
.ts-contact-form .contact-form .form-group .form-control {
  padding: 15px 30px;
  border-radius: 0;
  font-size: 14px;
  resize: none;
}

/* Blog Details
================================================== */
.blog-details .entry-header {
  padding: 0px 80px;
  margin-bottom: 15px;
}
.blog-details .entry-header .entry-title {
  font-size: 30px;
}
.blog-details .entry-header .entry-title a {
  color: #03a64a;
}

.blog-details .post-meta {
  position: relative;
  margin-bottom: 20px;
}
.blog-details .post-meta span,
.blog-details .post-meta a {
  color: #888888;
}
.blog-details .post-meta span:hover,
.blog-details .post-meta a:hover {
  color: #038c25;
}
.blog-details .post-meta span {
  position: relative;
  display: inline-block;
}
.blog-details .post-meta span:after {
  position: absolute;
  content: "";
  width: 5px;
  top: 10px;
  left: -25px;
  background: #888888;
  height: 5px;
  border-radius: 50%;
}
.blog-details .post-meta span:nth-child(1):after {
  display: none;
}
.blog-details .post-meta .post-meta-date,
.blog-details .post-meta .post-author {
  margin-right: 40px;
}

.blog-details .post-media.post-image {
  width: 100%;
  -webkit-box-shadow: 0px 15px 20px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 15px 20px 0px rgba(0, 0, 0, 0.25);
}

.blog-details .post-content {
  margin: 45px 70px;
}

.blog-details .details-img img {
  margin-bottom: 30px;
}

blockquote {
  position: relative;
  text-align: center;
  padding: 30px 60px;
  border: 0;
  margin: 30px 0 0px;
}
blockquote p {
  font-size: 18px;
  color: #222222;
  line-height: 28px;
  position: relative;
  z-index: 1;
  font-style: italic;
  font-weight: 600;
}

blockquote:before {
  padding: 28px 0 22px;
  content: "\e937";
  font-family: "iconfont";
  color: #fde5ef;
  font-size: 60px;
  position: absolute;
  left: 110px;
  top: 0px;
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}

.post-single {
  position: relative;
}
.post-single .post-body {
  background: none;
  padding: 0px 40px;
  margin: 0px;
}
.post-single .post-meta-date {
  position: absolute;
  top: 30px;
  left: 35px;
  display: block;
  text-align: center;
}
.post-single .post-author .avatar {
  width: 30px;
  height: 30px;
}
.post-single .post-author a {
  display: inline-block;
  margin-left: 6px;
}
.post-single .post-author:after {
  border: 0;
}
.post-single .entry-content p {
  margin-bottom: 30px;
}
.post-single .entry-content h3 {
  margin: 30px 0;
}
.post-single .post-footer {
  border-top: 1px solid #f1f1f1;
  margin: 40px 0 0;
  padding-top: 40px;
}
.post-single .post-footer .share-items span {
  font-weight: 900;
  color: #000;
}
.post-single .post-navigation {
  padding: 0px 25px;
}

.tags-area {
  margin: 20px 0;
}

.post-tags span {
  margin-right: 5px;
  font-weight: 900;
  color: #000;
}

.post-tags a {
  border: 1px solid #f1f1f1;
  color: #626c84;
  display: inline-block;
  font-size: 14px;
  padding: 3px 15px;
  margin-left: 3px;
  border-radius: 25px;
}
.post-tags a:hover {
  background: #2154cf;
  color: #fff;
  border: 1px solid transparent;
}

/* Post social */
.post-social-icons > li {
  display: inline-block;
}

.post-social-icons a {
  margin-left: 10px;
  font-size: 16px;
  color: #252a37;
  text-align: center;
}
.post-social-icons a:hover {
  color: #038c25;
}

.post-social-icons.unstyled {
  display: inline-block;
}

/* Post navigation */
.post-navigation span:hover,
.post-navigation h3:hover {
  color: #038c25;
}

.post-navigation .post-previous,
.post-navigation .post-next {
  padding: 0 40px;
  width: 50%;
  border-left: 1px solid #f1f1f1;
  border-right: 1px solid #f1f1f1;
  display: table-cell;
  position: relative;
  vertical-align: middle;
}

.post-navigation i {
  margin: 0 5px;
}

.post-navigation span {
  font-size: 14px;
  color: #626c84;
  margin-bottom: 10px;
}

.post-navigation .post-previous {
  text-align: left;
  float: left;
  border-left: 0 none;
  border-right: 0 none;
  padding: 0 40px 0 0;
}

.post-navigation .post-next {
  text-align: right;
  float: left;
  border-right: 0 none;
  padding: 0 0 0 40px;
}

.post-navigation h3 {
  font-size: 20px;
  line-height: 26px;
  margin: 0px 0 10px;
}

/* Author box */
.author-box {
  padding: 40px;
  margin: 40px 0;
  background: #f9fafc;
}

.author-img img {
  width: 100px;
  height: 100px;
  margin-right: 30px;
  border-radius: 100%;
}

.author-info h3 {
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: 600;
}
.author-info h3 span {
  font-size: 12px;
  color: #999;
  border-left: 1px solid #afafaf;
  padding-left: 10px;
  margin-left: 10px;
  font-weight: 500;
}

.author-info p {
  padding-left: 130px;
}

.author-url a {
  font-size: 14px;
  color: #e92273;
}

/* Comments area */
.comments-area {
  margin: 40px 0;
}

.comments-list .comment-content {
  margin: 15px 0;
}

.comments-list .comment-reply {
  color: #252a37;
  font-weight: 400;
  font-size: 14px;
}
.comments-list .comment-reply i {
  margin-right: 5px;
}
.comments-list .comment-reply:hover {
  color: #2154cf;
}

.comments-counter {
  font-size: 18px;
}
.comments-counter a {
  color: #323232;
}

.comments-list {
  list-style: none;
  margin: 0;
  padding: 20px 0 0;
}
.comments-list .comment {
  padding-bottom: 20px;
  margin-bottom: 30px;
}
.comments-list .comment.last {
  border-bottom: 0;
  padding-bottom: 0;
  margin-bottom: 0;
}
.comments-list .comment .reply-bg {
  background: #f9fafc;
  padding: 30px;
}
.comments-list img.comment-avatar {
  width: 80px;
  height: 80px;
  border-radius: 100%;
  margin-right: 30px;
}
.comments-list .comment-body {
  margin-left: 110px;
}
.comments-list .comment-author {
  margin-bottom: 0;
  margin-top: 0;
  font-weight: 700;
  font-size: 18px;
  color: #252a37;
}
.comments-list .comment-date {
  color: #252a37;
  font-size: 14px;
  display: block;
  margin-top: -5px;
}

.comments-reply {
  list-style: none;
  margin: 0 0 0 70px;
}

.comments-form {
  margin-bottom: 0;
}
.comments-form .title-normal {
  margin-bottom: 20px;
}
.comments-form .btn.btn-primary {
  margin-top: 20px;
}

/* about
===================================================*/
.about-intro-text i {
  font-size: 64px;
  margin-bottom: 20px;
  display: block;
  background: -moz-linear-gradient(top, #e72c83 0%, #a742c6 100%);
  background: -webkit-linear-gradient(top, #e72c83 0%, #a742c6 100%);
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#e72c83),
    to(#a742c6)
  );
  background: -o-linear-gradient(top, #e72c83 0%, #a742c6 100%);
  background: linear-gradient(to bottom, #e72c83 0%, #a742c6 100%);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.about-video {
  position: relative;
}
.about-video img {
  width: 100%;
}
.about-video:before {
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#e6005d),
    color-stop(65%, rgba(115, 0, 47, 0.35)),
    to(rgba(0, 0, 0, 0))
  );
  background-image: -webkit-linear-gradient(
    left,
    #e6005d 0%,
    rgba(115, 0, 47, 0.35) 65%,
    rgba(0, 0, 0, 0) 100%
  );
  background-image: -o-linear-gradient(
    left,
    #e6005d 0%,
    rgba(115, 0, 47, 0.35) 65%,
    rgba(0, 0, 0, 0) 100%
  );
  background-image: linear-gradient(
    90deg,
    #e6005d 0%,
    rgba(115, 0, 47, 0.35) 65%,
    rgba(0, 0, 0, 0) 100%
  );
  background-image: -webkit-linear-gradient(
    90deg,
    #e6005d 0%,
    rgba(115, 0, 47, 0.35) 65%,
    rgba(0, 0, 0, 0) 100%
  );
  background-image: -ms-linear-gradient(
    90deg,
    #e6005d 0%,
    rgba(115, 0, 47, 0.35) 65%,
    rgba(0, 0, 0, 0) 100%
  );
  position: absolute;
  left: 0;
  top: 0;
  content: "";
  width: 100%;
  height: 100%;
}

/* Outcome */
.ts-event-outcome {
  background: #fff;
  min-height: 300px;
  position: relative;
}
.ts-event-outcome:before {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  content: "";
  background: url(../images/banner/lanr_bg.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: 50% 50%;
}
.ts-event-outcome .outcome-content {
  padding: 0px !important;
}
.ts-event-outcome .outcome-content .column-title {
  font-style: italic;
  color: #038c25;
  font-weight: 300;
  margin-bottom: 8px;
  padding-bottom: 15px;
}
.ts-event-outcome .outcome-content .column-title span {
  color: #fff;
}
.ts-event-outcome .outcome-content .column-title:after {
  display: none;
}
.ts-event-outcome .outcome-content p {
  margin-bottom: 35px;
}
.ts-event-outcome .outcome-content {
  position: relative;
}
.ts-event-outcome .outcome-content .outcome-img {
  position: relative;
}
.ts-event-outcome .outcome-content .outcome-img img {
  width: 100%;
  border-radius: 1.2rem;
}
.ts-event-outcome .outcome-content .img-title {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
}
.ts-event-outcome.event-intro {
  background: transparent;
}
.ts-event-outcome.event-intro:before {
  display: none;
}
.ts-event-outcome.event-intro .outcome-content .column-title span {
  color: #222222;
}

/*================================
faq-item
====================================*/
.faq-item .faq-list {
  margin-bottom: 20px;
}
.faq-item .faq-list h4 {
  font-size: 16px;
  margin-bottom: 0px;
}
.faq-item .faq-list h4 a {
  display: block;
  background: transparent;
  width: 100%;
  text-align: left;
  border: 1px solid #e5e5e5;
  color: #101010;
  text-transform: capitalize;
  position: relative;
  padding: 0 20px;
  height: 60px;
  line-height: 60px;
  border-radius: 0;
  -webkit-border-radius: 0;
  -ms-border-radius: 0;
}
.faq-item .faq-list h4 a:hover {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.faq-item .faq-list h4 a:before {
  position: absolute;
  right: 20px;
  top: 0;
  font-size: 12px;
  content: "\f054";
  font-family: "FontAwesome";
}

.faq-item .faq-list h4 a.collapsed:before {
  content: "\f078"; 
}

.faq-item .faq-list h4 a[aria-expanded="true"] {
  background: #038c25;
  color: #fff;
  border-color: #038c25;
}
.faq-item .faq-list .panel-collapse {
  color: #fff;
  padding: 0 20px 20px;
}
.faq-item .faq-list .panel-collapse.show {
  background: #038c25;
}

.widget {
  margin-bottom: 50px;
}

.ts-form .form-control {
  height: 50px;
  width: 100%;
  padding: 0 20px;
  border-radius: 0;
  -webkit-border-radius: 0;
  -ms-border-radius: 0;
  margin-bottom: 20px;
}
.ts-form .form-control:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
  outline: none;
  border-color: #038c25;
}
.ts-form .form-control.message-box {
  height: 150px;
  resize: none;
}

.social-box {
  background: #f8f8f8;
  padding: 30px;
}
.social-box .widget-title {
  font-size: 24px;
  color: #03a64a;
  margin-bottom: 20px;
}
.social-box ul {
  padding: 0;
  margin: 0;
}
.social-box ul li {
  display: inline-block;
  list-style: none;
}
.social-box ul li a {
  display: block;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -ms-border-radius: 50%;
  text-align: center;
  padding: 6px 0;
  background: #038c25;
  color: #fff;
  font-size: 14px;
  margin-right: 5px;
}
.social-box ul li.ts-facebook a {
  background: #3b5998;
}
.social-box ul li.ts-twitter a {
  background: #55acee;
}
.social-box ul li.ts-google-plus a {
  background: #dd4b39;
}
.social-box ul li.ts-linkedin a {
  background: #0976b4;
}
.social-box ul li.ts-instagram a {
  background: #b7242a;
}
.social-box ul li.ts-youtube a {
  background: #eb252d;
}

/*--------- venue -------*/
.ts-venue-feature .single-venue-content i {
  font-size: 60px;
  color: #fff;
}

.ts-venue-feature .single-venue-content .ts-venue-title {
  color: #fff;
  margin-top: 25px;
}

.ts-venue-feature .single-venue-content p {
  color: #fff;
  padding: 0px 50px;
  margin-bottom: 35px;
}

.venue-img img {
  width: 100%;
}

/* Btn link box */
.btn-link-box {
  border: 1px solid #fff;
  padding: 0px 25px;
  color: #fff;
  display: inline-block;
  height: 40px;
  line-height: 40px;
}
.btn-link-box:hover {
  background-color: #038c25;
  border-color: #038c25;
  color: #fff;
}

/* Error page
================================================== */
.error-page .error-code h2 {
  display: block;
  font-size: 200px;
  line-height: 200px;
  color: #303030;
  margin-bottom: 20px;
}

.error-page .error-body .btn {
  margin-top: 30px;
  font-weight: 700;
}

/* =================
// Exprience 
=====================*/
.ts-exprience {
  position: relative;
  padding: 150px 0 500px 0;
}
.ts-exprience .ts-exprience-content {
  z-index: 99;
}
.ts-exprience .ts-exprience-content .sub-title {
  font-size: 18px;
  font-weight: 700;
  color: #161362;
  margin-bottom: 20px;
}
.ts-exprience .ts-exprience-content h2 {
  font-size: 36px;
  font-weight: 700;
  line-height: 48px;
  color: #161362;
}
.ts-exprience .ts-scroll-image {
  position: absolute;
  left: 35%;
  z-index: -1;
}
.ts-exprience .ts-scroll-image.image-a {
  top: 5%;
  left: 10%;
}
.ts-exprience .ts-scroll-image.image-a img {
  -webkit-transform: rotate(-15deg);
  -ms-transform: rotate(-15deg);
  transform: rotate(-15deg);
}
.ts-exprience .ts-scroll-image.image-c {
  left: 5%;
}
.ts-exprience .ts-scroll-image.image-c img {
  -webkit-transform: rotate(14deg);
  -ms-transform: rotate(14deg);
  transform: rotate(14deg);
}
.ts-exprience .ts-scroll-image.image-b {
  left: auto;
  right: 5%;
}
.ts-exprience .ts-scroll-image.image-b img {
  -webkit-transform: rotate(-14deg);
  -ms-transform: rotate(-14deg);
  transform: rotate(-14deg);
}
.ts-exprience .ts-scroll-image.image-e {
  top: -5%;
  left: auto;
  right: 15%;
}
.ts-exprience .ts-scroll-image.image-e img {
  -webkit-transform: rotate(14deg);
  -ms-transform: rotate(14deg);
  transform: rotate(14deg);
}

@media (max-width: 767px) {
  .ts-exprience {
    padding-bottom: 180px;
  }
  .ts-exprience .ts-scroll-image {
    width: 50%;
  }
  .ts-exprience .ts-scroll-image img {
    width: 100%;
  }
}

/*------------back to top-------------*/
.BackTo {
  background: #038c25 none repeat scroll 0 0;
  border-radius: 50%;
  bottom: 35px;
  color: #979797;
  cursor: pointer;
  height: 44px;
  position: fixed;
  right: 14px;
  text-align: center;
  width: 44px;
  z-index: 9;
  display: block;
  padding: 8px 0;
}
.BackTo a {
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  margin-top: 2px;
}



          }
        `}
      </style>
      <style>
        {`
 /*==========================
 tab rotate 
 ===========================*/
 
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"');

 @media (min-width: 1100px) and (max-width: 1900px) {
   .him {
     display: none;
   }
 }
 @media (min-width: 992px) and (max-width: 1200px) {
   .header ul.navbar-nav > li > a {
     padding: 0 100px;
     font-size: 13px;
   }
   .him {
     display: none;
   }
   .banner-item .banner-content-wrap .banner-title {
     font-size: 60px;
   }
   .hero-area.centerd-item .banner-item {
     min-height: 650px;
   }
   .hero-area.centerd-item .banner-item:after {
     width: 500px;
     height: 500px;
   }
   .hero-area.centerd-item .banner-item .banner-content-wrap {
     padding: 50px 0;
   }
   .hero-area.content-left .banner-item {
     margin: 100px 20px 0;
   }
   .ts-speaker .speaker-img {
     width: 205px;
     height: 205px;
   }
   .speaker-classic .ts-title {
     font-size: 20px;
   }
   .speaker-shap {
     display: none;
   }
   h2 {
     line-height: 28px;
   }
   .ts-map .mapouter .gmap_canvas {
     width: 400px;
     height: 400px;
   }
   .ts-single-outcome {
     width: 210px;
     height: 210px;
   }
   .ts-single-outcome i {
     font-size: 60px;
     margin-bottom: 15px;
   }
   .social-box ul li a {
     margin-right: 0;
   }
   .post .post-body .entry-header .entry-title {
     font-size: 24px;
     line-height: 28px;
   }
   .ts-blog .post .post-body .entry-header .entry-title {
     font-size: 20px;
   }
   .ts-exp-wrap .ts-exp-content .column-title {
     font-size: 32px;
   }
 }
 
 /*==========================
 tab device 
 ===========================*/
 @media (min-width: 768px) and (max-width: 991px) {
   .dropdown-menu.show {
     display: block;
   }
   .section-title {
     margin-bottom: 50px;
   }
   .pl-0 {
     padding-left: 15px !important;
   }
   .ts-speakers,
   section {
     padding: 60px 0;
   }
   .navbar-light .navbar-toggler-icon {
     background-image: none;
   }
   .navbar-toggler {
     padding: 8px;
     cursor: pointer;
   }
   .navbar-toggler-icon {
     width: auto;
     height: auto;
   }
   .header .navbar-light .navbar-toggler {
     background: #f4524d;
     color: #fff;
     border-color: #f4524d;
   }
   .header ul.navbar-nav > li > a {
     line-height: 40px !important;
   }
   .header ul.navbar-nav > li > a i {
     float: right;
     padding-top: 12px;
   }
   .header ul.navbar-nav > li .dropdown-menu {
     background: transparent;
     -webkit-box-shadow: none;
     box-shadow: none;
   }
   .header-classic {
     padding: 10px 0;
   }
   .header-transparent .navbar-toggler {
     background: #f4524d;
     color: #fff;
   }
   .header-transparent .navbar-nav {
     background: #222;
     padding: 20px 0;
   }
   .header-transparent .navbar-nav li .dropdown-menu li a {
     color: #fff !important;
   }
   .header.header-transparent.nav-border .navbar {
     padding: 10px 0;
   }
   .header ul.navbar-nav > li.header-ticket {
     padding: 0 15px;
   }
   .header ul.navbar-nav > li.header-ticket .ticket-btn {
     margin-left: 0;
   }
   .banner-img {
     display: none;
   }
   .banner-item {
     min-height: 700px;
   }
   .banner-item .banner-content-wrap .banner-title {
     font-size: 48px;
     line-height: 56px;
   }
   .hero-area.centerd-item .banner-item .banner-content-wrap .banner-title {
     font-size: 55px;
   }
   .hero-area.centerd-item .countdown .counter-item {
     width: 90px;
     height: 90px;
   }
   .hero-area.centerd-item .countdown .counter-item i {
     font-size: 90px;
     top: 6px;
     right: 0;
     margin: auto;
   }
   /*---- main slider-----*/
   .main-slider .banner-item .banner-content-wrap p.banner-title {
     margin-bottom: 25px;
   }
   .main-slider .owl-dots {
     bottom: 170px;
   }
   .hero-area.content-left .banner-item {
     margin: 0;
     min-height: inherit;
   }
   .hero-area.content-left .banner-item .banner-content-wrap {
     padding: 170px 0;
   }
   .hero-speakers .banner-item .banner-content-wrap {
     padding: 160px 0 0;
   }
   .hero-form-content {
     margin-top: 50px;
     margin-bottom: 60px;
   }
   .hero-form-content h2 {
     font-size: 30px;
   }
   .ts-count-down {
     margin: -115px 0;
   }
   .intro-video {
     margin: 50px auto;
     width: 500px;
     height: 500px;
   }
   .ts-intro-item {
     padding: 60px 0 40px;
   }
   .mb-70,
   .intro-left-content {
     margin-bottom: 50px;
   }
   .ts-intro.event-intro {
     padding-top: 80px;
   }
   .outcome-item {
     margin-bottom: 40px;
   }
   .ts-event-outcome {
     padding-bottom: 40px;
   }
   .ts-event-outcome .outcome-content {
     margin-bottom: 40px;
   }
   .ts-speakers {
     padding-bottom: 40px;
   }
   .speaker-classic .ts-speaker {
     margin-bottom: 40px;
   }
   .ts-schedule-info ul {
     margin-top: 50px;
     min-height: 215px;
   }
   .ts-schedule-info ul li a {
     position: relative;
     padding: 70px 0;
     width: 200px;
     height: 200px;
     margin: 0 8px;
   }
   .ts-schedule-info ul li:nth-child(1) a {
     left: 0;
     top: 0;
   }
   .ts-schedule-info ul li:nth-child(2) a {
     left: 0;
     top: 0;
   }
   .ts-schedule-info ul li:nth-child(3) a {
     left: 0;
     top: 0;
   }
   .ts-pricing-item {
     margin-top: 85px;
   }
   .ts-pricing {
     padding-bottom: 20px;
   }
   .pricing-item,
   .location-form {
     margin-bottom: 50px;
   }
   .speaker-shap {
     display: none;
   }
   .ts-funfact {
     padding: 60px 0 40px;
   }
   .ts-single-funfact {
     margin-bottom: 30px;
   }
   .ts-blog {
     padding-bottom: 40px;
   }
   .ts-map .mapouter .gmap_canvas {
     margin: auto;
   }
   .direction-tabs-content .contact-info-box {
     margin-bottom: 30px;
   }
   .ts-newsletter {
     padding: 40px 20px;
   }
   .schedule-tabs-item .schedule-listing-item.schedule-left {
     margin-top: 0;
   }
   /* Contact Page*/
   .single-contact-feature {
     margin-bottom: 30px;
   }
   .ts-sponsors .sponsors-logo {
     margin: 0px;
   }
   .page-banner-title {
     padding: 0 20px;
   }
   .page-banner-title h2 {
     font-size: 36px;
   }
   .post .post-body .entry-header .entry-title {
     font-size: 24px;
     line-height: 28px;
   }
   .about-intro-text {
     text-align: center !important;
     max-width: 500px;
     margin: auto auto 30px;
   }
   .about-video {
     margin: 0 0 30px;
   }
   .intro-content-text {
     margin-bottom: 40px;
   }
   .venue-img {
     margin-bottom: 30px;
   }
   .venue-img img {
     width: 100%;
   }
   .single-venue-content {
     margin-bottom: 40px;
   }
   .map-left .ts-map {
     margin-bottom: 40px;
   }
   .post-tags,
   .share-items {
     width: 100%;
     float: none !important;
     margin: 5px 0;
   }
   .ts-book-seat .book-seat-content .section-title {
     font-size: 36px;
   }
   .ts-sponsors.sponsors-border .sponsors-logo {
     padding: 0 15px;
   }
   .gallery-wrap .gallery-2 {
     margin: 0;
   }
   .gallery-wrap img {
     width: 100%;
   }
   .ts-footer.ts-footer-item .footer-menu,
   .ts-footer.ts-footer-item .ts-footer-social,
   .ts-footer.ts-footer-item .copyright-text.text-right {
     text-align: center !important;
   }
   .ts-footer.ts-footer-item .newsletter-form {
     margin-top: 40px;
   }
   .header .navbar-collapse {
     max-height: 320px;
     max-width: none;
     overflow: auto;
     float: none !important;
     width: 100% !important;
     padding: 0px;
     border: 0;
   }
   .header .navbar-nav {
     position: static;
     margin: 0px;
   }
 }
 
 /*==========================
 small device /mobile sm and large
 ===========================*/
 @media (max-width: 767px) {
   .dropdown-menu.show {
     display: block;
   }
   .mb-100 {
     margin-bottom: 50px;
   }
   .btn {
     font-size: 14px;
   }
   h2 {
     line-height: 28px;
   }
   .pl-0 {
     padding-left: 15px !important;
   }
   .navbar-light .navbar-toggler-icon {
     background-image: none;
   }
   .header.header-transparent.nav-border .navbar {
     padding: 10px 0;
   }
   .header .navbar-light .navbar-toggler {
     background: #038c25;
     color: #fff;
     border-color: #038c25;
   }
   .header ul.navbar-nav > li > a {
     line-height: 40px !important;
   }
   .header ul.navbar-nav > li > a i {
     float: right;
     padding-top: 12px;
   }
   .header ul.navbar-nav > li .dropdown-menu {
     -webkit-box-shadow: none;
     box-shadow: none;
   }
   .header.h-transparent2 .navbar.navbar-light ul.navbar-nav > li > a {
     color: #fff;
     text-align: left;
   }
   .header.h-transparent2 .navbar.navbar-light ul.navbar-nav > li > a i {
     float: right;
     padding-top: 12px;
   }
   .header-classic {
     padding: 10px 0;
   }
   .navbar-nav {
     padding: 20px 0;
   }
   .navbar-toggler {
     padding: 8px;
     cursor: pointer;
   }
   .navbar-toggler-icon {
     width: auto;
     height: auto;
   }
   .navbar-brand img {
     max-width: 130px;
   }
   .header-transparent .navbar-toggler {
     background: #f4524d;
     color: #fff;
   }
   .header-transparent .navbar-nav {
     background: #222;
     padding: 20px 0;
   }
   .header-transparent .dropdown-menu {
     background: transparent;
     -webkit-box-shadow: none !important;
     box-shadow: none !important;
     padding: 10px 25px;
   }
   .header-transparent .dropdown-menu li a {
     color: #fff !important;
   }
   .header ul.navbar-nav > li.header-ticket {
     padding: 0 15px;
   }
   .header ul.navbar-nav > li.header-ticket .ticket-btn {
     margin-left: 0;
   }
   .banner-img {
     display: none;
   }
   .banner-item {
     min-height: 550px;
   }
   .banner-item .banner-content-wrap {
     padding: 180px 0 100px;
   }
   .banner-item .banner-content-wrap p.banner-info {
     font-size: 18px;
   }
   .banner-item .banner-content-wrap h1.banner-title {
     font-size: 28px;
     font-size: 40px;
     margin-bottom: 35px;
     line-height: 40px;
   }
   .banner-item .banner-content-wrap .countdown {
     margin-bottom: 40px;
   }
   .banner-item .banner-content-wrap .countdown .counter-item {
     margin-bottom: 20px;
   }
   .banner-item .banner-content-wrap .banner-btn .btn {
     margin-bottom: 15px;
     margin-right: 15px;
   }
   .banner-item .banner-content-wrap .banner-btn .btn.fill {
     margin-left: 0;
   }
   .banner-6 .banner-item .banner-content-wrap .banner-title {
     font-size: 36px;
     line-height: 1.2;
   }
   .banner-6-alt .banner-item .banner-content-wrap .banner-title {
     margin-bottom: 50px;
   }
   .banner-6-alt .banner-item .banner-image img {
     width: 100%;
     display: none;
   }
   .ts-exprience .ts-exprience-content h2 {
     font-size: 24px;
     line-height: 1.2;
   }
   .hero-area.centerd-item .banner-item {
     min-height: 650px;
   }
   .hero-area.centerd-item .banner-item:after {
     width: 300px;
     height: 300px;
   }
   .hero-area.centerd-item .banner-item .banner-content-wrap {
     padding: 50px 0;
   }
   .hero-area.centerd-item .banner-item .banner-content-wrap .banner-title {
     font-size: 38px;
     line-height: 48px;
   }
   .hero-area.centerd-item .banner-item .countdown {
     margin-bottom: 30px;
   }
   .main-slider .banner-item {
     min-height: 800px;
   }
   .main-slider .banner-item .banner-content-wrap p.banner-desc {
     padding: 0;
   }
   .main-slider .banner-item .banner-content-wrap h1.banner-title {
     margin-bottom: 15px;
   }
   .main-slider .owl-dots {
     bottom: 110px;
   }
   .ts-count-down .countdown {
     padding-bottom: 30px;
   }
   .ts-count-down .countdown .counter-item {
     width: 50%;
     padding-bottom: 0;
   }
   .ts-count-down .countdown .counter-item span {
     font-size: 50px;
   }
   .ts-count-down .countdown .counter-item b {
     right: -10px;
   }
   .ts-count-down .countdown .counter-item:nth-of-type(2) b {
     display: none;
   }
   .hero-area.content-left .banner-item {
     margin: 0;
     min-height: inherit;
   }
   .hero-area.content-left .banner-item .banner-content-wrap {
     padding-bottom: 75px;
   }
   .hero-speakers .banner-item .banner-content-wrap {
     padding: 160px 0 0;
   }
   .hero-form-content {
     margin-top: 50px;
     margin-bottom: 60px;
   }
   .hero-form-content h2 {
     font-size: 30px;
   }
   .ts-intro {
     padding: 60px 0;
   }
   .ts-intro .single-intro-text.mb-70 {
     margin-bottom: 40px;
   }
   .ts-intro .intro-video {
     width: 100%;
     height: auto;
     margin: 30px 0;
     border-radius: 0;
   }
   .intro-left-content {
     margin-bottom: 40px;
   }
   .ts-intro-item .col-lg-6:last-of-type .single-intro-text {
     margin-bottom: 0;
   }
   section.p-60 {
     padding: 30px 0;
   }
   .ts-intro.event-intro {
     padding-top: 20px;
   }
   .ts-intro-outcome {
     padding-top: 140px;
     padding-bottom: 40px;
   }
   .ts-intro-outcome .ts-single-outcome {
     margin: auto auto 30px;
   }
   .ts-event-outcome {
     padding-bottom: 40px;
   }
   .outcome-content {
     margin-bottom: 40px;
   }
   .outcome-content .outcome-img img {
     width: 100%;
   }
   .ts-funfact {
     padding: 60px 0 40px;
   }
   .ts-single-funfact {
     padding-right: 0;
     text-align: center;
     margin-bottom: 30px;
   }
   .ts-single-funfact:before {
     margin: auto;
     right: 0;
   }
   .ts-pricing-item {
     margin-top: 80px;
   }
   .ts-pricing {
     padding-bottom: 30px;
   }
   .ts-pricing.classic .ts-pricing-item {
     -webkit-box-shadow: 0.799px 0 40px 0px rgba(0, 0, 0, 0.1);
     box-shadow: 0.799px 0 40px 0px rgba(0, 0, 0, 0.1);
   }
   .ts-sponsors .sponsors-logo {
     margin: 0;
     min-height: 100px;
   }
   .ts-sponsors.sponsors-border {
     padding: 40px 0;
   }
   .ts-speakers,
   section,
   .ts-intro-item {
     padding: 60px 0;
   }
   .ts-speakers {
     padding-bottom: 30px;
   }
   .section-title,
   .column-title {
     margin-bottom: 40px;
     font-size: 30px;
     line-height: 35px;
   }
   .column-title,
   .pricing-item {
     margin-bottom: 35px;
   }
   .speaker-shap {
     display: none;
   }
   .ts-exp-wrap {
     min-height: 440px;
   }
   .ts-exp-wrap .ts-exp-content {
     padding: 60px 45px;
   }
   .ts-schedule-info {
     margin-top: 40px;
     margin-bottom: 40px;
   }
   .ts-schedule-info ul {
     min-height: 150px;
   }
   .ts-schedule-info ul li a {
     width: 100px;
     height: 100px;
     padding: 35px 0;
   }
   .ts-schedule-info ul li a h3 {
     font-size: 15px;
     margin-bottom: 0;
   }
   .ts-schedule-info ul li a span {
     text-transform: capitalize;
     font-size: 12px;
   }
   .ts-schedule-info ul li:nth-child(1) a {
     top: 30px;
   }
   .ts-schedule-info ul li:nth-child(2) a {
     left: 76px;
   }
   .ts-schedule-info ul li:nth-child(3) a {
     top: 30px;
     left: 160px;
     right: auto;
   }
   .schedule-listing {
     -webkit-box-orient: vertical;
     -webkit-box-direction: normal;
     -ms-flex-direction: column;
     flex-direction: column;
   }
   .schedule-listing .schedule-slot-time {
     -webkit-box-flex: 0;
     -ms-flex: 0 0 100%;
     flex: 0 0 100%;
     max-width: 100%;
     padding: 20px 35px;
   }
   .schedule-listing .schedule-slot-info {
     padding: 35px 40px 35px 35px;
     border-left: 1px dashed #e5e5e5;
   }
   .schedule-listing .schedule-slot-info .schedule-slot-speakers {
     display: none;
   }
   .schedule-listing-btn {
     margin-top: 40px;
   }
   .ts-schedule-nav {
     margin-bottom: 40px;
   }
   .ts-schedule-nav ul li a {
     display: inline-block;
     padding: 20px 20px;
     margin: 5px 0;
   }
   .schedule-tabs-item .schedule-listing-item:before,
   .schedule-tabs-item .schedule-listing-item:after {
     display: none;
   }
   .schedule-tabs-item .schedule-listing-item.schedule-left {
     margin-top: 0;
     padding: 0px 110px 20px 0;
   }
   .schedule-tabs-item .schedule-listing-item.schedule-right {
     padding: 0px 20px 0px 110px;
     margin-bottom: 30px;
   }
   .schedule-tabs-item .schedule-listing-item .schedule-slot-speakers {
     top: 5px;
   }
   .ts-blog {
     padding-bottom: 40px;
   }
   .ts-blog .post .post-body .entry-header .entry-title {
     font-size: 20px;
     margin-bottom: 10px;
   }
   .ts-map .mapouter {
     margin: 40px 0 0;
   }
   .ts-map .mapouter .gmap_canvas {
     width: 100%;
     height: 300px;
     border-radius: 0;
   }
   .ts-newsletter {
     padding: 40px 20px;
   }
   .newsletter-form {
     padding: 0 20px;
   }
   .ts-footer {
     padding: 290px 0 60px;
   }
   .ts-footer.ts-footer-item .newsletter-form {
     margin-top: 40px;
   }
   .ts-footer.ts-footer-item .footer-menu,
   .ts-footer.ts-footer-item .ts-footer-social {
     text-align: center;
   }
   .ts-footer.ts-footer-item .copyright-text.text-right {
     text-align: center !important;
   }
   .ts-submit-btn .btn {
     padding: 0 15px;
     font-size: 14px;
   }
   .footer-menu ul li a {
     display: inline-block;
     margin: 5px 20px;
   }
   .post .post-meta {
     margin-bottom: 10px;
   }
   .post .entry-title {
     line-height: 28px;
     margin-bottom: 10px;
   }
   .post .post-body .entry-header .entry-title {
     font-size: 22px;
   }
   /*-- about ---*/
   .ts-about-intro {
     padding-bottom: 40px;
   }
   .about-intro-text {
     text-align: left !important;
     margin: 30px 0;
   }
   .about-video {
     margin: 10px 0;
   }
   /* Contact Page*/
   .single-contact-feature {
     margin-bottom: 30px;
   }
   /* 404 page */
   .error-page .error-code h2 {
     font-size: 100px;
     margin-bottom: 0px;
   }
   /* Speaker 2 */
   .speaker-II .ts-speaker .speaker-img {
     width: 265px;
     height: 265px;
   }
   .page-banner-area {
     min-height: 300px;
   }
   .page-banner-title {
     padding: 0 20px;
   }
   .page-banner-title h2 {
     font-size: 36px;
   }
   .ts-grid-item .grid-item:last-of-type {
     margin-bottom: 0;
   }
   .ts-gallery .gallery-wrap img {
     width: 100%;
   }
   .ts-gallery .gallery-2 {
     margin: 0;
   }
   .faq-item .faq-list h4 a {
     height: auto;
     line-height: 26px;
     padding: 15px 30px 15px 20px;
   }
   .faq-item .faq-list h4 a:before {
     top: 12px;
   }
   .asq-form {
     margin: 30px 0;
   }
   .social-box {
     padding: 20px;
   }
   .social-box ul li a {
     margin-right: 0;
   }
   .widget:last-of-type {
     margin-bottom: 0;
   }
   .intro-content-text {
     margin-bottom: 30px;
   }
   .venue-img {
     margin-bottom: 30px;
   }
   .venue-img img {
     width: 100%;
   }
   .single-venue-content {
     margin-bottom: 40px;
   }
   .ts-venue-feature {
     padding-bottom: 40px;
   }
   .map-left .ts-map .mapouter {
     margin: 0 0 40px;
   }
   .ts-book-seat .book-seat-content .section-title {
     font-size: 28px;
   }
   .blog-details .entry-header {
     padding: 0;
   }
   .blog-details .entry-header .entry-title {
     font-size: 24px;
   }
   .blog-details .post-content {
     margin: 30px 0;
   }
   .blog-details .post-single .post-body {
     padding: 0;
   }
   .blog-details .post-tags {
     width: 100%;
   }
   .blog-details .post-tags a {
     margin-bottom: 10px;
   }
   .blog-details .share-items {
     float: none !important;
     width: 100%;
     display: block;
   }
   .author-box {
     padding: 20px;
   }
   .author-box img {
     width: 50px;
     height: 50px;
     margin-right: 15px;
   }
   .author-box .author-info p {
     padding-left: 65px;
   }
   .comments-reply {
     margin-left: 0;
   }
   .ts-map-tabs ul li a {
     font-size: 14px;
     margin-right: 0;
   }
   .direction-tabs-content .contact-info-box {
     margin-bottom: 30px;
   }
   .header .navbar-collapse {
     max-height: 320px;
     max-width: none;
     overflow: auto;
     float: none !important;
     width: 100% !important;
     padding: 0px;
     border: 0;
   }
   .header .navbar-nav {
     position: static;
     margin: 0px;
   }
 }

 @media (max-width: 767px) {
  .navbar-nav {
    flex-direction: column;
  }
}
  `}
      </style>

      <div className="body-inner">
        <header id="header" className="header header-classic">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              {/* logo*/}
              <a className="navbar-brand col-lg-2" href="https://gfa-tech.com">
                <img
                  src="https://gfa-tech.com/testnet/heartland-skills/images/gfa_imo.png"
                  style={{ height: "auto", width: 200 }}
                  alt="GFA Tech Logo"
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                aria-controls="navbarNavDropdown"
                aria-expanded={!isCollapsed}
                aria-label="Toggle navigation"
                onClick={handleToggle}
              >
                <span className="navbar-toggler-icon">
                  <i className="fas fa-bars menu-toggle-icon" />
                </span>
              </button>
              <div
                className={`collapse navbar-collapse ${
                  isCollapsed ? "" : "show"
                }`}
                id="navbarNavDropdown"
              >
                <ul className="navbar-nav ml-auto col-lg-7 offset-3">
                  <li className="nav-item px-2">
                    <a
                      href="#main-container"
                      className="nav-link col-12"
                      style={{ fontWeight: "700" }}
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item px-2 ">
                    <a
                      href="#ts-experiences"
                      className="nav-link"
                      style={{ fontWeight: "700" }}
                    >
                      Benefits
                    </a>
                  </li>
                  <li className="nav-item px-2">
                    <a
                      href="#audience"
                      className="nav-link"
                      style={{ fontWeight: "700" }}
                    >
                      Audience
                    </a>
                  </li>
                  <li className="nav-item px-2">
                    <a
                      href="#contact"
                      className="nav-link"
                      style={{ fontWeight: "700" }}
                    >
                      Contact
                    </a>
                  </li>
                </ul>
                <ul className="navbar-nav ml-auto col-lg-2">
                  <li
                    className="nav-item header-ticket col-sm-12"
                    style={{ marginTop: "0" }}
                  >
                    <a
                      href="https://gfa-tech.com/register-Heart-Land/"
                      className="ticket-btn btn"
                    >
                      Register Now!
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          {/* container end*/}
        </header>
        {/*/ Header end */}
        {/* banner start*/}
        <section className="hero-area hero-speakers">
          <div
            className="banner-item "
            style={{
              backgroundImage:
                "url(https://gfa-tech.com/testnet/heartland-skills/images/imo-bg.jpg)",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="banner-content-wrap">
                    {/* <p class="banner-info wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="500ms" style="visibility: visible; animation-duration: 1.5s; animation-delay: 500ms; animation-name: fadeInUp;">5 to 7 June
                            2019, Waterfront Hotel, London</p> */}
                    <h1
                      className="banner-title wow fadeInUp"
                      style={{
                        visibility: "visible",
                        color: "#dbc141",
                        animationName: "fadeInUp",
                      }}
                    >
                      {" "}
                      <span style={{ color: "#038C25" }}>Heart Land </span>
                      <br />
                      Skills Program
                    </h1>

                    <div
                      className="banner-btn wow fadeInUp"
                      data-wow-duration="1.5s"
                      data-wow-delay="800ms"
                      style={{
                        visibility: "visible",
                        animationDuration: "1.5s",
                        animationDelay: "800ms",
                        animationName: "fadeInUp",
                      }}
                    >
                      <a
                        href="https://gfa-tech.com/register-Heart Land"
                        className="btn"
                      >
                        Register Now!
                      </a>
                      {/* <a href="#" class="btn fill">Add to Calendar</a> */}
                    </div>
                  </div>
                  {/* Banner content wrap end */}
                </div>
                {/* col end*/}
                <div className="col-lg-4 offset-lg-1"></div>
                {/* col end*/}
              </div>
              {/* row end*/}
            </div>
            {/* Container end */}
          </div>
        </section>
        {/* banner end*/}
        <section
          className="main-container pb-6"
          id="main-container"
          style={{ backgroundColor: "#f9fafc" }}
        >
          <div className="container" id="about">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="blog-details">
                  <div className="post-meta text-center" id="about">
                    {renderSection(
                      "home",
                      <>
                        <EditableBlock initialContent="Click to edit heading" />
                        <EditableBlock initialContent="Click to edit subheading" />
                        {/* <EditableBlock
                          initialContent="Click to edit button text"
                          // isButton
                        /> */}
                      </>
                    )}

                    <EditableBlock initialContent="ABOUT THE PROGRAM" />
                    {/* <span>ABOUT THE PROGRAM</span> */}
                  </div>
                  <div className="entry-header">
                    <h2 className="entry-title text-center">
                      Providing Comprehensive Upskilling
                      <br /> To Youths And SMEs in imo State
                    </h2>
                  </div>
                  {/* header end */}
                  <div className="post-content post-single">
                    <div className="post-body clearfix">
                      <div
                        className="entry-content"
                        style={{ textAlign: "justify" }}
                      >
                        <p
                          className="text-meta"
                          data-aos="fade-up"
                          data-aos-duration={1200}
                        >
                          The Heart Land Skills Program is a visionary
                          initiative aimed to provide youth and SMEs
                          comprehensive support in areas such as digital
                          literacy, entrepreneurship training, access to
                          finance, mentorship, as well as placement for jobs and
                          income generation opportunities. Our mission is to
                          unleash the potentials of youth and SMEs through
                          relevant technological training and skill acquisition.
                        </p>{" "}
                        <p
                          className="text-meta"
                          data-aos="fade-up"
                          data-aos-duration={1200}
                          data-aos-delay={100}
                        >
                          Our vision involves selecting and nurturing potential
                          youths and early-stage businesses in imo State.
                          Through tailored mentorship, skill enhancement, and
                          the seamless integration of cutting-edge technology,
                          we aspire to make youths job-ready and catapult
                          businesses to unprecedented levels of success.
                        </p>
                      </div>
                      {/* entry content end*/}
                    </div>
                  </div>
                </div>
              </div>
              {/* Container end*/}
            </div>
          </div>
        </section>
        <section id="ts-experiences" className="ts-experiences">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 no-padding align-self-center">
                <div className="ts-exp-wrap">
                  <div className="ts-exp-content">
                    <p style={{ fontSize: "18px" }}>
                      <i className="fa fa-quote-left" />
                      <br />
                      We are committed to harnessing the incredible potential of
                      our city to become Africa's leading tech skill hub. With
                      our vibrant ecosystem, diverse talent pool, and strategic
                      partnerships, we're laying the foundation for innovation
                      and entrepreneurship to thrive.
                      <br /> <br />
                      Together, we will propel imo to the forefront of
                      technological advancement, empowering our youth and
                      driving economic growth for generations to come.
                      <br />
                      <i className="fa fa-quote-right" />
                      <br /> <br />{" "}
                      <span style={{ fontSize: "18px", fontWeight: 700 }}>
                        H.E. Hope Uzodinma{" "}
                      </span>
                      <br /> <span>Governor, Imo State. </span>
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 col-sm-12 col-sm-12 no-padding"
                style={{
                  backgroundImage:
                    "url(https://gfa-tech.com/testnet/heartland-skills/images/imo-gov.jpg)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
              {/* col end*/}
              {/* col end*/}
            </div>
            {/* row end*/}
          </div>
          {/* container fluid end*/}
          <img
            src="https://gfa-tech.com/testnet/heartland-skills/images/imo-gov.jpg"
            className="him"
            width="100%"
            height="auto"
          />
        </section>
        <section className="ts-intro-item section-bg" id="audience">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-4 wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="300ms"
              >
                <div className="intro-left-content">
                  <h2 className="column-title">
                    <span>Who should be involved?</span>
                    Who should apply for the Program?
                  </h2>
                  <p>
                    The Program is for indigenes and resident of imo state that
                    are:
                  </p>
                  <a
                    href="https://gfa-tech.com/register-Heart Land/"
                    className="btn"
                    style={{ marginBottom: "1rem" }}
                  >
                    Register now!
                  </a>
                </div>
              </div>
              {/* col end*/}
              <div className="col-lg-8">
                <div className="row">
                  <div
                    className="col-lg-6 wow fadeInUp"
                    data-wow-duration="1.5s"
                    data-wow-delay="400ms"
                  >
                    <div className="single-intro-text mb-30">
                      <i className="icon icon-ca" />
                      <h3 className="ts-title">JobSeekers</h3>
                      {/* <p>
                        Including battery manufacturers, 
                        charging infrastructure providers
                      </p> */}
                      <span className="count-number">01</span>
                    </div>
                    {/* single intro text end*/}
                  </div>
                  {/* col end*/}
                  <div
                    className="col-lg-6 wow fadeInUp"
                    data-wow-duration="1.5s"
                    data-wow-delay="500ms"
                  >
                    <div className="single-intro-text mb-30">
                      <i className="icon icon-government" />
                      <h3 className="ts-title"> Business Owners</h3>
                      {/* <p>
                        Including utility companies.
                      </p> */}
                      <span className="count-number">02</span>
                    </div>
                    {/* single intro text end*/}
                  </div>
                  {/* col end*/}
                  <div
                    className="col-lg-6 wow fadeInUp"
                    data-wow-duration="1.5s"
                    data-wow-delay="600ms"
                  >
                    <div className="single-intro-text mb-30">
                      <i className="icon icon-idea" />
                      <h3 className="ts-title">Working Class Professionals</h3>
                      {/* <p>
                        As well as component suppliers, ride-sharing & mobility services, 
                        energy storage companies.
                      </p> */}
                      <span className="count-number">03</span>
                    </div>
                    {/* single intro text end*/}
                  </div>
                  {/* col end*/}
                  <div
                    className="col-lg-6 wow fadeInUp"
                    data-wow-duration="1.5s"
                    data-wow-delay="700ms"
                  >
                    <div className="single-intro-text mb-30">
                      <i className="icon icon-fu" />
                      <h3 className="ts-title">Aspiring Business Owners</h3>
                      {/* <p>
                          Research & development 
  institutions, recycling & sustainability initiatives, 
  financial & insurance services.
                      </p> */}
                      <span className="count-number">04</span>
                    </div>
                    {/* single intro text end*/}
                  </div>
                  {/* col end*/}
                </div>
              </div>
              {/* col end*/}
            </div>
            {/* row end*/}
          </div>
          {/* container end*/}
        </section>
        {/* ts experience start*/}
        <section id="ts-experiences" className="ts-experiences">
          <img
            src="https://gfa-tech.com/testnet/heartland-skills/images/imo-comm.jpeg"
            className="him"
            width="100%"
            height="auto"
          />
          <div className="container-fluid">
            <div className="row">
              <div
                className="col-lg-6 col-sm-12 no-padding"
                style={{
                  backgroundImage:
                    "url(https://gfa-tech.com/testnet/heartland-skills/images/imo-comm.jpeg)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
              {/* col end*/}
              <div className="col-lg-6 no-padding align-self-center">
                <div className="ts-exp-wrap">
                  <div className="ts-exp-content">
                    <h2 className="column-title">
                      <span>
                        From the Office of the Commissioner for Digital Economy
                        and E-Governance - What do you stand to gain?
                      </span>
                      Technology Skill acquisition, enterpreneurship training as
                      well as placement for jobs and income generation
                      opportunities.
                    </h2>
                    <p>
                      The Program intends to aggregate youths, SMEs and business
                      owners and help them through the skill acquisition phase.
                      The Program will also help in developing knowledge and
                      networks necessary to:
                    </p>
                    <ul style={{ color: "#fff", marginLeft: "2rem" }}>
                      <li>Gain access to new job markets</li>
                      <li>Attract companies and hiring managers</li>
                      <li>Access finance opportunities</li>
                      <li>Develop soft skills</li>
                      <li>Build self confidence</li>
                    </ul>
                    <br /> <br />{" "}
                    <span
                      style={{
                        fontSize: "18px",
                        fontWeight: 700,
                        color: "#fff",
                      }}
                    >
                      {" "}
                      Dr Chimezie Amadi{" "}
                    </span>
                    <br />{" "}
                    <span style={{ color: "#fff" }}>
                      Commissioner for Digital Economy and E-Governance{" "}
                    </span>
                  </div>
                </div>
              </div>
              {/* col end*/}
            </div>
            {/* row end*/}
          </div>
          {/* container fluid end*/}
        </section>
        {/* ts experience end*/}
        {/* ts intro start */}
        {/* ts intro end*/}
        {/* ts funfact start*/}
        <section className="ts-event-outcome">
          <div className="container">
            <div className="intro-left-content">
              <h2 className="column-title">
                <span>Available Categories</span>
                Choose from wide range of skills in any of these:
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <div className="outcome-content">
                  <div className="outcome-img ">
                    <img
                      className
                      src="https://gfa-tech.com/testnet/heartland-skills/images/side-view-man-doing-presentation-meeting_23-2148817044.jpg"
                      alt=""
                    />
                  </div>
                  <h3 className="img-title text-white">Soft Skills</h3>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="outcome-content">
                  <div className="outcome-img ">
                    <img
                      className
                      src="https://gfa-tech.com/testnet/heartland-skills/images/side-view.png"
                      alt=""
                    />
                  </div>
                  <h3 className="img-title text-white">
                    Tech Enabled &amp; Adjacent Skills
                  </h3>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="outcome-content">
                  <div className="outcome-img ">
                    <img
                      className
                      src="https://gfa-tech.com/testnet/heartland-skills/images/composition-with-html-system-websites_23-2150866292.jpg"
                      alt=""
                    />
                  </div>
                  <h3 className="img-title text-white">
                    Core &amp; Advance Tech Skills
                  </h3>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="outcome-content">
                  <div className="outcome-img ">
                    <img
                      className
                      src="https://gfa-tech.com/testnet/heartland-skills/images/smiley-african-woman-working-market_23-2148761563.jpg"
                      alt=""
                    />
                  </div>
                  <h3 className="img-title text-white">SME Technical Skills</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ts-faq-sec" id="contact">
          <div className="container">
            <div className="col-12 col-lg-8 offset-lg-2">
              <div className="faq-content mb-70">
                <h2 className="column-title">General FAQ's</h2>
                <div
                  className="panel-group faq-item"
                  id="accordion"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <div className="panel faq-list panel-default">
                    <div className="panel-heading" role="tab" id="headingOne">
                      <h4 className="panel-title">
                        <a
                          role="button"
                          onClick={() => togglePanel("panel1")}
                          aria-expanded={activePanel === "panel1"}
                          aria-controls="collapseOne"
                        >
                          1. When does Exhibit Conference 2020 will occur?
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseOne"
                      className={`panel-collapse collapse ${
                        activePanel === "panel1" ? "show" : ""
                      }`}
                      role="tabpanel"
                      aria-labelledby="headingOne"
                    >
                      <div className="panel-body">
                        How you transform your business as technology, consumer,
                        habits industry dynamic s change? Find out from those
                        leading the charge.
                      </div>
                    </div>
                  </div>
                  <div className="panel faq-list panel-default">
                    <div className="panel-heading" role="tab" id="headingTwo">
                      <h4 className="panel-title">
                        <a
                          role="button"
                          onClick={() => togglePanel("panel2")}
                          aria-expanded={activePanel === "panel2"}
                          aria-controls="collapseTwo"
                        >
                          2. Where does Eventime take place?
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseTwo"
                      className={`panel-collapse collapse ${
                        activePanel === "panel2" ? "show" : ""
                      }`}
                      role="tabpanel"
                      aria-labelledby="headingTwo"
                    >
                      <div className="panel-body">
                        How you transform your business as technology, consumer,
                        habits industry dynamic s change? Find out from those
                        leading the charge.
                      </div>
                    </div>
                  </div>
                  <div className="panel faq-list panel-default">
                    <div className="panel-heading" role="tab" id="headingThree">
                      <h4 className="panel-title">
                        <a
                          role="button"
                          onClick={() => togglePanel("panel3")}
                          aria-expanded={activePanel === "panel3"}
                          aria-controls="collapseThree"
                        >
                          3. How can I get the latest news on Exhibit 2020?
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseThree"
                      className={`panel-collapse collapse ${
                        activePanel === "panel3" ? "show" : ""
                      }`}
                      role="tabpanel"
                      aria-labelledby="headingThree"
                    >
                      <div className="panel-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </div>
                    </div>
                  </div>
                  <div className="panel faq-list panel-default">
                    <div className="panel-heading" role="tab" id="headingFour">
                      <h4 className="panel-title">
                        <a
                          role="button"
                          onClick={() => togglePanel("panel4")}
                          aria-expanded={activePanel === "panel4"}
                          aria-controls="collapseFour"
                        >
                          4. How can my company sponsor this Event 2018?
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseFour"
                      className={`panel-collapse collapse ${
                        activePanel === "panel4" ? "show" : ""
                      }`}
                      role="tabpanel"
                      aria-labelledby="headingFour"
                    >
                      <div className="panel-body">
                        How you transform your business as technology, consumer,
                        habits industry dynamic s change? Find out from those
                        leading the charge.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              {/* col end */}
              <div className="col-lg-8">
                <h2 className="column-title">Contact Us</h2>
                <div className="sidebar-widgets">
                  <div className="widget asq-form">
                    <form action="#" method="POST" className="ts-form">
                      <div className="row">
                        <div className="col-md-6 col-sm-12">
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="formFirstName"
                            >
                              First Name:<span className="text-danger">*</span>
                            </label>
                            <input
                              name="firstName"
                              placeholder="First Name"
                              required=""
                              type="text"
                              id="formFirstName"
                              className="form-control"
                              defaultValue=""
                            />
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="formLastName"
                            >
                              Last Name:<span className="text-danger">*</span>
                            </label>
                            <input
                              name="lastName"
                              placeholder="Last Name"
                              required=""
                              type="text"
                              id="formLastName"
                              className="form-control"
                              defaultValue=""
                            />
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="formEmail">
                              Email:<span className="text-danger">*</span>
                            </label>
                            <input
                              name="email"
                              placeholder="Email"
                              required=""
                              type="email"
                              id="formEmail"
                              className="form-control"
                              defaultValue=""
                            />
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="formPhoneNumber"
                            >
                              Phone Number:
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              name="contact"
                              placeholder="Phone Number"
                              required=""
                              type="tel"
                              id="formPhoneNumber"
                              className="form-control"
                              defaultValue=""
                            />
                          </div>
                        </div>
                        <div className="col-md-12 col-sm-12">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="formContact">
                              Contact Reason:
                              <span className="text-danger">*</span>
                            </label>
                            <select
                              name="reason"
                              required=""
                              className="form-control form-select"
                              id="formContact"
                            >
                              <option
                                value=""
                                className="text-muted"
                                selected=""
                              >
                                Select
                              </option>
                              <option value="Design" className="text-dark">
                                Design
                              </option>
                              <option value="Development" className="text-dark">
                                Development
                              </option>
                              <option value="Sales" className="text-dark">
                                Sales
                              </option>
                              <option value="Support" className="text-dark">
                                Support
                              </option>
                              <option value="Marketing" className="text-dark">
                                Marketing
                              </option>
                              <option value="Billing" className="text-dark">
                                Billing
                              </option>
                              <option value="Feedback" className="text-dark">
                                Feedback
                              </option>
                              <option value="Other" className="text-dark">
                                Other
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-12 col-sm-12">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="formMessage">
                              Message:
                            </label>
                            <textarea
                              name="message"
                              placeholder="Message"
                              rows={5}
                              style={{ height: "134px" }}
                              id="formMessage"
                              className="form-control"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="ts-btn-wraper">
                        <input
                          type="submit"
                          className="btn"
                          id="ts_contact_submit"
                          defaultValue="SEND QUESTION"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="widget social-box">
                  <h4 className="widget-title">Socials</h4>
                  <ul>
                    <li className="ts-facebook">
                      <a href="#">
                        <i className="fab fa-facebook" />{" "}
                      </a>
                    </li>
                    <li className="ts-twitter">
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>

                    <li className="ts-linkedin">
                      <a href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                    <li className="ts-instagram">
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="widget social-box">
                  <h4 className="widget-title">Email</h4>
                  <p>youremail@domain.com</p>
                </div>

                <div className="widget social-box">
                  <h4 className="widget-title">Phone</h4>
                  <p>+234 80 1234 5678</p>
                </div>

                {/* col end*/}
              </div>
            </div>
          </div>
          {/* .container end */}
        </section>

        <div className="footer-area">
          {/* ts-book-seat start*/}
          <section
            className="ts-book-seat"
            style={{
              backgroundImage:
                "url(https://gfa-tech.com/testnet/heartland-skills/images/book_seat_img.jpg)",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="book-seat-content text-center">
                    <h2 className="section-title white">
                      <span>Hurry up!</span>
                      Application closes on 30th of May, 2024
                    </h2>
                    <a
                      href="https://gfa-tech.com/register-Heart-Land/"
                      style={{ marginBottom: "1rem" }}
                      className="btn"
                    >
                      Register now!
                    </a>
                  </div>
                </div>
                {/* col end*/}
              </div>
              {/* row end*/}
            </div>
            {/* container end*/}
          </section>
          {/* book seat  end*/}
          <section className="ts-blog section-bg">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h2 className="section-title">
                    What's being said about the program?
                  </h2>
                </div>
                {/* col end*/}
              </div>
              {/* row end*/}
              <div className="row">
                <div className="col-lg-4">
                  <div className="post">
                    <div className="post-media post-image">
                      <a target="_blank" href="index.html">
                        <img
                          src="https://gfa-tech.com/testnet/heartland-skills/images/imo-state-logo.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="post-body">
                      <div className="post-meta">
                        <span className="post-author">
                          <a href="#">GFA TECHNOLOGIES</a>
                        </span>
                        {/*                         <div class="post-meta-date">
                               10 days ago
                            </div> */}
                      </div>
                      <div className="entry-content">
                        <a target="_blank" href="index.html">
                          <p style={{ color: "#000" }}>
                            imo, International Partners to Engage 100,000 SMSEs,
                            Youths
                          </p>
                        </a>
                      </div>
                      <div className="post-footer">
                        <a
                          target="_blank"
                          href="index.html"
                          className="btn-link"
                        >
                          Read More <i className="icon icon-arrow-right" />
                        </a>
                      </div>
                    </div>
                    {/* post-body end */}
                  </div>
                  {/* post end*/}
                </div>
                {/* col end*/}
                <div className="col-lg-4">
                  <div className="post">
                    <div className="post-media post-image">
                      <a target="_blank" href="index.html">
                        <img
                          src="https://media.getfundedafrica.com/wp-content/uploads/2024/03/IMG_0014-780x470.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="post-body">
                      <div className="post-meta">
                        <span className="post-author">
                          <a href="#">GFA TECHNOLOGIES</a>
                        </span>
                        {/*                           <div class="post-meta-date">
                                 8 days ago
                              </div> */}
                      </div>
                      {/* header end */}
                      <div className="entry-content">
                        <a target="_blank" href="index.html">
                          <p style={{ color: "#000" }}>
                            GFA Technologies Unveils The Heart Land Skills
                            Program, an Initiative for imo State SMEs and Youths
                          </p>
                        </a>
                      </div>
                      <div className="post-footer">
                        <a
                          target="_blank"
                          href="index.html"
                          className="btn-link"
                        >
                          Read More <i className="icon icon-arrow-right" />
                        </a>
                      </div>
                    </div>
                    {/* post-body end */}
                  </div>
                  {/* post end*/}
                </div>
                {/* col end*/}
                <div className="col-lg-4">
                  <div className="post">
                    <div className="post-media post-image">
                      <a target="_blank" href="index.html">
                        <img
                          src="https://gfa-tech.com/testnet/heartland-skills/images/imo-state-logo.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="post-body">
                      <div className="post-meta">
                        <span className="post-author">
                          <a href="#">GFA TECHNOLOGIES</a>
                        </span>
                        {/*                           <div class="post-meta-date">
                                 8 days ago
                              </div> */}
                      </div>
                      {/* header end */}
                      <div className="entry-content">
                        <a target="_blank" href="index.html">
                          <p style={{ color: "#000" }}>
                            Unlocking Digital Potential: imo State’s Partnership
                            with GFA Technologies and Global Tech Giants to
                            Empower 100,000 SMSEs and Youths
                          </p>
                        </a>
                      </div>
                      <div className="post-footer">
                        <a
                          target="_blank"
                          href="index.html"
                          className="btn-link"
                        >
                          Read More <i className="icon icon-arrow-right" />
                        </a>
                      </div>
                    </div>
                    {/* post-body end */}
                  </div>
                  {/* post end*/}
                </div>
                {/* col end*/}
              </div>
              {/* row end*/}
            </div>
            {/* container end*/}
            {/* shap image*/}
          </section>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n          /* Style for the modal overlay */\n          .modal-overlay {\n              display: none;\n              position: fixed;\n              top: 0;\n              left: 0;\n              width: 100%;\n              height: 100%;\n              padding: 0 1.5rem;\n              background: rgba(0, 0, 0, 0.5);\n              justify-content: center;\n              align-items: center;\n              z-index: 1000;\n          }\n      \n          /* Style for the modal content */\n          .modal-content {\n              background: #fff;\n              padding: 20px;\n              border-radius: 8px;\n              box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n          }\n      \n          /* Style for the close button */\n          .close-button {\n              position: absolute;\n              top: 10px;\n              right: 40px;\n              cursor: pointer;\n          }\n      \n          /* Style for the notification */\n          .notification {\n              display: none;\n              text-align: center;\n              padding: 10px;\n              margin-top: 10px;\n          }\n      \n          .notification.success {\n              \n              color: #4CAF50;\n          }\n      \n          .notification.error {\n              \n              color: #f44336;\n          }\n      ",
            }}
          />

          <footer className="ts-footer" style={{ padding: "1rem 0rem" }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  {/* footer menu end*/}
                  <div className="copyright-text text-center">
                    <p>
                      Copyright © 2024{" "}
                      <a href="https://gfa-tech.com"> GFA Technologies.</a> All
                      Rights Reserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          {/* footer end*/}
          <div className="BackTo">
            <a href="#" className="fa fa-angle-up" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TemplateOne;
