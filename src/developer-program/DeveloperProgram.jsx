import NavbarComponent from "./components/Navbar"; // Make sure the path is correct
import Hero from "./components/Hero";
import ProgramSection from "./components/ProgramSection";
import Updates from "./components/Updates";
import Events from "./components/Events";
import Awards from "./components/Awards";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";

const DeveloperProgram = () => {
  return (
    <div className="bg-white overflow-hidden">
      <Container>
        <NavbarComponent />
        {/* Alert Component */}
        {/* <Alert variant="info" className="mt-4">
          Important: Due to EU & UK Payments regulatory requirements, an additional security verification via Digital Signatures is required for certain API calls that are made by EU/UK sellers. Please refer to Digital Signatures for APIs to learn more on the impacted APIs and the process to create signature to be included in the HTTP payload.
        </Alert> */}

        {/* Header Image and Text */}
        <Hero />

        {/* Join, Develop, Grow Section */}
        <ProgramSection />

        {/* Updates Section */}
        <Updates />

        {/* Awards section */}
        <Awards />

        {/* Events Section */}
        <Events />
      </Container>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DeveloperProgram;
