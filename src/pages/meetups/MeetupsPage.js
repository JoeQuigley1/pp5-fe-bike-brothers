import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import appStyles from "../../App.module.css";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import Meetup from "./Meetup";
import { Container, Row } from "react-bootstrap";
import Asset from "../../components/Asset";
import NoResults from "../../assets/no-results.png";
import { useRedirect } from "../../hooks/useRedirect";

import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";

function MeetupsPage({ message, filter = "" }) {
  useRedirect("loggedOut");
  const [meetups, setMeetups] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchMeetups = async () => {
      try {
        const { data } = await axiosReq.get(`/meetups/?${filter}`);
        setMeetups(data);
        setHasLoaded(true);
      } catch (err) {
        // console.log(err);
      }
    };

    setHasLoaded(false);
    fetchMeetups();
  }, [filter, pathname]);

  return (
    <Container className="h-100">
      <Row>
        <Col className="py-2 p-0 p-lg-2">
          <PopularProfiles mobile />
          {hasLoaded ? (
            <>
              {meetups.results.length ? (
                <InfiniteScroll
                  children={meetups.results.map((meetup) => (
                    <Meetup
                      key={meetup.id}
                      {...meetup}
                      setMeetups={setMeetups}
                    />
                  ))}
                  dataLength={meetups.results.length}
                  loader={<Asset spinner />}
                  hasMore={!!meetups.next}
                  next={() => fetchMoreData(meetups, setMeetups)}
                />
              ) : (
                <Container className={appStyles.Content}>
                  <Asset src={NoResults} message={message} />
                </Container>
              )}
            </>
          ) : (
            <Container className={appStyles.Content}>
              <Asset spinner />
            </Container>
          )}
        </Col>
        <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
          <PopularProfiles />
        </Col>
      </Row>
    </Container>
  );
}

export default MeetupsPage;
