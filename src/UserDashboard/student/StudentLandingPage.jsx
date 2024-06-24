import React, { Fragment } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import CourseSlider from '../Components/marketing/pages/courses/CourseSlider';
import FeaturesList from '../Components/marketing/pages/courses/course-index/FeaturesList';
import HeroHeader from '../Components/marketing/pages/courses/course-index/HeroHeader';
import NavbarDefault from '../Pages/home-academy/navbars/NavbarDefault';
import FooterWithLinks from '../Pages/home-academy/FooterWithLinks';

const StudentLandingPage = () => {
   
    return (
        <Fragment>
            <NavbarDefault />
            <HeroHeader />
            <FeaturesList />
            
            <section className="pt-lg-12 pb-lg-3 pt-8 pb-6">
				<Container>
					<Row className="mb-4">
						<Col>
							<h2 className="mb-0 mx-2">Recommended to you</h2>
						</Col>
					</Row>
					<div className="position-relative">
						<CourseSlider recommended={true} />
					</div>
				</Container>
			</section>
          
            <section className="pb-lg-3 pt-lg-3">
                <Container>
                    <Row className="mb-4">
                        <Col>
                            <h2 className="mb-0 mx-2">Most Popular</h2>
                        </Col>
                    </Row>
                    <div className="position-relative">
                        <CourseSlider popular={true} />
                    </div>
                </Container>
            </section>
            <section className="pb-lg-8 pt-lg-3 py-6">
                <Container>
                    <Row className="mb-4">
                        <Col>
                            <h2 className="mb-0 mx-2">Trending</h2>
                        </Col>
                    </Row>
                    <div className="position-relative">
                        <CourseSlider trending={true} />
                    </div>
                </Container>
            </section>
            <FooterWithLinks />
        </Fragment>
    );
};

export default StudentLandingPage;
