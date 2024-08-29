import Events from "../components/Events";
import Footer from "../components/Footer";
import NavbarComponent from "../components/Navbar";
import { Container, Row, Col } from "react-bootstrap";

const AfffliateProgram = () => {
  return (
    <div className="overflow-hidden bg-white">
        <NavbarComponent />
        <Container className="mt-5">
      <Events />
    </Container> 
    <Footer />
    </div>
   
  );
};

export default AfffliateProgram;
