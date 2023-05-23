
import React, { useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

function CreateContactForm() {
  const [errors, setErrors] = useState({});

  const [contactFormData, setContactFromData] = useState({
    fname: "",
    lname: "",
    email: "",
    content: "",
    
  });

  const { fname, lname, email, content,  } = contactFormData;

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
      history.push("/about");
    } catch (err) {
      console.log(err);
      setErrors(err.response?.data);
    }
  };

  return (
    <Container>
      <h2>Please get in touch!</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
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
          <Form.Control
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
            aria-label="email"
            placeholder="please write your email"
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="textarea"
            name="content"
            value={content}
            onChange={handleChange}
            aria-label="content"
            placeholder="Please write your message here.."
          ></Form.Control>
        </Form.Group>
        

        <Button type="submit" >
            Submit
          </Button>
      </Form>
    
    </Container>
  );
}

export default CreateContactForm;
