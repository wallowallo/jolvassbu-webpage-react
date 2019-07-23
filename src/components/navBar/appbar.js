import React from 'react';
import styled from '@emotion/styled';
import logoImg from '../../images/logoforslag2_049.gif';
import norwegian from '../../images/NO-icon.png';
import english from '../../images/UK-icon.png'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const LogoContainer = styled.div `
  width: 10%;
  height: 4rem;
  margin-left: 45%;
  margin-top: 0.5rem;
`;

const LogoImg = styled.img `
  display: inline;
  width: 10rem;
  height: 3rem;
`;

const LanguageContainer = styled.div `
  width: 15rem;
  height: 4rem;
  margin-left: 35%;
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