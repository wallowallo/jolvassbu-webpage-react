import React from 'react';
import styled from '@emotion/styled';
import FrontPageSlider from './front-page-slider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { baseContainerStyling, SliderContainer } from '../common/styling';
import './front-page.css';

const text = require('../../text/english.json')[0].frontPage;

const InfoContainer = styled.div `
  ${baseContainerStyling};
  height: 88rem;
`;

const HeaderText = styled.h3 `
  margin-top: 2rem;
  width: 90%;
  margin-left: 5%;
`;

const ActivitiesList = styled.li `
  font-size: 1.1rem;
  font-weight: bold;
  color: darkorchid;
  margin-bottom: 0.6rem;
`;

const UList = styled.ul `
  width: 70%;
  margin-left: 10%;
`;

const InfoText = styled.p `
  width: 90%;
  margin: 0.5rem 5%;
  font-size: 1.1rem;
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
                    {text.activitiesList.map((activity, i) => <ActivitiesList className="actvtList" key={i}>{activity}</ActivitiesList>)}
                  </UList>
                  {text.info.map((i, idx) => <InfoText className="listPara" key={idx}>{i}</InfoText>)}
                </CardContent>
              </Card>
            </InfoContainer>
        </React.Fragment>
      );
  }
}