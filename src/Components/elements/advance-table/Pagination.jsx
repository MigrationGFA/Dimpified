import React from 'react';
import { Row, Col, Button, ListGroup } from 'react-bootstrap';

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Row>
      <Col lg={12} md={12} sm={12}>
        <div className="pb-5">
          <nav>
            <ListGroup as="ul" bsPrefix="pagination" className="justify-content-center mb-0">
              <ListGroup.Item as="li" bsPrefix="page-item" className={currentPage === 1 ? 'disabled' : ''}>
                <Button
                  disabled={currentPage === 1}
                  onClick={() => paginate(currentPage - 1)}
                  className="page-link mx-1 rounded"
                >
                  <i className="fe fe-chevron-left"></i>
                </Button>
              </ListGroup.Item>
              {pageNumbers.map((number) => (
                <ListGroup.Item as="li" bsPrefix="page-item" key={number} className={currentPage === number ? 'active' : ''}>
                  <Button onClick={() => paginate(number)} className="page-link mx-1 rounded">
                    {number}
                  </Button>
                </ListGroup.Item>
              ))}
              <ListGroup.Item as="li" bsPrefix="page-item" className={currentPage === pageNumbers.length ? 'disabled' : ''}>
                <Button
                  disabled={currentPage === pageNumbers.length}
                  onClick={() => paginate(currentPage + 1)}
                  className="page-link mx-1 rounded"
                >
                  <i className="fe fe-chevron-right"></i>
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </nav>
        </div>
      </Col>
    </Row>
  );
};

export default Pagination;
