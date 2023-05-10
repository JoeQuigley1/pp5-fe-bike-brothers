import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import { Container } from "react-bootstrap";

function MeetupsPage({ message, filter = "" }) {
  const [meetups, setMeetups] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchMeetups = async () => {
        try {
            const {data} = await axiosReq.get(`/meetups/?${filter}search=${query}`)
            setPosts(data);
            setHasLoaded(true);
        } catch (err){
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
  }, [filter, query, pathname])

  return (
  <Container>
    <div>MeetupsPage</div>
  </Container>
  
  );
}

export default MeetupsPage;
