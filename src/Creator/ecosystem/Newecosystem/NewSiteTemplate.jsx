import React from "react";
import NewTemplate from "../../../EditTemplate/NewTemplate";
import EcoHeader from "./ecoHeader";
import {
  Container,
  Row,
  Col,
  Nav,
  Button,
  ProgressBar,
  Card,
  Form,
  Modal,
} from "react-bootstrap";

const NewSiteTemplate = () => {
  return (
    <Container fluid className="p-0">
      <EcoHeader />
      <Container className="mt-10">
        <div className="d-flex flex-column align-items-center">
          <h2>Customize your template as you like Template</h2>
        </div>
        <NewTemplate />
      </Container>
    </Container>
  );
};

export default NewSiteTemplate;
