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
  height: 76rem;
  background-color: white;
  border-top: 2px solid lightblue;
  background-image: linear-gradient(lightblue 0%, white 5%);
`;

const HeaderText = styled.h3 `
  margin-top: 2rem;
  width: 90%;
  margin-left: 5%;
`;

const ActivitiesList = styled.li `
  font-size: 0.9rem;
  font-weight: bold;
  color: darkorchid;
`;

const UList = styled.ul `
  width: 70%;
  margin-left: 15%;
`;

const InfoText = styled.p `
  width: 90%;
  margin: 0.2rem 5%;
  font-size: 1rem;
`;

export default class FrontPage extends React.Component {
  render() {
      return (
        <React.Fragment>
            <InfoContainer>
              <Card className="frontPageCardContainer">
                <CardMedia>
                  <SliderContainer>
                    <FrontPageSlider />
                  </SliderContainer>
                </CardMedia>
                <CardContent>
                  <HeaderText>{text.headerTitle}</HeaderText>
                  <UList>
                    {text.activitiesList.map((activity, i) => <ActivitiesList key={i}>{activity}</ActivitiesList>)}
                  </UList>
                  {text.info.map((i, idx) => <InfoText className="listPara" key={idx}>{i}</InfoText>)}
                </CardContent>
              </Card>
            </InfoContainer>
        </React.Fragment>
      );
  }
}