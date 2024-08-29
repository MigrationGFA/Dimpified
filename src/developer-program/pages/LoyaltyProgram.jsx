
import { Container, Row, Col, Table } from "react-bootstrap";
import { tiers, benefits, solutionProviderPages } from "../utils/constant";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";

const LoyaltyProgram = () => {
  return (
    <div className="overflow-hidden bg-white"><NavbarComponent />
    <Container className="mt-5">
      <Row>
        <Col>
          <h1>Loyalty Program</h1>
          <p>
            The Loyalty Program recognizes and rewards our best sell-side developers. It has three tiers, which reflect a developer&apos;s Dimp business scale and solution sophistication using Dimp APIs:
          </p>
          <ul>
            {tiers.map((tier) => (
              <li key={tier.tier}>
                <strong>{tier.tier}</strong> – {tier.description}
              </li>
            ))}
          </ul>
          <p>
            The program is currently invite only. Placement in or movement between tiers is made at the sole discretion of Dimp.
          </p>
          <p>All developers in good standing are eligible for consideration.</p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h2>Benefits by tier</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Benefit</th>
                <th>Details</th>
                <th>Gold</th>
                <th>Silver</th>
                <th>Bronze</th>
              </tr>
            </thead>
            <tbody>
              {benefits.map((benefit) => (
                <tr key={benefit.benefit}>
                  <td>{benefit.benefit}</td>
                  <td>{benefit.details}</td>
                  <td>{benefit.gold}</td>
                  <td>{benefit.silver}</td>
                  <td>{benefit.bronze}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <p>* International Solution Provider pages:</p>
          <ul>
            {solutionProviderPages.map((page) => (
              <li key={page}>{page}</li>
            ))}
          </ul>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h2>Badges</h2>
          <p>
            Loyalty Program Badges indicate whether a developer is an Dimp Gold, Silver, or Bronze Solution Provider. A developer can use their badge to promote their tier status in accordance with the API License Agreement and the Badge Usage Terms. Below is an example badge.
          </p>
          <p>Sample solution provider badge</p>
        </Col>
      </Row>
    </Container>
    <Footer />
    </div>
      
  );
};

export default LoyaltyProgram;
