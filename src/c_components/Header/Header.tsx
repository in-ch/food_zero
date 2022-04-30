/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import styled from 'styled-components/native';
import {cWidth, nomalizes, statusBarHeight} from '@utills/constants';
import {SizedBox} from '@components/SizedBox';
import {cssUtil} from '@utills/cssUtil';
import Images from '@assets/images';
import {Image} from 'react-native';

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
  left: -${nomalizes[15]}px;
  font-size: ${nomalizes[14]}px;
  font-weight: bold;
`;

interface HeaderProps {
  text: string;
  back: () => void;
}

const Header = ({text, back}: HeaderProps) => {
  return (
    <Container>
      <SizedBox.Custom margin={statusBarHeight} />
      <Wrapper
        style={{
          borderBottomColor: '#cfcfcf',
          borderBottomWidth: 2,
        }}>
        <IconContatiner onPress={back}>
          <Image
            style={{width: nomalizes[20], height: nomalizes[20]}}
            source={Images.back}
          />
        </IconContatiner>
        <TextContainer>
          <TText style={{textAlign: 'center'}}>{text}</TText>
        </TextContainer>
      </Wrapper>
    </Container>
  );
};

export default Header;
