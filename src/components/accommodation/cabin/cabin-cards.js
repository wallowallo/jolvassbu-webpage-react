import React from 'react';
import ImageSlider from '../../image-slider/image-slider';
import styled from '@emotion/styled';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { FaBed, FaTv, FaShower, FaToilet } from 'react-icons/fa';
import './cabin-cards.css';

const cabins = require('../../../text/english.json')[0].accomodation.cabins;

function importAll(r) {
  return r.keys().map(r);
}

// import all images in a folder
const persbua = importAll(require.context('../../../images/persbua', false, /\.(png|jpe?g|svg)$/));
const jola = importAll(require.context('../../../images/jola', false, /\.(png|jpe?g|svg)$/));
const selet = importAll(require.context('../../../images/selet', false, /\.(png|jpe?g|svg)$/));
const holsabua = importAll(require.context('../../../images/holsabua', false, /\.(png|jpe?g|svg)$/));
const orretbu = importAll(require.context('../../../images/orretbu', false, /\.(png|jpe?g|svg)$/));

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
  display: inline-block;
  margin: 0.4rem;
`;

const CardContentH2 = styled.h2 `
  text-align: center;
  margin-bottom: 0.5rem;
`;

const IconsContainer = styled.div `
  width: 100%;
  height: 2.5rem;
`;

const BedIconContainer = styled.div `
  display: inline-block;
  width: 5rem;
  height: 2.5rem;
  margin-left: 0.5rem;
`;

const IconContainer = styled.div `
  display: inline-block;
  margin-left: 1rem;
  width: 3rem;
  height: 2.5rem;
`;

const IconText = styled.span `
  height: 2.5rem;
  width: 3rem;
  font-size: 1.2rem;
  font-weight: bold;
`;

const PriceText = styled.span `
  position: relative;
  bottom: 0;
  float: right;
  font-size: 2.5rem;
  font-weight: bold;
  color: 	#9932CC;
`;

const isEnglish = true;

const sliders = [persbua, jola, selet, holsabua, orretbu];

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
                    <CardContentH2>{cabins[i].header}</CardContentH2>

                    <IconsContainer>
                        <IconContainer style={!cabins[i].info.tv ? {display: 'none'} : {}} >
                          <FaTv size="2rem" />
                        </IconContainer>

                        <IconContainer style={!cabins[i].info.shower ? {display: 'none'} : {}} >
                          <FaShower size="2rem" />
                        </IconContainer>

                        <IconContainer style={!cabins[i].info.toilet ? {display: 'none'} : {}} >
                          <FaToilet size="2rem" />
                        </IconContainer>

                        <BedIconContainer>
                          <IconText alt="beds">{cabins[i].info.beds} </IconText> 
                          <FaBed size="2rem" />
                        </BedIconContainer>

                    </IconsContainer>

                    <CardSpan>{cabins[i].info.text}</CardSpan>
                    <CardSpan> <strong>{isEnglish ? 'Bedrooms: ' : 'Soverom: '}<span>{cabins[i].info.bedrooms}</span></strong></CardSpan>
                    <CardSpan  style={!cabins[i].info.floors ? {display: 'none'} : {}}> <strong><span>{cabins[i].info.floors}</span></strong></CardSpan>

                    <PriceText>{cabins[i].info.price}</PriceText>

                  </CardContent>
                </Card>
              )}
          </CardContainer>
        </InfoContainer>
    );
  }
}