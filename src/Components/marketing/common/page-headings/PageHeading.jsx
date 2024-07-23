// import node module libraries
import { Col, Row, Container, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const PageHeading = ({ pagetitle, pageButton }) => {
	let {ecosystemDomain} = useParams();
	return (
		<section className="bg-primary py-4 py-lg-6">
			<Container>
				<Row className="align-items-center">
					<Col xl={12} lg={12} md={12} sm={12} className='d-flex justify-content-between'>
						<div>
							<h1 className="mb-0 text-white display-4">{pagetitle}</h1>
						</div>
						<div>
							<Link to={`/${ecosystemDomain}/Userdashboard`}>
							<Button variant="white" className="mb-0 text-black display-4">{pageButton}</Button>
							</Link>
							
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default PageHeading;
