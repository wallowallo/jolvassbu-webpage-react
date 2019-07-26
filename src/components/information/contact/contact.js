import React from 'react';
import styled from '@emotion/styled';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import contact from '../../../images/contact1.jpg';
import EmailForm from './contact-form';
import './contact.css';

const text = require('../../../text/english.json')[0].information.contact;

const ContactImg = styled.img `
  width: 100%;
`;

const InfoContainer = styled.div `
  position: absolute;
  top: 40%;
  width: 100%;
  height: 100rem;
  background-color: white;
  border-top: 2px solid lightblue;
  background-image: linear-gradient(lightblue 0%, white 5%);
`;

const CardContentH2 = styled.h2 `
  text-align: center;
  margin-bottom: 0.5rem;
  margin-top: 0;
`;

const FacebookEmbed = styled.div `
    width: 70%;
    margin-left: 20%;
`;


const FacebookHeader = styled.h3 `
    margin-top: 2rem;
    text-decoration: underline;
    margin-bottom: 1.5rem;
    margin-left: 15%;
`;

const PhoneHeader = styled.h3 `
    margin-top: 2rem;
    text-decoration: underline;
    margin-bottom: 0.5rem;
    margin-left: 15%;
`;

const PhoneParagraph = styled.p `
    width: 90%;
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0 5%;
    color: darkorange;
`;

export default class Contact extends React.Component {
  render() {
      return (
        <React.Fragment>
            <InfoContainer>
              <Card className="contactCardContainer">
                <CardMedia>
                  <ContactImg src={contact} />
                </CardMedia>
                <CardContent>
                    <CardContentH2>{text.header}</CardContentH2>

                    <FacebookHeader>By facebook:</FacebookHeader>
                    <FacebookEmbed>
                        <div class="fb-page" data-href="https://www.facebook.com/jolvassbu/" data-tabs="messages" data-width="500" data-height="300" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/jolvassbu/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/jolvassbu/">jølvassbu camping</a></blockquote></div>
                    </FacebookEmbed>
                  
                    <EmailForm />

                    <PhoneHeader>By phone:</PhoneHeader>
                    <PhoneParagraph>+ 47 92 06 22 03 | +47 92 22 36 98</PhoneParagraph>
                </CardContent>
              </Card>
            </InfoContainer>
        </React.Fragment>
      );
  }
}