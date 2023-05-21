import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaqAccordion } from '../../components/FaqAccordion'
import styles from "../../styles/About.module.css"



function About() {
  return (
    <Container className={styles.Content}>
        <Row>
            <Col>
            <h2>Welcome to Bike bros</h2>
            </Col>
        </Row>
        <Row>
            <Col>
            <h2>FAQ</h2>
            <FaqAccordion />
            </Col>
        </Row>
        
    </Container>
  )
}

export default About