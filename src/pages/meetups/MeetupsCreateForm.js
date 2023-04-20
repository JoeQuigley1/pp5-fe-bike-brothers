import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

import styles from "../../styles/CreateMeetupsForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

function MeetupsCreateForm() {
  const [errors, setErrors] = useState({});

  const [meetupsData, setMeetupsData] = useState({
    title: "",
    content: "",
    date: "",
    time: "",
    city: "",
    venue: "",
    bike_type: "",
    spaces: "",
    duration: "",
  });
  const {
    title,
    content,
    date,
    time,
    city,
    venue,
    bike_type,
    spaces,
    duration,
  } = meetupsData;

  const history = useHistory();

  const handleChange = (event) => {
    setMeetupsData({
      ...meetupsData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("content", content);
    formData.append("date", date);
    formData.append("time", time);
    formData.append("city", city);
    formData.append("venue", venue);
    formData.append("bike_type", bike_type);
    formData.append("spaces", spaces);
    formData.append("duration", duration);

    try {
      const { data } = await axiosReq.post("/meetups/", formData);
      history.push(`/meetups/${data.id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <Container className={styles.MeetupForm}>
      <br />
      <h2>Create a Meetup</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Meetup Name:</Form.Label>
          <Form.Control
            type="textarea"
            name="title"
            value={title}
            onChange={handleChange}
            aria-label="title"
          />
        </Form.Group>
        {errors?.title?.map((message, idx) => (
          <Alert variant="danger" key={idx}>
            {message}
          </Alert>
        ))}

        <Row>
          <Container
            className={`${appStyles.Content} ${styles.Container} className="py-2 p-0 p-md-2" md={7} lg={8}  flex-column justify-content-center`}
          >
            <Form.Group>
              <Form.Label className="flex-column justify-content-center">
                Content:
              </Form.Label>
              <Form.Control
                type="textarea"
                name="content"
                value={content}
                onChange={handleChange}
                aria-label="content"
              />
            </Form.Group>
            {errors?.title?.map((message, idx) => (
              <Alert variant="danger" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group>
              <Form.Label className="flex-column justify-content-center">
                Date:
              </Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={date}
                onChange={handleChange}
                aria-label="date"
              />
            </Form.Group>
            {errors?.title?.map((message, idx) => (
              <Alert variant="danger" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group>
              <Form.Label className="flex-column justify-content-center">
                Time:
              </Form.Label>
              <Form.Control
                type="time"
                name="time"
                value={time}
                onChange={handleChange}
                aria-label="time"
              />
            </Form.Group>
            {errors?.title?.map((message, idx) => (
              <Alert variant="danger" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group>
              <Form.Label className="flex-column justify-content-center">
                City:
              </Form.Label>
              <Form.Control
                type="textarea"
                name="city"
                value={city}
                onChange={handleChange}
                aria-label="city"
              />
            </Form.Group>
            {errors?.title?.map((message, idx) => (
              <Alert variant="danger" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group>
              <Form.Label className="flex-column justify-content-center">
                Venue:
              </Form.Label>
              <Form.Control
                type="textarea"
                name="venue"
                value={venue}
                onChange={handleChange}
                aria-label="venue"
              />
            </Form.Group>
            {errors?.title?.map((message, idx) => (
              <Alert variant="danger" key={idx}>
                {message}
              </Alert>
            ))}
            <Form.Group>
              <Form.Label className="flex-column justify-content-center">
                Bike Type: (give options)
              </Form.Label>
              <Form.Control
                type="textarea"
                name="bike_type"
                value={bike_type}
                onChange={handleChange}
                aria-label="bike_type"
              />
            </Form.Group>
            {errors?.title?.map((message, idx) => (
              <Alert variant="danger" key={idx}>
                {message}
              </Alert>
            ))}
            <Form.Group>
              <Form.Label className="flex-column justify-content-center">
                Duration:
              </Form.Label>
              <Form.Control
                type="textarea"
                name="duration"
                value={duration}
                onChange={handleChange}
                aria-label="duration"
              />
            </Form.Group>
            {errors?.title?.map((message, idx) => (
              <Alert variant="danger" key={idx}>
                {message}
              </Alert>
            ))}
            <Form.Group>
              <Form.Label className="flex-column justify-content-center">
                Spaces:
              </Form.Label>
              <Form.Control
                type="number"
                name="spaces"
                value={spaces}
                onChange={handleChange}
                aria-label="spaces"
              />
            </Form.Group>
            {errors?.title?.map((message, idx) => (
              <Alert variant="danger" key={idx}>
                {message}
              </Alert>
            ))}
          </Container>
        </Row>
        <br />
        <Row className={styles.MeetupForm}>
        <Button type="submit" className={btnStyles.Button}>
          Submit
        </Button>

        <Button onClick={() => history.goBack()} className={btnStyles.Button}>
          Cancel
        </Button>
      </Row>
      </Form>
      <br />
     
    </Container>
  );
}

export default MeetupsCreateForm;
