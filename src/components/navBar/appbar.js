import React from 'react';
import styled from '@emotion/styled';
import logoImg from '../../images/logoforslag2_049.gif';
import norwegian from '../../images/NO-icon.png';
import english from '../../images/UK-icon.png'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { navigate } from "@reach/router"
import { NavMenuContainer } from '../common/styling';
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
  ${NavMenuContainer};
  width: 7rem;
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
    constructor(props){
      super(props);
      this.state = {isEnglish: true};

      this.setLangToEnglish = this.setLangToEnglish.bind(this);
      this.setLangToNorwegian = this.setLangToNorwegian.bind(this);
    }
    setLangToEnglish = () => this.setState({isEnglish: true});
    setLangToNorwegian = () => this.setState({isEnglish: false});
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
                <LanguageIcon src={norwegian} style={!this.state.isEnglish ? {cursor: 'pointer', borderRadius: '50%', border: '2px solid black'} : {}} onClick={this.setLangToNorwegian} />
                <LanguageIcon src={english} style={this.state.isEnglish ? {cursor: 'pointer', borderRadius: '50%', border: '2px solid black'} : {}} onClick={this.setLangToEnglish} />
            </LanguageContainer>
          </Toolbar>
        </AppBar>
      );
    }
}