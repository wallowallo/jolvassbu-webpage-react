import React from 'react';
import ImageSlider from '../image-slider/image-slider';
import styled from '@emotion/styled';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import SvgIcon from '@material-ui/core/SvgIcon';
import './cabin-cards.css';

const cabins = require('../../text/english.json')[0].accomodation.cabins;

function importAll(r) {
  return r.keys().map(r);
}

// import all images in a folder
const persbuaAndElvestua = importAll(require.context('../../images/frontPageImages', false, /\.(png|jpe?g|svg)$/));
const jola = importAll(require.context('../../images/frontPageImages', false, /\.(png|jpe?g|svg)$/));
const selet = importAll(require.context('../../images/frontPageImages', false, /\.(png|jpe?g|svg)$/));
const holsabua = importAll(require.context('../../images/frontPageImages', false, /\.(png|jpe?g|svg)$/));
const orretbu = importAll(require.context('../../images/frontPageImages', false, /\.(png|jpe?g|svg)$/));

const SliderContainer = styled.div `
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

const CardContainer = styled.div `
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 5rem 10%;
  height: 90%;
`;

const CardSpan = styled.span `
  display: block;
  margin: 0.4rem;
`;

const CardContentH4 = styled.h4 `
  text-align: center;
`;

const sliders = [persbuaAndElvestua, jola, selet, holsabua, orretbu];

export default class CabinCards extends React.Component {
  render() {
    return (
        <InfoContainer>
          <CardContainer>
            {sliders.map((slider, i) =>
                <Card className={`cabinCardContainer cabinCard${i + 1}`} key={i.toString()}>
                  <CardMedia>
                    <SliderContainer>
                      <ImageSlider images={slider} imageKey={`slider${i}`}/>
                    </SliderContainer>
                  </CardMedia>
                  <CardContent>
                    <CardContentH4>{cabins[i].header}</CardContentH4>
                    <CardSpan> Info: <span>{cabins[i].info.text}</span></CardSpan>
                    <CardSpan> Bedrooms: <span>{cabins[i].info.bedrooms}</span></CardSpan>
                    <CardSpan> Beds: <span>{cabins[i].info.beds}</span></CardSpan>
                    <CardSpan> Price: <span>{cabins[i].info.price}</span></CardSpan>
                  </CardContent>
                </Card>
              )}
          </CardContainer>
        </InfoContainer>
    );
  }
}