import React, { useState, useEffect } from "react";
import { Button, Card, Spinner, Tab, Modal, FormSelect, Form } from "react-bootstrap";
import InstructorProfileLayout from "./InstructorProfileLayout";
import ResolutionTable from "./EcoResolutionTable";
import axios from "axios";
import { showToast } from "../Components/Showtoast";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const EcoResolution = () => {
  const { ecosystemDomain } = useParams();
  const [resolution, setResolution] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  

  const allJobsHeader = [
    { accessorKey: "id", header: "Id" },
    { accessorKey: "date", header: "Date" },
    { accessorKey: "reason", header: "Reason" },
    { accessorKey: "message", header: "Message" },
    { accessorKey: "status", header: "Status" },
  ];

  useEffect(() => {
    const fetchAllResolutions = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/help-request-by-ecosystem/${ecosystemDomain}`
        );
        setResolution(response.data.helpRequestByEcosystem);
      } catch (error) {
        console.error("Error fetching all jobs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllResolutions();
  }, []);

  

  
  return (
    <InstructorProfileLayout>
      <Card className="border-0">
        <Tab.Container defaultActiveKey="all">
          <Card>
            <Card.Header>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h3 className="mb-0">Help Center</h3>
                  <p className="mb-0">Track your support ticket</p>
                </div>
              </div>
            </Card.Header>
            <Card.Body className="p-0">
              <Tab.Content>
                <Tab.Pane eventKey="all" className="pb-4">
                  {isLoading ? (
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{ minHeight: "200px" }}
                    >
                      <Spinner animation="border" variant="primary" />
                    </div>
                  ) : (
                    <ResolutionTable header={allJobsHeader} data={resolution} />
                  )}
                </Tab.Pane>
              </Tab.Content>
            </Card.Body>
          </Card>
        </Tab.Container>
      </Card>

      
    </InstructorProfileLayout>
  );
};

export default EcoResolution;
