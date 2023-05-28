import React, { useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Alert from "react-bootstrap/Alert";

function CreateContactForm() {
  const [errors, setErrors] = useState({});

  const [contactFormData, setContactFromData] = useState({
    fname: "",
    lname: "",
    email: "",
    content: "",
  });

  const { fname, lname, email, content } = contactFormData;

  const history = useHistory();

  const handleChange = (event) => {
    setContactFromData({
      ...contactFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosReq.post("/contact/", contactFormData);
      history.push("/confirmation");
    } catch (err) {
      console.log(err);
      setErrors(err.response?.data);
    }
  };

  return (
    <Container>
      <br />
      <h2>Please get in touch!</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          {errors?.fname?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          <Form.Control
            type="text"
            name="fname"
            value={fname}
            onChange={handleChange}
            aria-label="first name"
            placeholder="First Name"
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          {errors?.lname?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          <Form.Control
            type="text"
            name="lname"
            value={lname}
            onChange={handleChange}
            aria-label="last name"
            placeholder="Last Name"
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          {errors?.email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            aria-label="email"
            placeholder="Please write your email"
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          {errors?.content?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          <Form.Control
            as="textarea"
            name="content"
            value={content}
            rows={4}
            onChange={handleChange}
            aria-label="content"
            placeholder="Please write your message here.."
          ></Form.Control>
        </Form.Group>

        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
}

export default CreateContactForm;
