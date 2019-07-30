import React from 'react';
import styled from '@emotion/styled';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { FaMapMarkedAlt, FaMailBulk, FaInfoCircle } from 'react-icons/fa';
import { navigate } from "@reach/router"

const text = require('../../text/english.json')[0].information;

const InfoContainer = styled.div `
  display: inline-block;
  text-align: center;
  width: 7rem;
  height: 2.1rem;
  margin-top: 1rem;
  border-right: 2px solid grey;
`;

const ListItemSpan = styled.span `
  margin-left: 0.5rem;
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
          <MenuItem onClick={navigateToJølster}>
            <FaInfoCircle size="1.5rem" />
            <ListItemSpan>{text.links[0]}</ListItemSpan>
          </MenuItem>
          <MenuItem onClick={navigateToMap}>
            <FaMapMarkedAlt size="1.5rem" />
            <ListItemSpan>{text.links[1]}</ListItemSpan>
          </MenuItem>
          <MenuItem onClick={navigateToContact}>
            <FaMailBulk size="1.5rem" />
            <ListItemSpan>{text.links[2]}</ListItemSpan>
          </MenuItem>
        </Menu>
      </InfoContainer>
    );
  }