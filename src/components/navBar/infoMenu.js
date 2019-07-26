import React from 'react';
import styled from '@emotion/styled';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { navigate } from "@reach/router"

const InfoContainer = styled.div `
  display: inline-block;
  text-align: center;
  width: 7rem;
  height: 2.1rem;
  margin-top: 1rem;
  border-right: 2px solid grey;
`;

export default function InfoMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    function handleOpen(event) {
      setAnchorEl(event.currentTarget);
    }

    function navigateToMap() {
        navigate('/map');
        setAnchorEl(null);
    }

    function navigateToContact() {
      navigate('/contact');
      setAnchorEl(null);
    }

    function navigateToJølster() {
      navigate('/jolster');
      setAnchorEl(null);
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
          <MenuItem onClick={navigateToJølster}>Jølster</MenuItem>
          <MenuItem onClick={navigateToMap}>Map</MenuItem>
          <MenuItem onClick={navigateToContact}>Contact us</MenuItem>
        </Menu>
      </InfoContainer>
    );
  }