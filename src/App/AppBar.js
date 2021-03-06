import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { AppContext } from './AppProvider';

const Logo = styled.div`
  font-size: 1.5em;
`;

const Bar = styled.div`
  display: grid;
  margin-bottom: 40px;
  grid-template-columns: 180px auto 100px 100px;
`;

const ControlButtonElem = styled.div`
  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      text-shadow: 0px 0px 60px #03ff03;
      color: yellow;
    `}
  ${props => props.hidden && css`
    display: none;
  `}
`;

const toProperCase = (lower) => {
  return lower.charAt(0).toUpperCase() + lower.substr(1);
};

const AppBar = () => {
  const appContext = useContext(AppContext);
  const { page, setPage, firstVisit } = appContext;

  const ControlButton = ({ name, active }) => {
    return (
      <ControlButtonElem active={page === name} hidden={firstVisit && name == 'dashboard'} onClick={() => setPage(name)}>
        {toProperCase(name)}
      </ControlButtonElem>
    );
  };

  return (
    <Bar>
      <Logo>Crypto</Logo>
      <div />
      <ControlButton active name="dashboard" />
      <ControlButton name="settings" />
    </Bar>
  );
};

export default AppBar;
