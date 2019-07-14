import React from 'react';
import headerPicture from '../../images/jolvassbu-header.jpg';
import logoImg from '../../images/logoforslag2_049.gif';
import riverGif from '../../images/riverGif.webm';
import styled from '@emotion/styled';
import CssBaseline from '@material-ui/core/CssBaseline';

const HeaderImg = styled.img `
  width: 100%;
  height: 100%;
`;

const HeaderGif = styled.video `
  width: 100%;
  height: 90%;
`;

const Toolbar = styled.div `
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 4rem;
  background-color: white;
`;

const LogoImg = styled.img `
  width: 10rem;
  height: 3rem;
  margin-left: 50%;
  margin-right: 50%;
  margin-top: 0.5rem
`;

export default class FrontPage extends React.Component {
  render() {
      return (
        <React.Fragment>
          <CssBaseline />
          <div className="front-page-container">
            <HeaderGif src={riverGif} type='video/webm;codecs="vp8, vorbis"' autoPlay loop></HeaderGif>
            <HeaderImg src={headerPicture}/>
            <Toolbar>
              <LogoImg src={logoImg} />
            </Toolbar>
          </div>
        </React.Fragment>
      );
  }
}