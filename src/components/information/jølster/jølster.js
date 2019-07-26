import React from 'react';
import styled from '@emotion/styled';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import jølster from '../../../images/jølster1.jpg';
import './jølster.css';

const text = require('../../../text/english.json')[0].information.jølster;

const JølsterImg = styled.img `
  width: 100%;
`;

const InfoContainer = styled.div `
  position: absolute;
  top: 40%;
  width: 100%;
  height: 66rem;
  background-color: white;
  border-top: 2px solid lightblue;
  background-image: linear-gradient(lightblue 0%, white 5%);
`;

const CardContentH2 = styled.h2 `
  text-align: center;
  margin-bottom: 0.5rem;
  margin-top: 0;
`;

const TextParagraph = styled.p `
    width: 90%;
    font-size: 1.2rem;
    margin: 1rem 5%;
`;

const Link = styled.a `
    font-size: 1.2rem;
    font-weight: bold;
    color: darkorange;
    margin-right: 0.5rem;
`;

const SpecialLink = styled.a `
    font-size: 1.2rem;
    font-weight: bold;
    color: darkorange;
    margin-left: 5%;

`;

export default class Jølster extends React.Component {
  render() {
      return (
        <React.Fragment>
            <InfoContainer>
              <Card className="jølsterCardContainer">
                <CardMedia>
                  <JølsterImg src={jølster} />
                </CardMedia>
                <CardContent>
                    <CardContentH2>{text.header}</CardContentH2>

                    {text.descriptions.map((txt, i) => 
                        <TextParagraph key={i}>
                            <Link href={text.links[i]} target="_blank">{text.names[i]}</Link>
                            {txt}
                        </TextParagraph>
                    )}

                    <TextParagraph>
                        {text.specialLink.description}
                    </TextParagraph>
                    <SpecialLink href={text.specialLink.link} target="_blank">{text.specialLink.name}</SpecialLink>
                </CardContent>
              </Card>
            </InfoContainer>
        </React.Fragment>
      );
  }
}