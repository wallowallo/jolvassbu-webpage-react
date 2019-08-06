import React from 'react';
import riverGif from '../../images/riverGif.webm';
import styled from '@emotion/styled';
import CssBaseline from '@material-ui/core/CssBaseline';
import Appbar from '../navBar/appbar';
import { Router } from '@reach/router';
import FrontPage from '../front-page/front-page';
import Footer from '../footer/footer';
import CabinCard from '../accommodation/cabin/cabin-cards';
import Caravans from '../accommodation/caravans/caravans';
import Map from '../information/map/map';
import Contact from '../information/contact/contact';
import Jolster from '../information/jolster/jolster';
import Summer from '../activities/summer/summer';
import Winter from '../activities/winter/winter';
import Facilities from '../accommodation/facilities/facilities';
import { StylesProvider } from "@material-ui/styles";

const text = require('../../text/english.json')[0].frontPage;

const HeaderGifContainer = styled.div `
  width: 100%;
  position: fixed;
`;

const HeaderGif = styled.video `
  width: 100%;
`;

const  TextHeaderContainer = styled.div `
  position: absolute;
  top: 56%;
  width: 80%;
  height: 5rem;
  margin: 0 10%;
  background-color: white;
  z-index: 999;
  border: 2px solid lightblue;

  @media only screen and (max-width: 1000px) {
    top: 41%;
  }

  @media only screen and (max-width: 800px) {
    top: 31%;
  }

  @media only screen and (max-width: 600px) {
    top: 21%;
  }
`;

const TextHeader = styled.h1 `
  text-align: center;
`;

export default class App extends React.Component {
  render() {
      return (
        <StylesProvider injectFirst>
            <React.Fragment>
              <CssBaseline />
              <Appbar />

              <HeaderGifContainer>
                  <HeaderGif src={riverGif} type='video/webm;codecs="vp8, vorbis"' autoPlay loop></HeaderGif>
              </HeaderGifContainer>

              <TextHeaderContainer>
                  <TextHeader>{text.header}</TextHeader>
              </TextHeaderContainer>

              <Router>
                  <FrontPage path="/" />
                  <CabinCard path="cabins" />
                  <Caravans path="caravans" />
                  <Map path="map"/>
                  <Contact path="contact" />
                  <Jolster path="jolster" />
                  <Summer path="summer" />
                  <Winter path="winter" />
                  <Facilities path="facilities" />
              </Router>
              
              <Footer />
            </React.Fragment>
        </StylesProvider>
      );
  }
}