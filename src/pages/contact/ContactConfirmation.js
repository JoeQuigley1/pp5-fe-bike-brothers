import React from 'react'
import { Container } from 'react-bootstrap'
import styles from "../../styles/Confirmation.module.css"

const ContactConfirmation = () => {
  return (
    <Container className={styles.Content}>
    <h2>Thank you for getting in touch!</h2>

  <p>One of our Admins will get back to you on your query</p>
    </Container>
    
  )
}

export default ContactConfirmation