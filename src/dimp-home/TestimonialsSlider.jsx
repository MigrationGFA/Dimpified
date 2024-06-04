// import node module libraries
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

// import sub components
import TestimonialCard from './TestimonialCard';

// import data files
import { TestimonialsList } from './TestimonialsList';

const TestimonialsSlider = () => {
	const settings = {
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		autoplay: true, // Enable auto-scrolling
		autoplaySpeed: 3000, // Auto-scroll interval in milliseconds
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					autoplay: true,
					autoplaySpeed: 3000
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
					autoplay: true,
					autoplaySpeed: 3000
				}
			},
			{
				breakpoint: 540,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					autoplay: true,
					autoplaySpeed: 3000
				}
			}
		]
	};

	return (
		<Fragment>
			<Slider {...settings} className="pb-5 mb-5 testimonials">
				{TestimonialsList.map((item, index) => (
					<div className="item p-2" key={item.id}>
						<TestimonialCard key={index} item={item} />
					</div>
				))}
			</Slider>
		</Fragment>
	);
};

// Specifies the default values for props
TestimonialsSlider.defaultProps = {
	recommended: false,
	popular: false,
	trending: false
};

// Typechecking With PropTypes
TestimonialsSlider.propTypes = {
	recommended: PropTypes.bool,
	popular: PropTypes.bool,
	trending: PropTypes.bool
};

export default TestimonialsSlider;
