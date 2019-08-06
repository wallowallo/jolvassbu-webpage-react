/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from 'react';
import ImageSlider from '../../image-slider/image-slider';
import styled from '@emotion/styled';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { InfoContainer, CardContentH2, SliderContainer, CardContainer, commonCardStyling, commonFirstAnd3rdStyling } from '../../common/styling';

const text = require('../../../text/english.json')[0].activities;

function importAll(r) {
  return r.keys().map(r);
}

// import all images in a folder
const fishing = importAll(require.context('../../../images/fishing', false, /\.(png|jpe?g|svg)$/));
const kayak = importAll(require.context('../../../images/kayak', false, /\.(png|jpe?g|svg)$/));
const swimming = importAll(require.context('../../../images/swimming', false, /\.(png|jpe?g|svg)$/));
const biking = importAll(require.context('../../../images/biking', false, /\.(png|jpe?g|svg)$/));
const rafting = importAll(require.context('../../../images/rafting', false, /\.(png|jpe?g|svg)$/));
const aurefest = importAll(require.context('../../../images/aurefest', false, /\.(png|jpe?g|svg)$/));
const marathon = importAll(require.context('../../../images/marathon', false, /\.(png|jpe?g|svg)$/));
const hiking = importAll(require.context('../../../images/hiking', false, /\.(png|jpe?g|svg)$/));
const golf = importAll(require.context('../../../images/golf', false, /\.(png|jpe?g|svg)$/));

const summerCardStyling = css`
  ${commonCardStyling};
  height: 46rem;
`;

const CardPara = styled.p `
  width: 90%;
  display: inline-block;
  margin: 0.5rem 5%;
  font-size: 1.1rem;
`;

const Link = styled.a `
  margin-left: 5%;
  color: darkorange;
  font-size: 1.2rem;
  font-weight: bold;
`;

const ItemsList = styled.li `
  list-style: none;
  width: 70%;
  margin: 0.5rem 15%;
`;

const HoursSpan = styled.span `
  margin-left: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
`;

const PriceSpan = styled.span `
  margin-left: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: darkorchid;
`;

const TextSpan = styled.span `
  font-size: 1.1rem;
`;

const sliders = [fishing, kayak, biking, swimming, rafting, hiking, golf, marathon, aurefest];

export default class Summer extends React.Component {
  render() {
    return (
        <InfoContainer>
          <CardContainer>
            {sliders.map((slider, i) =>
                <Card css={summerCardStyling} key={i.toString()}>
                  <CardMedia>
                    <SliderContainer>
                      <ImageSlider images={slider} imageKey={`slider${i}`}/>
                    </SliderContainer>
                  </CardMedia>

                  <CardContent>
                    <CardContentH2>{text.summerList[i].header}</CardContentH2>
                    <CardPara>{text.summerList[i].info}</CardPara>

                    {text.summerList[i].link ? <Link href={text.summerList[i].href}>{text.summerList[i].linkName}</Link> : ''}

                    {text.summerList[i].items 
                      ? text.summerList[i].items.map(item => <ItemsList>
                          <TextSpan>{item.name}</TextSpan> 
                          <HoursSpan>{item.hours}</HoursSpan> 
                          <PriceSpan>{item.price}</PriceSpan>
                        </ItemsList>) 
                      : ''}
                  </CardContent>
                </Card>
            )}
          </CardContainer>
        </InfoContainer>
    );
  }
}