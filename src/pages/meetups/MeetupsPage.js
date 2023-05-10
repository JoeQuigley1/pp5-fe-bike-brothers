import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import { Container, Form } from "react-bootstrap";

import appStyles from "../../App.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
import Asset from "../../components/Asset";
import NoResults from "../../assets/no-results.png";
import { fetchMoreData } from "../../utils/utils";

function MeetupsPage({ message, filter = "" }) {
  const [meetups, setMeetups] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchMeetups = async () => {
      try {
        const { data } = await axiosReq.get(
          `/meetups/?${filter}search=${query}`
        );
        setMeetups(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchMeetups();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname]);

  return (
    <Container>
      <Form
        // className={styles.SearchBar}
        onSubmit={(event) => event.preventDefault()}
      >
        <Form.Control
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          type="text"
          className="mr-sm-2"
          placeholder="Search meetups"
        />
      </Form>
      {hasLoaded ? (
          <>
            {meetups.results.length ? (
              <InfiniteScroll
                children={meetups.results.map((meetup) => (
                  <meetup key={meetup.id} {...meetup} setmeetups={setMeetups} />
                ))
              }
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
          </Container>)}
    </Container>
  );
}

export default MeetupsPage;
