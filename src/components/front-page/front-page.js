/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from 'react';
import styled from '@emotion/styled';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { InfoContainer, SliderContainer, commonLargeCardStyling } from '../common/styling';
import ImageSlider from '../image-slider/image-slider';

const text = require('../../text/english.json')[0].frontPage;

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../../images/frontPageImages', false, /\.(png|jpe?g|svg)$/));

const frontPageCardStyling = css`
  ${commonLargeCardStyling};
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

  :last-child {
    margin-bottom: 2rem;
  }
`;

const UList = styled.ul `
  width: 70%;
  margin-left: 10%;
`;

const InfoText = styled.p `
  width: 90%;
  margin: 0.5rem 5%;
  font-size: 1.1rem;

  :last-child {
    margin-top: 1rem;
    font-weight: bold;
    color: darkorchid;
    font-size: 1.1rem;
  }
`;

export default class FrontPage extends React.Component {
  render() {
      return (
        <React.Fragment>
            <InfoContainer>
              <Card css={frontPageCardStyling}>
                <CardMedia>
                  <SliderContainer>
                    <ImageSlider images={images} />
                  </SliderContainer>
                </CardMedia>
                <CardContent>
                  <HeaderText>{text.headerTitle}</HeaderText>
                  <UList>
                    {text.activitiesList.map((activity, i) => <ActivitiesList key={i}>{activity}</ActivitiesList>)}
                  </UList>
                  {text.info.map((i, idx) => <InfoText key={idx}>{i}</InfoText>)}
                </CardContent>
              </Card>
            </InfoContainer>
        </React.Fragment>
      );
  }
}