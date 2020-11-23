import React from 'react';
import styled, { css } from 'styled-components';

const Logo = styled.div`
  font-size: 1.5em;
`;

const Bar = styled.div`
  display: grid;
  margin-bottom: 40px;
  grid-template-columns: 180px auto 100px 100px
`;

const ControlButtonElem = styled.div`
  cursor: pointer;
  ${props => props.active && css`
    text-shadow: 0px 0px 60px #03ff03;
    color: yellow;
  `}
`;

const ControlButton = ({ name, active }) => {
  return (
    <ControlButtonElem active={active}>
      {name}
    </ControlButtonElem>
  )
}

const toProperCase = lower => {
  return lower.charAt(0).toUpperCase() + lower.substr(1);
}

const AppBar = () => {
  return (
    <Bar>
      <Logo>Crypto</Logo>
      <div/>
      <ControlButton active name={toProperCase("dashboard")}/>
      <ControlButton name={toProperCase("settings")}/>
    </Bar>
  );
};


export default AppBar;