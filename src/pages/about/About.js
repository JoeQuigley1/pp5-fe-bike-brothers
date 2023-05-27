import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaqAccordion } from '../../components/FaqAccordion'
import styles from "../../styles/About.module.css"



function About() {
  return (
    <Container className={styles.Content}>
        <Row>
            <Col>
            <h2 className='py-2'>Welcome to <strong>Bike Bros</strong></h2>
            <br/>
            <p>This site is for Bike Enthusiasts who want to share bike related content.</p>
            <br/>
            <p>Please feel free to post content, create a meetup, like and share anything bike related.</p>
            <br/>
            <p>Our meetups encourge bike Enthusiasts to gather together and show off their bikes in real life!</p>
            </Col>
        </Row>
        <Row>
            <Col>
            <h2>FAQ</h2>
            <FaqAccordion />
            </Col>
        </Row>
        <Row className={styles.Socials}>
          <Container >
            <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit Facebook (opens Facebook homepage in a new tab)"
        >
          <i className="fa-brands fa-facebook-f" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit Instagram (opens Instagram homepage in a new tab)"
        >
          <i className="fa-brands fa-instagram" />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit Github (opens Github homepage in a new tab)"
        >
          <i className="fa-brands fa-github" />
        </a>
          </Container>
          
          
        </Row>
    </Container>
  )
}

export default About