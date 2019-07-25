import React from 'react';
import styled from '@emotion/styled';
import map from '../../../images/map1.gif';
import './map.css';

const InfoContainer = styled.div `
  position: absolute;
  top: 40%;
  width: 100%;
  height: 75rem;
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

export default class Map extends React.Component {
  render() {
      return (
        <React.Fragment>
          <InfoContainer>
            <MapImg src={map} alt="map of jølster"/>
          </InfoContainer>
        </React.Fragment>
      );
  }
}