import React from 'react';
import styled from '@emotion/styled';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import jolster from '../../../images/jolster1.jpg';
import { baseContainerStyling, CardContentH2 } from '../../common/styling';
import './jolster.css';

const text = require('../../../text/english.json')[0].information.jølster;

const JolsterImg = styled.img `
  width: 100%;
`;

const InfoContainer = styled.div `
  ${baseContainerStyling};
  height: 66rem;
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

export default class Jolster extends React.Component {
  render() {
      return (
        <React.Fragment>
            <InfoContainer>
              <Card className="jølsterCardContainer">
                <CardMedia>
                  <JolsterImg src={jolster} />
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