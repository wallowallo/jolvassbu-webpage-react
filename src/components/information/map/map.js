import React from 'react';
import styled from '@emotion/styled';
import map from '../../../images/map1.gif';
import './map.css';

const InfoContainer = styled.div `
  position: absolute;
  top: 40%;
  width: 100%;
  height: 58rem;
  background-color: white;
  border-top: 2px solid lightblue;
  background-image: linear-gradient(lightblue 0%, white 5%);
`;

const MapImg = styled.img `
  width: 60%;
  margin-top: 5rem;
  margin-left: 20%;
  margin-right: 20%;
`;

const MapsLink = styled.a `
  display: block;
  font-size: 2rem;
  font-weight: bold;
  color: darkorchid;
  margin-left: 45%;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const GPSSpan = styled.span `
  width: 30%;
  margin-left: 40%;
  font-size: 2rem;
  font-weight: bold;
`;



export default class Map extends React.Component {
  render() {
      return (
        <React.Fragment>
          <InfoContainer>
            <MapImg src={map} alt="map of jølster"/>

            <MapsLink href="https://www.google.com/maps/place/J%C3%B8lvassbu+Camping/@61.4914433,6.1128295,15z/data=!4m8!3m7!1s0x0:0xdbe3250e4a71ac!5m2!4m1!1i2!8m2!3d61.4914433!4d6.1128295" target="_blank" >
              Google maps
            </MapsLink>

            <GPSSpan>
              GPS: N 61.29.47 E 06.06.75 
            </GPSSpan>
          </InfoContainer>
        </React.Fragment>
      );
  }
}