import { Card, Col, Row } from "react-bootstrap";
import { GiPlatform } from "react-icons/gi";
import { HiOutlineStatusOnline } from "react-icons/hi";

const AffiliateDetails = () => {
  return (
    <div className="px-8 overflow-hidden">
      <Row className="mt-8 py-6 bg-white overflow-hidden">
        <Col>
          <h3 className="display-4 text-center">Affiliate Programs</h3>
          <p className="fw-bold text-center">
            Discover our affiliate programs and start earning commissions.
          </p>
          <Row>
            <Col md={6} className="mt-2">
              <Card className="mb-4 border h-100 text-center">
                <Card.Body>
                  <div
                    className="d-flex justify-content-center align-items-center mx-auto bg-primary rounded-circle mb-2"
                    style={{
                      width: "60px",
                      height: "60px",
                    }}
                  >
                    <GiPlatform
                      style={{
                        width: "100px",
                        height: "100px",
                        color: "white",
                        padding: 10,
                      }}
                      className="align-self-center"
                    />
                  </div>
                  <Card.Title className="display-6">
                    Platform Subscription Affiliates
                  </Card.Title>
                  <Card.Text>
                    Earn 15% commission by helping others get started on DIMP by
                    promoting our subscription plans. With every subscription
                    sale you make, you&apos;ll earn a 15% commission. It&apos;s
                    that simple! Whether your audience consists of small
                    business owners, freelancers, or creative professionals,
                    you&apos;ll be providing them with valuable tools while
                    earning great commissions.
                  </Card.Text>
                  <Card.Text>
                    <strong>How It Works:</strong>
                    <ul>
                      <li>
                        Promote DIMP&apos;s subscription plans in-person or
                        through your unique affiliate link.
                      </li>
                      <li>
                        When someone subscribes to our platform based on citing
                        your Affiliate ID during sign-up or through your link,
                        you earn 15% of the subscription fee.
                      </li>
                    </ul>
                  </Card.Text>
                  {/* <Button variant="primary">Learn more</Button> */}
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mt-2">
              <Card className="mb-4 border h-100 text-center">
                <Card.Body>
                  <div
                    className="d-flex justify-content-center align-items-center mx-auto bg-primary rounded-circle mb-2"
                    style={{
                      width: "60px",
                      height: "60px",
                    }}
                  >
                    <HiOutlineStatusOnline
                      style={{
                        width: "100px",
                        height: "100px",
                        color: "white",
                        padding: 10,
                      }}
                      className="align-self-center"
                    />
                  </div>
                  <Card.Title className="display-6">
                    Online Store Referral Affiliates
                  </Card.Title>
                  <Card.Text>
                    Earn up to 5% commission by referring your audience to
                    participating online stores. If you have an audience that
                    loves online shopping or needs specific services, this is a
                    great way to monetize your content.
                  </Card.Text>
                  <Card.Text>
                    <strong>How It Works:</strong>
                    <ul>
                      <li>
                        Share your unique referral link for participating online
                        stores.
                      </li>
                      <li>
                        When someone makes a purchase through your link, you
                        earn 5% of the transaction value.
                      </li>
                      <li>
                        Watch your earnings grow with every successful referral!
                      </li>
                    </ul>
                  </Card.Text>
                  {/* <Button variant="primary">Learn more</Button> */}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default AffiliateDetails;
