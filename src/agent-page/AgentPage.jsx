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
