import NavbarComponent from "./components/Navbar"; // Make sure the path is correct
import Hero from "./components/Hero";
import ProgramSection from "./components/ProgramSection";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import AffiliateDetails from "./components/AffiliateDetails";
import ReadyToJoin from "./components/ReadyToJoin";
import HowToGetStarted from "./components/HowToGetStarted";

const AgentPage = () => {
  return (
    <div className="bg-white overflow-hidden">
      <NavbarComponent />
      <Container>
        {/* Alert Component */}
        {/* <Alert variant="info" className="mt-4">
          Important: Due to EU & UK Payments regulatory requirements, an additional security verification via Digital Signatures is required for certain API calls that are made by EU/UK sellers. Please refer to Digital Signatures for APIs to learn more on the impacted APIs and the process to create signature to be included in the HTTP payload.
        </Alert> */}

        <Hero />

        <ProgramSection />

        <AffiliateDetails />

        <HowToGetStarted />

        <ReadyToJoin />
      </Container>

      <Footer />
    </div>
  );
};

export default AgentPage;
