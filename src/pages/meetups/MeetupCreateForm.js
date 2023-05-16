import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

import styles from "../../styles/CreateMeetupsForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

function MeetupCreateForm() {
  const [errors, setErrors] = useState({});

  const [meetupData, setMeetupData] = useState({
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
  } = meetupData;

  const history = useHistory();

  const handleChange = (event) => {
    setMeetupData({
      ...meetupData,
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
      // console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <Container className={styles.AlignContent}>
      <br />
      <h2>Create a Meetup</h2>
      <Form onSubmit={handleSubmit}>
        <Container
          className={`${appStyles.Content} ${styles.Container} className="py-2 p-0 p-md-2" md={7} lg={8}  flex-column justify-content-center`}
        >
          <Form.Group>
            <Form.Label>Meetup Name:</Form.Label>
            {errors?.title?.map((message, idx) => (
              <Alert variant="danger" key={idx}>
                {message}
              </Alert>
            ))}
            <Form.Control
              type="textarea"
              name="title"
              value={title}
              onChange={handleChange}
              aria-label="title"
              placeholder="Name your meetup.."
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="flex-column justify-content-center">
              Content:
            </Form.Label>
            {errors?.title?.map((message, idx) => (
              <Alert variant="danger" key={idx}>
                {message}
              </Alert>
            ))}
            <Form.Control
              type="textarea"
              name="content"
              value={content}
              onChange={handleChange}
              aria-label="content"
              placeholder="What kind of meetup is it.."
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="flex-column justify-content-center">
              Date:
            </Form.Label>
            {errors?.title?.map((message, idx) => (
              <Alert variant="danger" key={idx}>
                {message}
              </Alert>
            ))}
            <Form.Control
              type="date"
              name="date"
              value={date}
              onChange={handleChange}
              aria-label="date"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="flex-column justify-content-center">
              Time:
            </Form.Label>
            {errors?.title?.map((message, idx) => (
              <Alert variant="danger" key={idx}>
                {message}
              </Alert>
            ))}
            <Form.Control
              type="time"
              name="time"
              value={time}
              onChange={handleChange}
              aria-label="time"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="flex-column justify-content-center">
              City:
            </Form.Label>{" "}
            {errors?.title?.map((message, idx) => (
              <Alert variant="danger" key={idx}>
                {message}
              </Alert>
            ))}
            <Form.Control
              type="textarea"
              name="city"
              value={city}
              onChange={handleChange}
              aria-label="city"
              placeholder="What city.."
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="flex-column justify-content-center">
              Venue:
            </Form.Label>
            {errors?.title?.map((message, idx) => (
              <Alert variant="danger" key={idx}>
                {message}
              </Alert>
            ))}
            <Form.Control
              type="textarea"
              name="venue"
              value={venue}
              onChange={handleChange}
              aria-label="venue"
              placeholder="What is your venue.."
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="flex-column justify-content-center">
              Bike Type:
            </Form.Label>
            {errors?.title?.map((message, idx) => (
              <Alert variant="danger" key={idx}>
                {message}
              </Alert>
            ))}
            <Form.Control
              type="textarea"
              name="bike_type"
              value={bike_type}
              onChange={handleChange}
              aria-label="bike_type"
              placeholder="What kind of bikes are there.."
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="flex-column justify-content-center">
              Duration:
            </Form.Label>
            {errors?.title?.map((message, idx) => (
              <Alert variant="danger" key={idx}>
                {message}
              </Alert>
            ))}
            <Form.Control
              type="textarea"
              name="duration"
              value={duration}
              onChange={handleChange}
              aria-label="duration"
              placeholder="Duration.."
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="flex-column justify-content-center">
              Spaces:
            </Form.Label>
            {errors?.title?.map((message, idx) => (
              <Alert variant="danger" key={idx}>
                {message}
              </Alert>
            ))}
            <Form.Control
              type="number"
              name="spaces"
              value={spaces}
              onChange={handleChange}
              aria-label="spaces"
              placeholder="Please enter a number"
            />
          </Form.Group>
        </Container>

        <br />
        <Row className={styles.SpaceContent}>
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

export default MeetupCreateForm;
