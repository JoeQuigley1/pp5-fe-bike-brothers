import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import appStyles from "../../App.module.css";
import Meetup from "./Meetup";



function MeetupPage() {
  const { id } = useParams();
  const [meetup, setMeetup] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: meetup }] = await Promise.all([
          axiosReq.get(`/meetups/${id}`),
        ]);
        setMeetup({ results: [meetup] });
        console.log(meetup);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <Meetup {...meetup.results[0]} setMeetups={setMeetup} />
      </Col>
    </Row>
  );
}

export default MeetupPage;
