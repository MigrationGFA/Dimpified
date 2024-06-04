// import node module libraries
import { useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';

// import media files
import TemplatesImage from '../assets/images/dimp/templates.png';

const TemplatesShowcase = () => {
  const [isOpen, setOpen] = useState(false);
  const [YouTubeURL] = useState('JRzWRZahOVU');
  return (
    <section className="py-lg-10 py-10 mt-5">
      <Container>
        <Row>
          <Col xl={{ span: 10, offset: 1 }} md={12} xs={12}>
            <Row className="align-items-center">
              <Col lg={12} md={12} xs={12}>
                <div className="mb-3 mb-lg-6">
                  <h2 className="display-5 fw-bold mb-3 text-center">Build a high-converting page for your ecosystem with <u className="text-warning"><span
                    className="text-primary">100s of beautifully crafted templates
                  </span></u></h2>
                  
                  
                </div>
              </Col>
              <Col lg={12} md={12} xs={12}>
                <div
                  className="py-5 d-flex justify-content-center position-relative rounded py-17 border-gray-100 border border-1 rounded-4 bg-cover w-100"
                  style={{
                    backgroundImage: `url(${TemplatesImage})`,
                    borderRadius: '6rem'
                  }}
                  
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

export default TemplatesShowcase