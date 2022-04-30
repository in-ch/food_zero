/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import styled from 'styled-components/native';
import {cWidth, nomalizes, statusBarHeight} from '@utills/constants';
import {SizedBox} from '@components/SizedBox';
import {cssUtil} from '@utills/cssUtil';

const Container = styled.View`
  background-color: #fff;
`;
const Wrapper = styled.View`
  width: 100%;
  height: ${nomalizes[35]}px;
  display: flex;
  flex-direction: row;
  ${cssUtil.doubleCenter}
`;
const IconContatiner = styled.TouchableOpacity`
  width: ${nomalizes[30]}px;
  height: ${nomalizes[30]}px;
  display: flex;
  flex-direction: row;
  ${cssUtil.doubleCenter}
`;
const TextContainer = styled.View`
  width: ${cWidth - nomalizes[30]};
`;
const TText = styled.Text`
  position: relative;
  left: -${nomalizes[10]}px;
  font-size: ${nomalizes[14]}px;
  font-weight: bold;
`;

interface HeaderProps {
  back: () => void;
}

const Header = ({back}: HeaderProps) => {
  return (
    <Container>
      <SizedBox.Custom margin={statusBarHeight} />
      <Wrapper
        style={{
          borderBottomColor: '#cfcfcf',
          borderBottomWidth: 2,
        }}>
        <IconContatiner onPress={back}>
          {/* <Image require={} /> */}
        </IconContatiner>
        <TextContainer>
          <TText style={{textAlign: 'center'}}>프로필 생성</TText>
        </TextContainer>
      </Wrapper>
    </Container>
  );
};

export default Header;
