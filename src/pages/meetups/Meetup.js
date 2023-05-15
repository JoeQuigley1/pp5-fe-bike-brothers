import React from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Avatar from "../../components/Avatar";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { MoreDropdown } from "../../components/MoreDropdown";
import { axiosRes } from "../../api/axiosDefaults";

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
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/meetups/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/meetups/${id}/`);
      history.goBack();
    } catch (err) {
      // console.log(err);
    }
  };

  
  return <Card>
    <Card.Body>
        <Media className="align-items-center justify-content-between">
            <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={30} />
             {owner}
            </Link>
            <div><span>{updated_at}</span>
            {is_owner && meetupPage && <MoreDropdown handleEdit={handleEdit} handleDelete={handleDelete} />  } </div>
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
