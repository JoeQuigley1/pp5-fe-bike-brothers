import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { axiosReq } from "../../api/axiosDefaults";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Meetup from "./Meetup";
import PopularProfiles from "../profiles/PopularProfiles";
import { useRedirect } from "../../hooks/useRedirect";

function MeetupPage() {
  useRedirect("loggedOut");
  const { id } = useParams();
  const [meetup, setMeetup] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: meetup }] = await Promise.all([
          axiosReq.get(`/meetups/${id}`),
        ]);
        setMeetup({ results: [meetup] });
      } catch (err) {
        // console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2">
        <PopularProfiles mobile />
        <Meetup {...meetup.results[0]} setMeetup={setMeetup} meetupPage />
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default MeetupPage;
