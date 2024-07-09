// import node module libraries
import { Link } from 'react-router-dom';
import { Col, Row, Container } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';

// import custom components
import SectionHeadingCenter from '../../Components/marketing/common/section-headings/SectionHeadingCenter';

// import sub components
import InstructorCard from './InstructorCard';

// import data files
import { InstructorsList } from './LandingCoursesData';

const WorldClassInstructors = () => {
	const title = 'What can you use DIMP for';
	const subtitle = 'As a corporate organization';
	const description = ``;

	const isLaptop = useMediaQuery({ minWidth: 1024, maxWidth: 1445 });

	return (
		<section className="py-8 py-lg-8 bg-light-gradient-top bg-white">
			<Container>
				<SectionHeadingCenter
					title={title}
					description={description}
					subtitle={subtitle}
					
				/>
				<Row>
					{InstructorsList.map((item, index) => (
						<Col
							key={index}
							xl={3}
							lg={4}
							md={6}
							sm={12}
							className={`${
								isLaptop && index === 3 ? 'd-lg-none d-xl-block' : ''
							}`}
						>
							<InstructorCard item={item} />
						</Col>
					))}
				</Row>
				
			</Container>
		</section>
	);
};

export default WorldClassInstructors;
