// import node module libraries
import { Link } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";

// import media files


const CTA2Buttons = ({ title, description, btntext1, btnlink1, btntext2, btnlink2 }) => {
  return (
    <section
      className="bg-primary py-lg-16 p-6 px-lg-20 rounded-4 text-center"
      style={{
        
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    >
      <Container>
        {/*  row  */}
        <Row className="justify-content-center text-center">
          <Col md={9} sm={12}>
            {/* heading  */}
            <h2 className="display-4 text-white"> {title}</h2>
            <p className="lead px-lg-12 mb-6 text-white">{description}</p>
            {/* button */}
            <div className="d-grid d-md-block">
              <Link to={btnlink1} className="btn btn-white btn-lg mb-2 mb-md-0">
                {btntext1}
              </Link>{" "}
              <Link to={btnlink2} className="btn btn-outline-white btn-lg mb-2 mb-md-0">
                {btntext2}
              </Link>{" "}
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    
  );
};
export default CTA2Buttons;
