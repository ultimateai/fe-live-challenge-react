import * as React from 'react';
import logo from "./logo.svg";
import styled from '@emotion/styled'

const Header = () => <Root>
    <img src={logo} className="App-logo" alt="logo"/>
</Root>

export default Header

const Root = styled.header`
  padding-left: 8px;
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 52px;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`