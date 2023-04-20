import React from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import appStyles from "../../App.module.css";
import { Container } from "react-bootstrap";

function Meetup(props) {
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
  } = props;

  const currentUser = useCurrentUser();
  const history = useHistory();

  return (
    <Container>
      <div>Meetup</div>
      <p>Title: {title}</p>
      <div>
        <p>{content} </p>
        <p>{venue}</p>
        <p>{date}</p>
        <p>{time}</p>
      </div>
    </Container>
  );
}

export default Meetup;
