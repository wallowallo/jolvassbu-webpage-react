import React from 'react';
import ImageSlider from '../../image-slider/image-slider';
import styled from '@emotion/styled';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import './winter.css';

const text = require('../../../text/english.json')[0].activities;

function importAll(r) {
  return r.keys().map(r);
}

// import all images in a folder
const fishing = importAll(require.context('../../../images/fishing', false, /\.(png|jpe?g|svg)$/));
const hiking = importAll(require.context('../../../images/hikingAutumn', false, /\.(png|jpe?g|svg)$/));
const gathering = importAll(require.context('../../../images/gathering', false, /\.(png|jpe?g|svg)$/));
const skiing = importAll(require.context('../../../images/skiing', false, /\.(png|jpe?g|svg)$/));
const slalom = importAll(require.context('../../../images/slalom', false, /\.(png|jpe?g|svg)$/));

const SliderContainer = styled.div `
  width: 100%;
`;

const InfoContainer = styled.div `
  position: absolute;
  top: 40%;
  width: 100%;
  height: 102rem;
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

const CardPara = styled.p `
  width: 90%;
  display: inline-block;
  margin: 0.5rem 5%;
  font-size: 1.1rem;
`;

const CardContentH2 = styled.h2 `
  text-align: center;
  margin-bottom: 0.5rem;
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

const sliders = [fishing, gathering, hiking, skiing, slalom];

export default class Winter extends React.Component {
  render() {
    return (
        <InfoContainer>
          <CardContainer>
            {sliders.map((slider, i) =>
                <Card className={`winterCardContainer winterCard${i + 1}`} key={i.toString()}>
                  <CardMedia>
                    <SliderContainer>
                      <ImageSlider images={slider} imageKey={`slider${i}`}/>
                    </SliderContainer>
                  </CardMedia>

                  <CardContent>
                    <CardContentH2>{text.winterList[i].header}</CardContentH2>
                    <CardPara>{text.winterList[i].info}</CardPara>

                    {text.winterList[i].link ? <Link href={text.winterList[i].href}>{text.winterList[i].linkName}</Link> : ''}

                    {text.winterList[i].items 
                      ? text.winterList[i].items.map(item => <ItemsList>
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