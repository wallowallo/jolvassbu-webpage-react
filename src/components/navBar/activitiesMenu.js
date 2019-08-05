import React from 'react';
import styled from '@emotion/styled';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { FaSun, FaRegSnowflake } from 'react-icons/fa';
import { NavMenuContainer, ListItemSpan } from '../common/styling';
import { navigate } from "@reach/router"

const text = require('../../text/english.json')[0].activities;

const ActivitiesContainer = styled.div `
  ${NavMenuContainer};
  width: 9rem;
`;

export default function ActivitiesMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    function handleOpen(event) {
      setAnchorEl(event.currentTarget);
    }
  
    function navigateToSummer() {
      navigate('/summer')
      setAnchorEl(null);
    }

    function navigateToWinter() {
      navigate('/winter')
      setAnchorEl(null);
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
          <MenuItem onClick={navigateToSummer}>
            <FaSun size="1.5rem" />
            <ListItemSpan>{text.links[0]}</ListItemSpan>
          </MenuItem>
          <MenuItem onClick={navigateToWinter}>
            <FaRegSnowflake size="1.5rem" />
            <ListItemSpan>{text.links[1]}</ListItemSpan>
          </MenuItem>
        </Menu>
      </ActivitiesContainer>
    );
  }