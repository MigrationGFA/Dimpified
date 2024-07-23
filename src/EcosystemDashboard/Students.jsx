import React, { useState, useEffect } from 'react';
import { Card, Tab } from 'react-bootstrap';
import GridListViewButton from '../Components/elements/miscellaneous/GridListViewButton';
import StudentsGridCard from './StudentsGridCard';
import StudentsListCard from './StudentsListCard';
import InstructorProfileLayout from './InstructorProfileLayout';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Students = () => {
    let {ecosystemDomain} =useParams()
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchStudents = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/ecosystem-students/${ecosystemDomain}`);
                setStudents(response.data.ecosystemUser);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching students:', error);
                setError('Failed to fetch students. Please try again later.');
                setLoading(false);
            }
        };

        fetchStudents();
    }, []);

    return (
        <InstructorProfileLayout>
            <Tab.Container defaultActiveKey="grid">
                <Card className="mb-4 pb-1">
                    <Card.Header className="border-0 d-flex justify-content-between ">
                        <div className="mb-3 mb-lg-0">
                            <h3 className="mb-0">Ecosytem Users</h3>
                            <p className="mb-0">Meet people in your ecosystem.</p>
                        </div>
                        <GridListViewButton keyGrid="grid" keyList="list" />
                    </Card.Header>
                </Card>
                <Tab.Content>
                    <Tab.Pane eventKey="grid" className="pb-4">
                        <Card className="bg-transparent shadow-none">
                            <Card.Body className="px-0 py-0">
                                <StudentsGridCard students={students} loading={loading} error={error} />
                            </Card.Body>
                        </Card>
                    </Tab.Pane>
                    <Tab.Pane eventKey="list" className="pb-4">
                        <Card className="">
                            <Card.Body className="px-0 py-0">
                                <StudentsListCard students={students} loading={loading} error={error} />
                            </Card.Body>
                        </Card>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </InstructorProfileLayout>
    );
};

export default Students;
