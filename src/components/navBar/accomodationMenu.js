import React from 'react';
import styled from '@emotion/styled';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { GiCaravan, GiWoodCabin } from 'react-icons/gi';
import { NavMenuContainer, ListItemSpan } from '../common/styling';
import { navigate } from "@reach/router"

const text = require('../../text/english.json')[0].accomodation;

const AccomodationContainer = styled.div `
  ${NavMenuContainer};
  width: 10rem;
`;

export default function AccomodationMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    function handleOpen(event) {
      setAnchorEl(event.currentTarget);
    }
  
    function navToCabins() {
      navigate('/cabins');
      setAnchorEl(null);
    }
  
    function navToCaravans() {
      navigate('/caravans');
      setAnchorEl(null);
    }

    function navToFacilities() {
      navigate('/facilities');
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
          <MenuItem onClick={navToCabins}>
            <GiWoodCabin size="1.5rem" /> 
            <ListItemSpan>{text.links[0]}</ListItemSpan>
          </MenuItem>

          <MenuItem onClick={navToCaravans}>
            <GiCaravan size="1.5rem"/>
            <ListItemSpan>{text.links[1]}</ListItemSpan>
          </MenuItem>

          <MenuItem onClick={navToFacilities}>
            <GiCaravan size="1.5rem"/>
            <ListItemSpan>{text.links[2]}</ListItemSpan>
          </MenuItem>
        </Menu>
      </AccomodationContainer>
    );
  }