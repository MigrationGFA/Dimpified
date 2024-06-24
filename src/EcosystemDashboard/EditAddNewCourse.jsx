// import node module libraries
import React, { useState, Fragment } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import custom components
import GKStepper from '../Components/elements/stepper/GKStepper';

// import sub components ( Steps )
import BasicInformation from '../EcosystemDashboard/Editsteps/BasicInformation';
import CoursesMedia from '../EcosystemDashboard/Editsteps/CoursesMedia';
import Curriculum from '../EcosystemDashboard/Editsteps/Curriculum';
import Settings from '../EcosystemDashboard/Editsteps/Settings';

const AddNewCourse = () => {
	const [currentStep, setCurrentStep] = useState(1);
	const [formData, setFormData] = useState({
		course_title: 'Course Title',
		category_category: 'React',
		courses_level: 'Intermediate',
		course_description: 'Ahmedabad'
	});
	const handleChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value
		});
	};
	const next = () => {
		setCurrentStep(currentStep === 4 ? 1 : currentStep + 1);
	};
	const previous = () => {
		setCurrentStep(currentStep === 1 ? 1 : currentStep - 1);
	};

	const steps = [
		{
			id: 1,
			title: 'Basic Information',
			content: (
				<BasicInformation
					data={formData}
					handleChange={handleChange}
					next={next}
				/>
			)
		},
		{
			id: 2,
			title: 'Courses Media',
			content: (
				<CoursesMedia
					data={formData}
					handleChange={handleChange}
					next={next}
					previous={previous}
				/>
			)
		},
		{
			id: 3,
			title: 'Curriculum',
			content: (
				<Curriculum
					data={formData}
					handleChange={handleChange}
					next={next}
					previous={previous}
				/>
			)
		},
		{
			id: 4,
			title: 'Settings',
			content: (
				<Settings
					data={formData}
					handleChange={handleChange}
					next={next}
					previous={previous}
				/>
			)
		}
	];

	return (
		<Fragment>
			<section className="py-4 py-lg-6 bg-primary">
				<Container>
					<Row>
						<Col lg={{ span: 10, offset: 1 }} md={12} sm={12}>
							<div className="d-lg-flex align-items-center justify-content-between">
								<div className="mb-4 mb-lg-0">
									<h1 className="text-white mb-1">Edit Course</h1>
									<p className="mb-0 text-white lead">
										Just fill the form and edit your course.
									</p>
								</div>
								<div>
									<Link
										to="/Instructordashboard/My-Courses"
										className="btn btn-white "
									>
										Back to Course
									</Link>
									
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
			<GKStepper currentStep={currentStep} steps={steps} />
		</Fragment>
	);
};

export default AddNewCourse;
