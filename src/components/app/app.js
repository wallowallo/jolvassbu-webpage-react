import React from 'react';
import riverGif from '../../images/riverGif.webm';
import styled from '@emotion/styled';
import CssBaseline from '@material-ui/core/CssBaseline';
import Appbar from '../navBar/appbar';
import { Router } from '@reach/router';
import FrontPage from '../front-page/front-page';
import CabinCard from '../accommodation/cabin-cards';

const HeaderGifContainer = styled.div `
  width: 100%;
  position: fixed;
`;

const HeaderGif = styled.video `
  width: 100%;
`;

const  TextHeaderContainer = styled.div `
  position: absolute;
  top: 36%;
  width: 80%;
  height: 5rem;
  margin: 0 10%;
  background-color: white;
  z-index: 999;
  border: 2px solid lightblue;
`;

const TextHeader = styled.h1 `
  text-align: center;
`;

export default class App extends React.Component {
  render() {
      return (
        <React.Fragment>
            <CssBaseline />
            <Appbar />

            <HeaderGifContainer>
                <HeaderGif src={riverGif} type='video/webm;codecs="vp8, vorbis"' autoPlay loop></HeaderGif>
            </HeaderGifContainer>

            <TextHeaderContainer>
                <TextHeader>Welcome to Jølvassbu</TextHeader>
            </TextHeaderContainer>

            <Router>
                <FrontPage path="/" />
                <CabinCard path="cabins" />
            </Router>
        </React.Fragment>
      );
  }
}