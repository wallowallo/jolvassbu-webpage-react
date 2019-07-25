import React from 'react';
import styled from '@emotion/styled';
import ImageSlider from '../../image-slider/image-slider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import './contact.css';

var mailgun = require('mailgun.js');
var mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY || 'key-yourkeyhere'});

const text = require('../../../text/english.json')[0].accomodation.caravan;

const SliderContainer = styled.div `
  width: 100%;
`;

const InfoContainer = styled.div `
  position: absolute;
  top: 40%;
  width: 100%;
  height: 75rem;
  background-color: white;
  border-top: 2px solid lightblue;
  background-image: linear-gradient(lightblue 0%, white 5%);
`;

const CardContentH2 = styled.h2 `
  text-align: center;
  margin-bottom: 0.5rem;
`;

const CardSpan = styled.span `
  width: 90%;
  display: inline-block;
  margin: 1.5rem 5%;
  font-size: 1.1rem;
`;

const PriceSpan = styled.span `
  display: inline-block;
  margin-top: 0.3rem;
  margin-left: 0.5rem;
  font-size: 1.3rem;
  color: darkorchid;
  font-weight: bold;
`;

const AccomodationTypeSpan = styled.span `
  display: inline-block;
  margin-top: 0.3rem;
  font-size: 1.1rem;
  font-weight: bold;
`;

const UList = styled.ul `
  margin: 0;
  padding: 0;
`;

const List = styled.li `
  width: 40%;
  margin-left: 35%;
  list-style: none;
`;

const BookingSpan = styled.span `
  width: 90%;
  display: inline-block;
  margin: 1.5rem 5%;
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
`;


export default class Caravans extends React.Component {
  render() {
      return (
        <React.Fragment>
            <InfoContainer>
              <Card className="cardContainer">
                <CardMedia>
                  <SliderContainer>
                    <ImageSlider images={caravans}/>
                  </SliderContainer>
                </CardMedia>
                <CardContent>
                  <CardContentH2>{text.header}</CardContentH2>
                  <CardSpan>{text.info}</CardSpan>
                  <UList>
                    {text.prices.map((prices, i) => <List>
                            <AccomodationTypeSpan>{text.accomodationType[i]}</AccomodationTypeSpan>
                            <PriceSpan>{prices}</PriceSpan>
                        </List>
                    )}
                  </UList>
                  <BookingSpan>{text.booking}</BookingSpan>
                </CardContent>
              </Card>
            </InfoContainer>
        </React.Fragment>
      );
  }
}