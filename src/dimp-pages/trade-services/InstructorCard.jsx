// import node module libraries
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';



const GKInstructorCard = ({ item }) => {
	return (
		<Card className="mb-4 card-hover">
			{/* img */}
			<Card.Img
				variant="top"
				src={item.image}
				className="rounded-top-md img-fluid"
			/>
			{/* card body */}
			<Card.Body>
				<h3 className="mb-0 fw-semi-bold text-center">
					{' '}
					<Link to={item.link} className="text-inherit ">
						{item.name}
					</Link>
				</h3>
				
			</Card.Body>
		</Card>
	);
};

// Typechecking With PropTypes
GKInstructorCard.propTypes = {
	item: PropTypes.object.isRequired
};

export default GKInstructorCard;
