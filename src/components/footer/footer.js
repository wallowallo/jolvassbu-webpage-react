import React from 'react';
import styled from '@emotion/styled';

const  FooterContainer = styled.footer `
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 999;
  height: 2.5rem;
  background-color: white;
  border-top: 2px solid lightblue;
`;

const FooterSpan = styled.span `
  position: absolute;
  width: 50%;
  height: 2rem;
  margin-top: 0.5rem;
  margin-left: 25%;
  margin-right: 25%;
  text-align: center;
  font-weight: bold;
`;

const HighlightSpan = styled.span `
  margin-left: 1rem;
  color: darkorchid;
`;

export default class Footer extends React.Component {
  render() {
      return (
        <FooterContainer>
            <FooterSpan>© Jølvassbu Camping, N - 6847 VASSENDEN <HighlightSpan>BOOKING: </HighlightSpan>mobile + 47 92 06 22 03, e-mail: post@jolvassbu.no</FooterSpan>
        </FooterContainer>
      );
  }
}