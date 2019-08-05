import { css } from '@emotion/core';
import styled from '@emotion/styled';

export const baseContainerStyling = css`
  position: absolute;
  top: 60%;
  width: 100%;
  background-color: white;
  border-top: 2px solid lightblue;
  background-image: linear-gradient(lightblue 0%, white 5%);
`;

export const CardContentH2 = styled.h2 `
  text-align: center;
  margin-bottom: 0.5rem;
  margin-top: 0;
`;

export const SliderContainer = styled.div `
  width: 100%;
`;

export const CardContainer = styled.div `
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 5rem 10%;
  height: 90%;
`;

export const NavMenuContainer = css`
  display: inline-block;
  text-align: center;
  height: 2.1rem;
  margin-top: 1rem;
  border-right: 2px solid grey;
`;

export const ListItemSpan = styled.span `
  margin-left: 0.5rem;
`;