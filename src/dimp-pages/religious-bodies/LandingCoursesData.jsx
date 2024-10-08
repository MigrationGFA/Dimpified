// import media files

// import testimonial images
import Avatar1 from "../../dimp-home/images/avatar/avatar-1.jpg";
import Avatar2 from "../../dimp-home/images/avatar/avatar-2.jpg";
import Avatar3 from "../../dimp-home/images/avatar/avatar-3.jpg";
import Avatar4 from "../../dimp-home/images/avatar/avatar-4.jpg";
import Avatar5 from "../../dimp-home/images/avatar/avatar-5.jpg";
import Avatar6 from "../../dimp-home/images/avatar/avatar-6.jpg";
import Avatar7 from "../../dimp-home/images/avatar/avatar-7.jpg";
import Avatar8 from "../../dimp-home/images/avatar/avatar-8.jpg";

// import instructors images
import InstructorImage1 from "../images/upskilling.jpg";
import InstructorImage2 from "../images/egovernance.jpg";
import InstructorImage3 from "../images/tax.jpg";
import InstructorImage4 from "../images/licensing.jpg";

export const InstructorsList = [
  {
    id: 1,
    image: InstructorImage1,
    name: "UpSkilling Programs",
    courses: 6,
    students: 9692,
    designation: "Professional Web Developer",
    link: "#",
    rating: 4.5,
  },
  {
    id: 2,
    image: InstructorImage2,
    name: "Accelerator Programs",
    courses: 4,
    students: 5128,
    designation: "Developer of Bootcamp",
    link: "#",
    rating: 4.5,
  },
  {
    id: 3,
    image: InstructorImage3,
    name: "Incubator Programs",
    courses: 8,
    students: 7423,
    designation: "Engineering Architect",
    link: "#",
    rating: 4.5,
  },
  {
    id: 4,
    image: InstructorImage4,
    name: "Pitch Competitons",
    courses: 10,
    students: 3896,
    designation: "Web Developer and Designer",
    link: "#",
    rating: 4.5,
  },
];

export const TestimonialsList = [
  {
    id: 1,
    name: "Licensing",
    designation: "Web Developer,UK",
    image: Avatar1,
    content:
      "I started at stage zero. With Geeks I was able to start learning online and eventually build up enough knowledge and skills to transition into a well-paying career.",
    rating: 5.0,
  },
  {
    id: 2,
    name: "Linda Shenoy",
    designation: "Developer and Bootcamp Instructor",
    image: Avatar2,
    content:
      "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vulputate euismod justo in consequat. Sed tempus elementum urnanisl et lacus.",
    rating: 5.0,
  },
  {
    id: 3,
    name: "Jean Watson",
    designation: "Engineering Architect",
    image: Avatar3,
    content:
      "Sed pretium risus magna, ac efficitur nunc rutrum imperdiet. Vivamus sed ante sed mi fermentum tempus. Nullam finibus augue eget felis efficitur semper.",
    rating: 5.0,
  },

  {
    id: 4,
    name: "John Deo",
    designation: "Web Developer,UK",
    image: Avatar4,
    content:
      "Morbi quis posuere lacus. Morbi et metus sit amet tellus dapibus aliquam. Morbi consectetur magna vel turpis lobortis lorem iopsum dolor sit commodo.",
    rating: 4.5,
  },
  {
    id: 5,
    name: "Rubik Nanda",
    designation: "Web Developer,UK",
    image: Avatar5,
    content:
      "Curabitur sollicitudin mi et sagittis egestas. Curabitur pellentesque nibh id enim hendrerit, at mollis neque rutrum. Sed nibh velit, tristique et dolor vitae.",
    rating: 4.5,
  },
  {
    id: 6,
    name: "Barry Watson",
    designation: "Web Developer,UK",
    image: Avatar6,
    content:
      "Vestibulum in lobortis purus. Quisque sem turpis, hendrerit quis lacinia nec, rutrum nec velit. Nullam lobortis rhoncus tincidunt lorem ispun dnascetur ridiculus mus.",
    rating: 4.5,
  },
  {
    id: 7,
    name: "Jean Watson",
    designation: "Web Developer,UK",
    image: Avatar7,
    content:
      "Praesent sit amet ornare magna, vitae consequat arcu. Vestibulum at dictum erat, a fringilla ante. Nam et nibh ut nunc rutrum suscipit quis non neque. Nulla facilisi.",
    rating: 4.5,
  },
  {
    id: 8,
    name: "Barry Watson",
    designation: "Engineering Architect",
    image: Avatar8,
    content:
      "Sed pretium risus magna, ac efficitur nunc rutrum imperdiet. Vivamus sed ante sed mi fermentum tempus. Nullam finibus augue eget felis efficitur semper.",
    rating: 4.5,
  },
];
export const LandingCoursesData = [InstructorsList, TestimonialsList];

export default LandingCoursesData;
