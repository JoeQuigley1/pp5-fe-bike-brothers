import React from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import appStyles from "../../App.module.css";

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
    <div>Meetup</div>
  )
}

export default Meetup;
