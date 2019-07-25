import React from 'react';
import styled from '@emotion/styled';
import logoImg from '../../images/logoforslag2_049.gif';
import norwegian from '../../images/NO-icon.png';
import english from '../../images/UK-icon.png'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { navigate } from "@reach/router"
import InfoMenu from './infoMenu';
import ActivitiesMenu from './activitiesMenu';
import AccomodationMenu from './accomodationMenu';

const LogoContainer = styled.div `
  width: 10%;
  height: 4rem;
  margin-left: 45%;
  margin-top: 0.5rem;
`;

const LogoImg = styled.img `
  position: absolute;
  right: 45%;
  display: inline;
  width: 10rem;
  height: 3rem;
`;

const NavContainer = styled.div `
  width: 33rem;
  height: 4rem;
`;

const HomeContainer = styled.div `
  display: inline-block;
  text-align: center;
  width: 7rem;
  height: 2.1rem;
  margin-top: 1rem;
  border-right: 2px solid grey;
`;

const LanguageContainer = styled.div `
  position: absolute;
  right: 0;
  width: 10rem;
  height: 4rem;
`;

const LanguageIcon = styled.img `
  width: 2.5rem;
  height: 2.5rem;
  margin-left: 1.5rem;
  margin-top: 0.7rem;
  &:hover {
    cursor: pointer;
    border-radius: 50%;
    border: 2px solid black;
  }
`;

export default class Appbar extends React.Component {
    render() {
      return (
        <AppBar color="default" className="appBar">
          <Toolbar>
            <NavContainer>
              <HomeContainer> <Button onClick={() => navigate('/')}>Home</Button></HomeContainer>
              <AccomodationMenu />
              <ActivitiesMenu />
              <InfoMenu />
            </NavContainer>
            <LogoContainer>
              <LogoImg src={logoImg}  alt="jølvassbu logo"/>
            </LogoContainer>
            
            <LanguageContainer>
                <LanguageIcon src={norwegian} />
                <LanguageIcon src={english} />
            </LanguageContainer>
          </Toolbar>
        </AppBar>
      );
    }
}