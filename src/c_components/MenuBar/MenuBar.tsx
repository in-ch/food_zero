import React, {useRef} from 'react';
import styled from 'styled-components/native';
import {cHeight, cWidth, nomalizes} from '@utills/constants';
import Images from 'assets';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {Animated} from 'react-native';

const Container = styled.View`
  width: 100%;
  height: ${nomalizes[30]}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #f4f4f4;
`;
const HambergerContainer = styled.TouchableOpacity`
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

const SidebarContainer = styled.View<ContainerProps>`
  display: flex;
  height: ${cHeight + nomalizes[50]}px;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 2;
  overflow: hidden;
`;
const Wrapper = styled.View`
  width: 100%;
  height: ${cHeight + nomalizes[50]}px;
  display: flex;
  flex-direction: row;
`;
const Main = styled.View`
  width: ${cWidth * 0.7};
  height: ${cHeight + nomalizes[50]}px;
  background-color: white;
`;
const Extra = styled.View`
  width: ${cWidth * 0.3};
  height: ${cHeight + nomalizes[50]}px;
`;
const AnimatedContainer = Animated.createAnimatedComponent(SidebarContainer);
interface ContainerProps {
  show: boolean;
}

const MenuBar = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const onShow = () => {
    Animated.timing(animatedValue, {
      toValue: cWidth,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };
  const onHide = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };
  return (
    <>
      <Container>
        <HambergerContainer onPress={onShow}>
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
      <AnimatedContainer style={{width: animatedValue}}>
        <Wrapper>
          <Main />
          <TouchableWithoutFeedback onPress={onHide}>
            <Extra />
          </TouchableWithoutFeedback>
        </Wrapper>
      </AnimatedContainer>
    </>
  );
};

export default MenuBar;
