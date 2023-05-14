import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import appStyles from "../../App.module.css";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import Meetup from "./Meetup";


function MeetupsPage({message, filter = ""}) {
    const [meetups, setMeetups] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const {pathname} = useLocation();

    useEffect(() => {
        const fetchMeetups = async () => {
            try {
                const {data} = await axiosReq.get(`/meetups/?${filter}`)
                setMeetups(data);
                setHasLoaded(true)
            } catch (err) {
                console.log(err)
            }
        };

        setHasLoaded(false);
        fetchMeetups();
    }, [filter, pathname])
  
  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>Popular profiles mobile</p>
        {hasLoaded ? (
          meetups.results.map((meetup) => (
            <Meetup key={meetup.id} {...meetup} setMeetups={setMeetups} />
          ))
        ) : (
          <div>Placeholder TEXT</div>
        )}
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <p>Popular profiles for desktop</p>
      </Col>
    </Row>
  );
}

export default MeetupsPage;