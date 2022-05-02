import React from 'react';
import styled from 'styled-components/native';
import {nomalizes} from '@utills/constants';
import Images from 'assets';
const Container = styled.View`
  width: 100%;
  height: ${nomalizes[30]}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #f4f4f4;
`;
const HambergerContainer = styled.View`
  width: ${nomalizes[70]}px;
  height: ${nomalizes[30]}px;
  padding-left: ${nomalizes[10]}px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const SearchAlarmContainer = styled.View`
  width: ${nomalizes[70]}px;
  height: ${nomalizes[30]}px;
  padding-right: ${nomalizes[10]}px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
const LogoText = styled.Text`
  font-size: ${nomalizes[14]}px;
  font-weight: bold;
`;
const Img = styled.Image`
  width: ${nomalizes[17]}px;
  height: ${nomalizes[15]}px;
`;
const MenuBar = () => {
  return (
    <Container>
      <HambergerContainer>
        <Img source={Images.hamber} />
      </HambergerContainer>
      <LogoText>Fooro</LogoText>
      <SearchAlarmContainer>
        <Img
          style={{
            marginRight: nomalizes[5],
          }}
          source={Images.alarm}
        />
        <Img source={Images.search} />
      </SearchAlarmContainer>
    </Container>
  );
};

export default MenuBar;
