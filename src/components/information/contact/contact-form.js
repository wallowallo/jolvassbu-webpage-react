/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from 'react';
import styled from '@emotion/styled';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const text = require('../../../text/english.json')[0].information.contact;

const FormContainer = styled.div `
    width: 70%;
    height: 50%;
    margin-top: 1rem;
    margin-left: 15%;
    margin-right: 15%;
`;

const FormHeader = styled.h3 `
    margin-top: 2rem;
    text-decoration: underline;
    margin-bottom: 0;
`;

const emailInput = css`
    width: 50%;
    margin-bottom: 1.5rem;
`;

const emailTextArea = css`
    margin-bottom: 1.5rem;
`;

const emailButton = css`
    background-color: white;
`;

var mailgun = require('mailgun.js');
var mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY || 'key-yourkeyhere'});

mg.messages.create('sandbox-123.mailgun.org', {
    from: "Excited User <mailgun@sandbox-123.mailgun.org>",
    to: ["test@example.com"],
    subject: "Hello",
    text: "Testing some Mailgun awesomness!",
    html: "<h1>Testing some Mailgun awesomness!</h1>"
})
  .then(msg => console.log(msg)) // logs response data
  .catch(err => console.log(err)); // logs any error

export default function EmallForm() {
    const [values, setValues] = React.useState({
        email: '',
        subject: '',
        message: '',
    });
  
    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };
  
    return (
        <FormContainer>
            <FormHeader>{text.email}</FormHeader>
            <TextField css={emailInput} value={values.email} type="email" autoComplete="email" placeholder="Your@email.here" label="Your email" onChange={handleChange('email')} required/>
            <TextField css={emailInput} value={values.subject} placeholder="Subject"  label="Subject" onChange={handleChange('subject')} required />
            <TextField css={emailTextArea} value={values.message} multiline placeholder="Message" label="Message" onChange={handleChange('message')} fullWidth variant="outlined" required />
            <Button css={emailButton} variant="contained">Send email</Button>
        </FormContainer>
    );
  };