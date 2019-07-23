import React from 'react';
import styled from '@emotion/styled';
import logoImg from '../../images/logoforslag2_049.gif';
import norwegian from '../../images/NO-icon.png';
import english from '../../images/UK-icon.png'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { navigate } from "@reach/router"

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

const AccomodationContainer = styled.div `
  display: inline-block;
  text-align: center;
  width: 10rem;
  height: 2.1rem;
  margin-top: 1rem;
  border-right: 2px solid grey;
`;

const HomeContainer = styled.div `
  display: inline-block;
  text-align: center;
  width: 7rem;
  height: 2.1rem;
  margin-top: 1rem;
  border-right: 2px solid grey;
`;

const InfoContainer = styled.div `
  display: inline-block;
  text-align: center;
  width: 7rem;
  height: 2.1rem;
  margin-top: 1rem;
  border-right: 2px solid grey;
`;

const ActivitiesContainer = styled.div `
  display: inline-block;
  text-align: center;
  width: 9rem;
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

function AccomodationMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function navToCabins() {
    navigate('/cabins');
    setAnchorEl(null);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <AccomodationContainer>
      <Button aria-controls="simple-menu" aria-haspopup="true" onMouseEnter={handleOpen}>
        Accomodation
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={navToCabins}>Cabins</MenuItem>
        <MenuItem onClick={handleClose}>Caravans</MenuItem>
      </Menu>
    </AccomodationContainer>
  );
}

function InfoMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <InfoContainer>
      <Button aria-controls="simple-menu" aria-haspopup="true" onMouseEnter={handleOpen}>
        Info
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Jølster news</MenuItem>
        <MenuItem onClick={handleClose}>Jølster</MenuItem>
        <MenuItem onClick={handleClose}>Map</MenuItem>
        <MenuItem onClick={handleClose}>Contact us</MenuItem>
      </Menu>
    </InfoContainer>
  );
}

function ActivitiesMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <ActivitiesContainer>
      <Button aria-controls="simple-menu" aria-haspopup="true" onMouseEnter={handleOpen}>
        Activities
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Spring and summer</MenuItem>
        <MenuItem onClick={handleClose}>Autumn and winter</MenuItem>
      </Menu>
    </ActivitiesContainer>
  );
}

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