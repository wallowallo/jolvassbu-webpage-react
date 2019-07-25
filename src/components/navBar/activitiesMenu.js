import React from 'react';
import styled from '@emotion/styled';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { navigate } from "@reach/router"

const ActivitiesContainer = styled.div `
  display: inline-block;
  text-align: center;
  width: 9rem;
  height: 2.1rem;
  margin-top: 1rem;
  border-right: 2px solid grey;
`;

export default function ActivitiesMenu() {
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