import React from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Avatar from "../../components/Avatar";

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
    meetupPage
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  
  return <Card>
    <Card.Body>
        <Media className="align-items-center justify-content-between">
            <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={30} />
             {owner}
            </Link>
            <div><span>{updated_at}</span>
            {is_owner && meetupPage && "..." } </div>
        </Media>
        <Link to={`/meetups/${id}`} >
            <h2 > Title: {title}</h2></Link>
    </Card.Body>
    
    <p>Date:{date}</p>
    <p> {content}</p>
    <p>What city: {city}</p>
    <p>Location: {venue}</p>
    <p>Time: {time}</p>
    <p>Duration: {duration}</p>
    <p>What bikes: {bike_type}</p>
    <p>Capacity: {spaces}</p>
  </Card>;
};

export default Meetup;
