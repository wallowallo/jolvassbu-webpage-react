import React from 'react';
import styled from '@emotion/styled';
import FrontPageSlider from './front-page-slider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import './front-page.css';

const text = require('../../text/english.json')[0].frontPage;

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

export default class FrontPage extends React.Component {
  render() {
      return (
        <React.Fragment>
            <InfoContainer>
              <Card className="cardContainer">
                <CardMedia>
                  <SliderContainer>
                    <FrontPageSlider />
                  </SliderContainer>
                </CardMedia>
                <CardContent>
                  <div>{text.headerTitle}</div>
                  <ul>
                    {text.activitiesList.map(activity => <li>{activity}</li>)}
                  </ul>
                  <div>{text.info}</div>
                </CardContent>
              </Card>
            </InfoContainer>
        </React.Fragment>
      );
  }
}