import React from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Container, Media } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Avatar from "../../components/Avatar";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { MoreDropdown } from "../../components/MoreDropdown";
import { axiosRes } from "../../api/axiosDefaults";
import styles from "../../styles/Meetup.module.css";
import { useRedirect } from "../../hooks/useRedirect";

const Meetup = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    title,
    content,
    updated_at,
    date,
    time,
    city,
    venue,
    bike_type,
    spaces,
    duration,
    meetupPage,
  } = props;
  useRedirect("loggedOut");
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/meetups/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/meetups/${id}/`);
      history.push(`/meetups`);
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <Card>
      <Card.Body className={styles.Title}>
        <Media className="justify-content-between py-2">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={30} />
            {owner}
          </Link>
          <div>
            <span>{updated_at}</span>
            {is_owner && meetupPage && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}{" "}
          </div>
        </Media>
        <Link to={`/meetups/${id}`}>
          <h2>
            Title: {title}
            <i className="fas fa-arrow-up-right-from-square"></i>
          </h2>
        </Link>
      </Card.Body>
      <Container className={styles.Container}>
        <Card>
          <Card.Body className={styles.Content}>
            <p>Date: {date}</p>
            <p>Description: {content}</p>
            <p>What city: {city}</p>
            <p>Location: {venue}</p>
            <p>Time: {time}</p>
            <p>Duration: {duration}</p>
            <p>What bikes: {bike_type}</p>
            <p>Capacity: {spaces}</p>
          </Card.Body>
        </Card>
      </Container>
    </Card>
  );
};

export default Meetup;
