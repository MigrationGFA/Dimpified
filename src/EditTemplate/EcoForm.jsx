import React, { useState } from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { updateContent, updateStyles } from "../features/Template/Form1";
import { setActiveSection } from "../features/Template/activeTemplateSection";
import EditableBlock from "./EditableBlock";
import SideEditor from "./SideEditor";
import useImageEditor from "./userImageEditor";
import { useFormActions } from "../helper/EditTemplate";
import { EditableImage, EditableBackgroundImage } from "../helper/EditImages";
import EditHeroImage from "./EditHeroImage";

const EcoForm = () => {
  const [step, setStep] = useState(1);
  const { fileInputRef, handleEditImageClick, handleImageChange } =
    EditHeroImage("sidebar", "image");

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const {
    handleContentChange,
    handleBackgroundColorChange,
    handleFontChange,
    handleTextColorChange,
    handleLogoChange,
    handleButtonColorChange,
  } = useFormActions();

  const dispatch = useDispatch();
  const content = useSelector((state) => state.form1);
  const backgroundImage = useSelector((state) => state.form1.sidebar.image);

  const activeSection = useSelector(
    (state) => state.activeSection.activeSection
  );

  const renderSection = (id, children) => {
    return (
      <section
        id={id}
        className="py-5"
        style={{
          ...content[id].styles,
          border: activeSection === id ? "2px dotted black" : "none",
        }}
        onClick={() => dispatch(setActiveSection(id))}
      >
        {children}
      </section>
    );
  };

  return (
    <div
      style={{
        maxWidth: "100%",
        wordWrap: "break-word",
      }}
    >
      <Container
        fluid
        style={{
          position: "relative",
        }}
      >
        <Row>
          <Col md={9} className="d-flex ">
            <Col md={7} lg={7} className="d-none d-md-flex p-0">
              <Card className="w-100">
                <p className="text-center">
                  to get better result, use image with white background
                </p>
                <Card.Body
                  className="d-flex justify-content-center align-items-center p-0"
                  style={{ height: "500px" }}
                >
                  <img
                    src={backgroundImage}
                    alt="Illustration"
                    style={{
                      maxWidth: "100%",
                      // maxHeight: "70%",
                      objectFit: "contain",
                      // position: "relative",
                    }}
                  />
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={handleEditImageClick}
                    style={{
                      width: "300px",
                      position: "absolute",
                      top: "40px",
                      right: "70px",
                      zIndex: 1000,
                      backgroundColor: "rgba(0,0,0,0.5)",
                      color: "#fff",
                      border: "none",
                    }}
                  >
                    Edit Image
                  </Button>

                  <input
                    type="file"
                    ref={fileInputRef}
                    // onChange={(value) => handleImageChange("Vision", "image", value)}
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                  />
                  {/* <EditHeroImage /> */}
                </Card.Body>
              </Card>
            </Col>
            <Col
              sm={6}
              lg={6}
              className="d-md-flex justify-content-center align-items-center p-sm-5 px-4"
            >
              {step === 1 &&
                renderSection(
                  "Page1",
                  <FormStep1
                    text={content.Page1}
                    nextStep={nextStep}
                    handleContentChange={handleContentChange}
                    style={content.Page1.styles}
                    onLogoChange={handleLogoChange}
                    logo={content.logo.image}
                  />
                )}
              {step === 2 &&
                renderSection(
                  "Page2",
                  <FormStep2
                    text={content.Page2}
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleContentChange={handleContentChange}
                    style={content.Page2.styles}
                    onLogoChange={handleLogoChange}
                    logo={content.logo.image}
                  />
                )}
              {step === 3 &&
                renderSection(
                  "Page3",
                  <FormStep3
                    prevStep={prevStep}
                    text={content.Page3}
                    handleContentChange={handleContentChange}
                    style={content.Page3.styles}
                    onLogoChange={handleLogoChange}
                    logo={content.logo.image}
                  />
                )}
            </Col>
          </Col>
          <Col md={2}>
            {activeSection && (
              <SideEditor
                sectionId={activeSection}
                onBackgroundColorChange={handleBackgroundColorChange}
                onTextColorChange={handleTextColorChange}
                onFontChange={handleFontChange}
                onButtonColorChange={handleButtonColorChange}
              />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const FormStep1 = ({
  nextStep,
  handleContentChange,
  text,
  style,
  onLogoChange,
  logo,
}) => (
  <div
    className="px-4 w-100"
    style={{
      backgroundColor: style.backgroundColor,
      color: style.color,
      fontFamily: style.fontFamily,
    }}
  >
    {/* <img src={logo} height={80} /> */}

    <EditableImage
      initialImage={logo}
      onImageChange={(value) => onLogoChange("logo", "image", value)}
    />
    <h3 className="mb-1 mt-5">
      <EditableBlock
        initialContent={text.heading}
        onContentChange={(value) =>
          handleContentChange("Page1", "heading", value)
        }
      />
    </h3>
    <p className="mb-4">
      <EditableBlock
        initialContent={text.sub}
        onContentChange={(value) => handleContentChange("Page1", "sub", value)}
      />
    </p>

    <Form
      style={{
        backgroundColor: style.backgroundColor,
        color: style.color,
        fontFamily: style.fontFamily,
      }}
    >
      <Form.Group
        className="mb-3"
        controlId="formName"
        style={{
          color: style.color,
          fontFamily: style.fontFamily,
        }}
      >
        <Row className="">
          <Col md={6} lg={6}>
            {/* <p> */}
            <EditableBlock
              initialContent={text.topic1}
              onContentChange={(value) =>
                handleContentChange("Page1", "topic1", value)
              }
            />
            {/* </p> */}
            <Form.Control
              disabled
              type="text"
              placeholder="Enter your first name"
            />
          </Col>
          <Col md={6} lg={6}>
            <Form.Label
              style={{
                color: style.color,
                fontFamily: style.fontFamily,
              }}
            >
              <EditableBlock
                initialContent={text.topic2}
                onContentChange={(value) =>
                  handleContentChange("Page1", "topic2", value)
                }
              />
            </Form.Label>
            <Form.Control
              disabled
              type="text"
              placeholder="Enter your last name"
            />
          </Col>
        </Row>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label
          style={{
            color: style.color,
            fontFamily: style.fontFamily,
          }}
        >
          <EditableBlock
            initialContent={text.topic3}
            onContentChange={(value) =>
              handleContentChange("Page1", "topic3", value)
            }
          />
        </Form.Label>
        <Form.Control
          type="email"
          disabled
          placeholder="Enter your email address"
          className="px-5"
        />
      </Form.Group>
      <Form.Group className="mb-4" controlId="formPhone">
        <Form.Label
          style={{
            color: style.color,
            fontFamily: style.fontFamily,
          }}
        >
          {" "}
          <EditableBlock
            initialContent={text.topic4}
            onContentChange={(value) =>
              handleContentChange("Page1", "topic4", value)
            }
          />
        </Form.Label>

        <Form.Control
          disabled
          type="text"
          placeholder="Enter your phone number"
        />
      </Form.Group>
      <Button variant="primary" className="d-grid w-100" onClick={nextStep}>
        <EditableBlock
          initialContent={text.buttonText1}
          onContentChange={(value) =>
            handleContentChange("Page1", "buttonText1", value)
          }
        />
      </Button>
    </Form>
    <p className="text-center mt-4">
      <span>
        <EditableBlock
          initialContent={text.footer}
          onContentChange={(value) =>
            handleContentChange("Page1", "footer", value)
          }
        />
      </span>
      <a href="#">
        <span>Sign in instead</span>
      </a>
    </p>
  </div>
);

const FormStep2 = ({
  nextStep,
  prevStep,
  handleContentChange,
  text,
  style,
  onLogoChange,
  logo,
}) => (
  <div
    className="px-4 w-100"
    style={{
      backgroundColor: style.backgroundColor,
      color: style.color,
      fontFamily: style.fontFamily,
    }}
  >
    <EditableImage
      initialImage={logo}
      onImageChange={(value) => onLogoChange("logo", "image", value)}
    />
    <h3 className="mb-1 mt-5">
      <EditableBlock
        initialContent={text.heading}
        onContentChange={(value) =>
          handleContentChange("Page2", "heading", value)
        }
      />
    </h3>
    <p className="mb-4">
      <EditableBlock
        initialContent={text.sub}
        onContentChange={(value) => handleContentChange("Page2", "sub", value)}
      />
    </p>

    <Form
      style={{
        backgroundColor: style.backgroundColor,
        color: style.color,
        fontFamily: style.fontFamily,
      }}
    >
      <Form.Group className="mb-3" controlId="formZip">
        <Form.Label
          style={{
            color: style.color,
            fontFamily: style.fontFamily,
          }}
        >
          <EditableBlock
            initialContent={text.topic1}
            onContentChange={(value) =>
              handleContentChange("Page2", "topic1", value)
            }
          />
        </Form.Label>
        <Form.Control disabled type="text" placeholder="Enter your address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formCity">
        <Row className="">
          <Col md={6} lg={6}>
            <Form.Label
              style={{
                color: style.color,
                fontFamily: style.fontFamily,
              }}
            >
              <EditableBlock
                initialContent={text.topic2}
                onContentChange={(value) =>
                  handleContentChange("Page2", "topic2", value)
                }
              />
            </Form.Label>
            <Form.Control
              disabled
              type="text"
              placeholder="Enter your zip code"
            />
          </Col>
          <Col md={6} lg={6}>
            <Form.Label
              style={{
                color: style.color,
                fontFamily: style.fontFamily,
              }}
            >
              <EditableBlock
                initialContent={text.topic3}
                onContentChange={(value) =>
                  handleContentChange("Page2", "topic3", value)
                }
              />
            </Form.Label>
            <Form.Control disabled type="text" placeholder="Enter your city" />
          </Col>
        </Row>
      </Form.Group>

      <Form.Group className="mb-4" controlId="formCountry">
        <Form.Label
          style={{
            color: style.color,
            fontFamily: style.fontFamily,
          }}
        >
          <EditableBlock
            initialContent={text.topic4}
            onContentChange={(value) =>
              handleContentChange("Page2", "topic4", value)
            }
          />
        </Form.Label>
        <Form.Control disabled as="select">
          <option value="">Select your country</option>
          <option value="AF">Afghanistan</option>
          <option value="AL">Albania</option>
        </Form.Control>
      </Form.Group>
      <Button className="mx-2 w-40" variant="secondary" onClick={prevStep}>
        Back
      </Button>
      <Button variant="primary" className="w-50" onClick={nextStep}>
        Next
      </Button>
    </Form>
  </div>
);

const FormStep3 = ({
  prevStep,
  handleContentChange,
  text,
  style,
  onLogoChange,
  logo,
}) => (
  <div
    className="px-4 w-100"
    style={{
      backgroundColor: style.backgroundColor,
      color: style.color,
      fontFamily: style.fontFamily,
    }}
  >
    <EditableImage
      initialImage={logo}
      onImageChange={(value) => onLogoChange("logo", "image", value)}
    />
    <h3 className="mb-1 mt-5">
      <EditableBlock
        initialContent={text.heading}
        onContentChange={(value) =>
          handleContentChange("Page3", "heading", value)
        }
      />
    </h3>
    <p className="mb-4">
      <EditableBlock
        initialContent={text.sub}
        onContentChange={(value) => handleContentChange("Page3", "sub", value)}
      />
    </p>

    <Form
      style={{
        color: style.color,
        fontFamily: style.fontFamily,
      }}
    >
      <Form.Group className="mb-3" controlId="formUsername">
        <Form.Label
          style={{
            color: style.color,
            fontFamily: style.fontFamily,
          }}
        >
          <EditableBlock
            initialContent={text.topic1}
            onContentChange={(value) =>
              handleContentChange("Page3", "topic1", value)
            }
          />
        </Form.Label>
        <Form.Control disabled type="text" placeholder="Choose a username" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label
          style={{
            color: style.color,
            fontFamily: style.fontFamily,
          }}
        >
          <EditableBlock
            initialContent={text.topic2}
            onContentChange={(value) =>
              handleContentChange("Page3", "topic2", value)
            }
          />
        </Form.Label>
        <Form.Control
          disabled
          type="password"
          placeholder="Enter your password"
        />
      </Form.Group>
      <Form.Group className="mb-4" controlId="formConfirmPassword">
        <Form.Label
          style={{
            color: style.color,
            fontFamily: style.fontFamily,
          }}
        >
          <EditableBlock
            initialContent={text.topic3}
            onContentChange={(value) =>
              handleContentChange("Page3", "topic2", value)
            }
          />
        </Form.Label>
        <Form.Control
          disabled
          type="password"
          placeholder="Confirm your password"
        />
      </Form.Group>
      <Button className="me-3 w-40" variant="secondary" onClick={prevStep}>
        Back
      </Button>
      <Button variant="primary" className="w-40">
        Submit
      </Button>
    </Form>
  </div>
);

export default EcoForm;
