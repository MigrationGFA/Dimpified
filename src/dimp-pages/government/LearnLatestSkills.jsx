// import node module libraries
import { useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';

// import media files
import EducationVideoImage from './images/data.jpeg';

const LearnLatestSkills = () => {
  const [isOpen, setOpen] = useState(false);
  const [YouTubeURL] = useState('JRzWRZahOVU');
  return (
    <section className="py-lg-10 py-4 px-4 bg-gray-100">
      <Container>
        <Row>
          <Col xl={{ span: 10, offset: 1 }} md={12} xs={12}>
            <Row className="align-items-center">
              <Col lg={5} md={12} xs={12}>
                <div className="mb-5 mb-lg-0">
                  <h2 className="display-4 fw-bold mb-3">Leverage our <u className="text-warning"><span
                    className="text-primary">visualization feature
                  </span></u> to make better decisions.</h2>
                  <p className="mb-5 lead">Get access to real-time data of the users that onboard on your ecosystem.</p>
                  <Link href="#!" className="btn btn-outline-secondary">Get Started Now</Link>
                </div>
              </Col>
              <Col lg={{ span: 6, offset: 1 }} md={12} xs={12}>
                <div
                  className="d-flex justify-content-center position-relative rounded py-17 border-gray-100 border border-4 rounded-3 bg-cover"
                  style={{ backgroundImage: `url(${EducationVideoImage})` }}
                >
                  <Link className="popup-youtube icon-shape rounded-circle btn-play icon-xl text-decoration-none"
                    to="#"
                    onClick={() => setOpen(true)}>
                    <i className="fe fe-play"></i>
                  </Link>
                </div>

                {/* video popup */}
                <ModalVideo
                  channel="youtube"
                  autoplay
                  isOpen={isOpen}
                  videoId={YouTubeURL}
                  onClose={() => setOpen(false)}
                />
                {/* end of video popup */}

              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default LearnLatestSkills