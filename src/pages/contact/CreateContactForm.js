import React, { useState } from 'react'

function CreateContactForm() {

    const [contactFormData, setContactFromData] = useState({
        fname: "",
        lname: "",
        email: "",
        content: "",
        create_at: "",
    });

    const {
        fname, lname, email, content, created_at,
    } = contactFormData
  return (
    <div>CreateContactForm</div>
  )
}

export default CreateContactForm