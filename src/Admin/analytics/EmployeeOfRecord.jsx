// Import necessary libraries or components
import React from 'react';
import { Card, Table, Container } from 'react-bootstrap';

// Define the EmployeeOfRecord component
const EmployeeOfRecord = ({ records }) => {
    return (
        <Container>
            <Card className="mb-4 h-100">
                <Card.Header
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        minHeight: '3rem',
                        padding: '0.75rem 1.25rem',
                        backgroundColor: '#f8f9fa',
                        borderBottom: '1px solid rgba(0, 0, 0, 0.125)'
                    }}
                >
                    <h4 className="mb-0">Employee Records</h4>
                </Card.Header>
                <Card.Body style={{ padding: '0' }}>
                    <Table
                        striped
                        bordered
                        hover
                        className="mb-0"
                        style={{ backgroundColor: 'white' }}
                    >
                        <thead>
                            <tr>
                                <th>Month</th>
                                <th>Total Record</th>
                            </tr>
                        </thead>
                        <tbody>
                            {records && records.length > 0 ? (
                                records.map((record, index) => (
                                    <tr key={index}>
                                        <td>{record.month}</td>
                                        <td>{record.total}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="2" className="text-center">
                                        No records available
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Container>
    );
};

// Export the EmployeeOfRecord component
export default EmployeeOfRecord;
