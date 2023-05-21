import React from "react";
import { Accordion, Card } from "react-bootstrap";


export const FaqAccordion = () => {
  return (
    <Accordion >
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0" >
          Can anyone add a Post or Meetup?
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Only logged in users may add posts or meetups. </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="1">
          What is a Meetup?
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            A Meetup is when like-minded bike enthusiasts come together to show
            off their bikes.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="2">
          Is Bike bros free to use?
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            Yes! It is an app created for my PP5 and therefore is completley
            free.{" "}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="3">
          Who can see my profile?
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="3">
          <Card.Body>
            Anyone! Once created your profile can be viewed by anyone, even
            users who are not signed in.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};
