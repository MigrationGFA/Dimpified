import { Col, Row } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import { BsFillLayersFill } from "react-icons/bs";
import { GrMoney } from "react-icons/gr";
import { BiGlobe, BiSolidOffer } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MdOutlineTimeline } from "react-icons/md";

const ProgramSection = () => {
  return (
    <div className="px-8 mb-4">
      <Row className="mt-6 d-flex justify-content-center" id="programs">
        <Col
          lg={4}
          xs={10}
          className="mt-6 d-flex flex-column align-items-center text-center"
        >
          <div
            className="d-flex justify-content-center bg-primary rounded-circle mb-2"
            style={{
              width: "60px",
              height: "60px",
            }}
          >
            <GrMoney
              style={{
                width: "100px",
                height: "100px",
                color: "white",
                padding: 10,
              }}
              className="align-self-center"
            />
          </div>
          <div className="fw-semibold h4">Earn Generous Commissions</div>
          <div>
            Get rewarded for every sale you make! We offer competitive
            commission rates to ensure your hard work pays off.
          </div>
        </Col>
        <Col
          lg={4}
          xs={10}
          className="mt-6 d-flex flex-column align-items-center text-center"
        >
          <div
            className="d-flex justify-content-center bg-primary rounded-circle mb-2"
            style={{
              width: "60px",
              height: "60px",
            }}
          >
            <BsFillLayersFill
              style={{
                width: "100px",
                height: "100px",
                color: "white",
                padding: 10,
              }}
              className="align-self-center"
            />
          </div>
          <div className="fw-semibold h4">Two Affiliate Tiers</div>
          <div>
            Whether you want to focus on getting people to subscribe to the DIMP
            platform or online store referrals, we have a program tailored for
            you.
          </div>
        </Col>
        <Col
          lg={4}
          xs={10}
          className="mt-6 d-flex flex-column align-items-center text-center"
        >
          <div
            className="d-flex justify-content-center bg-primary rounded-circle mb-2 "
            style={{
              width: "60px",
              height: "60px",
            }}
          >
            <BiSolidOffer
              style={{
                width: "100px",
                height: "100px",
                color: "white",
                padding: 10,
              }}
              className="align-self-center"
            />
          </div>
          <div className="fw-semibold h4">Exclusive Access</div>
          <div>
            As an affiliate, you&apos;ll receive access to promotional
            materials, special offers, and support to help you succeed.
          </div>
        </Col>
        <Col
          lg={4}
          xs={10}
          className="mt-6 d-flex flex-column align-items-center text-center"
        >
          <div
            className="d-flex justify-content-center bg-primary rounded-circle mb-2"
            style={{
              width: "60px",
              height: "60px",
            }}
          >
            <MdOutlineTimeline
              style={{
                width: "100px",
                height: "100px",
                color: "white",
                padding: 10,
              }}
              className="align-self-center"
            />
          </div>
          <div className="fw-semibold h4">Real-Time Tracking</div>
          <div>
            Stay on top of your earnings with our user-friendly dashboard that
            provides real-time data on your referrals and commissions.
          </div>
        </Col>
        <Col
          lg={4}
          xs={10}
          className="mt-6 d-flex flex-column align-items-center text-center"
        >
          <div
            className="d-flex justify-content-center bg-primary rounded-circle mb-2"
            style={{
              width: "60px",
              height: "60px",
            }}
          >
            <BiGlobe
              style={{
                width: "100px",
                height: "100px",
                color: "white",
                padding: 10,
              }}
              className="align-self-center"
            />
          </div>
          <div className="fw-semibold h4">Be Part of Something Bigger</div>
          <div>
            Join a network of passionate individuals who are making a difference
            by empowering businesses and entrepreneurs with top-notch digital
            tools.
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProgramSection;
