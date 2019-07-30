import React from 'react';
import styled from '@emotion/styled';
import ImageSlider from '../../image-slider/image-slider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import './facilities.css';

function importAll(r) {
    return r.keys().map(r);
}

  // import all images in a folder
const facilities = importAll(require.context('../../../images/facilities', false, /\.(png|jpe?g|svg)$/));

const text = require('../../../text/english.json')[0].accomodation.facilities;

const SliderContainer = styled.div `
  width: 100%;
`;

const InfoContainer = styled.div `
  position: absolute;
  top: 40%;
  width: 100%;
  height: 140rem;
  background-color: white;
  border-top: 2px solid lightblue;
  background-image: linear-gradient(lightblue 0%, white 5%);
`;

const CardContentH2 = styled.h2 `
  text-align: center;
  margin-bottom: 0.5rem;
`;

const CardSpan = styled.span `
  width: 90%;
  display: inline-block;
  margin: 1.5rem 5%;
  font-size: 1.1rem;
`;

const PricePara = styled.p `
  margin: 0;
  font-size: 1rem;
  color: darkorchid;
  font-weight: bold;
  text-align: center;
`;

const SpecificsPara = styled.p `
  margin: 0;
  font-size: 0.9rem;
  color: darkorange;
  font-weight: bold;
  text-align: center;
`;

const Table = styled.table `
    border-collapse: collapse;
    width: 80%;
    margin: 1rem 10%;
`;

const TableHeader = styled.th `
    font-size: 1.1rem;
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
`;

const TableData = styled.td `
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
`;

export default class Facilities extends React.Component {
  render() {
      return (
        <React.Fragment>
            <InfoContainer>
                <Card className="facilitiesCardContainer">
                    <CardMedia>
                        <SliderContainer>
                            <ImageSlider images={facilities}/>
                        </SliderContainer>
                    </CardMedia>

                    <CardContent>
                        <CardContentH2>{text.header}</CardContentH2>
                        <CardSpan>{text.info}</CardSpan>

                        <CardContentH2>{text.header2}</CardContentH2>
                        <Table>
                            <tr>
                                {text.camperHeaders.map(header =>
                                    <TableHeader>{header}</TableHeader>
                                )}
                            </tr>
                            {text.campersPriceList.map(item =>
                                <tr>
                                    <TableData>{item.name}</TableData>

                                    <TableData>
                                        <SpecificsPara>{item.specifics}</SpecificsPara>
                                    </TableData>

                                    <TableData>
                                        <PricePara>{item.price}</PricePara>
                                    </TableData>
                                </tr>
                            )}

                            <tr>
                                {text.cabinHeaders.map(header =>
                                    <TableHeader>{header}</TableHeader>
                                )}
                            </tr>
                            {text.cabinsPriceList.map(item =>
                                <tr>
                                    <TableData>{item.name}</TableData>

                                    <TableData>
                                        <SpecificsPara>{item.specifics}</SpecificsPara>
                                    </TableData>

                                    <TableData>
                                        <PricePara>{item.price}</PricePara>
                                    </TableData>
                                </tr>
                            )}

                            <tr>
                                {text.rentalHeaders.map(header =>
                                    <TableHeader>{header}</TableHeader>
                                )}
                            </tr>
                            {text.rentalPriceList.map(item =>
                                <tr>
                                    <TableData>{item.name}</TableData>

                                    <TableData>
                                        <SpecificsPara>{item.specifics}</SpecificsPara>
                                    </TableData>

                                    <TableData>
                                        <PricePara>{item.price}</PricePara>
                                    </TableData>
                                </tr>
                            )}
                        </Table>
                    </CardContent>
                </Card>
            </InfoContainer>
        </React.Fragment>
      );
  }
}