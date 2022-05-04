/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import styled from 'styled-components/native';
import {Animated, Image, Text} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

import {cHeight, cWidth, nomalizes} from '@utills/constants';
import {cssUtil} from '@utills/cssUtil';
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
  display: flex;
  ${cssUtil.doubleCenter};
`;
const Extra = styled.View`
  width: ${cWidth * 0.3};
  height: ${cHeight + nomalizes[50]}px;
`;
const ContentWrapper = styled.View`
  width: 80%;
  height: ${cHeight}px;
`;
const ProfileContainer = styled.View`
  width: 100%;
  height: ${nomalizes[130]}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
`;
const Profile = styled.View`
  width: ${nomalizes[50]}px;
  height: ${nomalizes[50]}px;
  border-radius: ${nomalizes[25]}px;
  background-color: #ececec;
  display: flex;
  ${cssUtil.doubleCenter};
  overflow: hidden;
`;
const ProfileNicknameContainer = styled.View`
  max-width: 60%;
  height: ${nomalizes[15]}px;
  text-overflow: ellipsis;
`;
const ProfileNickname = styled.Text`
  margin-left: ${nomalizes[15]}px;
  font-size: ${nomalizes[14]}px;
  font-weight: bold;
`;
const CategoryContainer = styled.View`
  width: 100%;
  height: ${nomalizes[130]}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const TextContainer = styled.TouchableOpacity`
  width: 95%;
  margin-left: 2.5%;
  height: ${nomalizes[18]}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${nomalizes[10]}px;
  margin-bottom: ${nomalizes[10]}px;
`;
const SettingContainer = styled.View`
  width: 100%;
  height: ${nomalizes[160]}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const AnimatedContainer = Animated.createAnimatedComponent(SidebarContainer);

interface Props {
  GoToAlarm: () => void;
}
interface ContainerProps {
  show: boolean;
}

const MenuBar = ({GoToAlarm}: Props) => {
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
          <TouchableWithoutFeedback onPress={GoToAlarm}>
            <Img
              style={{
                marginRight: nomalizes[5],
              }}
              source={Images.alarm}
            />
          </TouchableWithoutFeedback>
          <Img source={Images.search} />
        </SearchAlarmContainer>
      </Container>
      <AnimatedContainer style={{width: animatedValue}}>
        <Wrapper>
          <Main>
            <ContentWrapper>
              <ProfileContainer
                style={{borderBottomColor: '#000', borderBottomWidth: 1}}>
                <Profile>
                  <Image
                    style={{
                      width: nomalizes[50],
                      height: nomalizes[50],
                    }}
                    source={Images.user}
                  />
                </Profile>
                <ProfileNicknameContainer>
                  <ProfileNickname numberOfLines={1}>닉네임</ProfileNickname>
                </ProfileNicknameContainer>
                <Image
                  style={{
                    width: nomalizes[6],
                    height: nomalizes[6],
                    marginLeft: nomalizes[4],
                  }}
                  source={Images.arrowLeft}
                />
              </ProfileContainer>
              <CategoryContainer
                style={{
                  borderBottomColor: '#000',
                  borderBottomWidth: 1,
                }}>
                <TextContainer>
                  <Text style={{fontSize: nomalizes[14]}}>이웃 관리</Text>
                  <Image
                    style={{
                      width: nomalizes[6],
                      height: nomalizes[6],
                      marginLeft: nomalizes[4],
                    }}
                    source={Images.arrowLeft}
                  />
                </TextContainer>
                <TextContainer>
                  <Text style={{fontSize: nomalizes[14]}}>카테고리 관리</Text>
                  <Image
                    style={{
                      width: nomalizes[6],
                      height: nomalizes[6],
                      marginLeft: nomalizes[4],
                    }}
                    source={Images.arrowLeft}
                  />
                </TextContainer>
              </CategoryContainer>
              <SettingContainer>
                <TextContainer>
                  <Text style={{fontSize: nomalizes[14]}}>알림설정</Text>
                </TextContainer>
                <TextContainer>
                  <Text style={{fontSize: nomalizes[14]}}>환경설정</Text>
                </TextContainer>
                <TextContainer>
                  <Text style={{fontSize: nomalizes[14]}}>로그아웃</Text>
                </TextContainer>
              </SettingContainer>
            </ContentWrapper>
          </Main>
          <TouchableWithoutFeedback onPress={onHide}>
            <Extra />
          </TouchableWithoutFeedback>
        </Wrapper>
      </AnimatedContainer>
    </>
  );
};

export default MenuBar;
