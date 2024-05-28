import { Fragment, useState } from 'react';
import { Col, Row, Card, Tab, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

// import custom components
import GridListViewButton from '../../Components/elements/miscellaneous/GridListViewButton';

// import sub components
import InstructorsGridView from './InstructorsGridCard';
import InstructorsListItems from './InstructorsListItems';

const Instructor = () => {
  const [dashboardData, setDashboardData] = useState({
    monthlySeeker: 1,
    totalSeeker: 1,
    monthlyProvider: 1,
    totalProvider: 1,
  });
  
  return (
    <Fragment>
      <div className="instructor-container">
        <Tab.Container defaultActiveKey="grid">
          <Row>
            <Col lg={12} md={12} sm={12}>
              <div className="border-bottom pb-4 mb-4 d-flex align-items-center justify-content-between">
                <div className="mb-3 mb-md-0">
                  <h1 className="mb-1 h2 fw-bold">
                    My User <span className="fs-5 text-muted">(12,105)</span>
                  </h1>
                  <Breadcrumb>
                    <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
                    {/* <Breadcrumb.Item href="#">User</Breadcrumb.Item> */}
                    <Breadcrumb.Item active>My User</Breadcrumb.Item>
                  </Breadcrumb>
                </div>
                
                <div>
                  <GridListViewButton keyGrid="grid" keyList="list" />
                </div>
              </div>
            </Col>
          </Row>

          <Tab.Content>
            <Tab.Pane eventKey="grid" className="pb-4">
              <div className="instructors-content">
                <InstructorsGridView />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="list" className="pb-4">
              <div className="instructors-content">
                <Card className="mb-5">
                  <Card.Body className="p-0">
                    <InstructorsListItems />
                  </Card.Body>
                </Card>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </Fragment>
  );
};

export default Instructor;
