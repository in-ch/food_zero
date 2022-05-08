import React, {useRef, useState} from 'react';
import styled from 'styled-components/native';
import {nomalizes} from '@utills/constants';
import images from '@assets/images';
import {Animated} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const Container = styled.View``;
const Wrapper = styled.TouchableOpacity`
  height: ${nomalizes[35]}px;
  padding-left: ${nomalizes[15]}px;
  padding-right: ${nomalizes[15]}px;
  background-color: #fff;
  border: 1px solid #777777;
  border-radius: ${nomalizes[5]}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const FlexEndRow = styled.View`
  display: flex;
  flex-direction: row;
  flex: 1;
`;
const IImage = styled.Image``;
const TText = styled.Text`
  color: #000;
`;
const Options = styled.View`
  width: 100%;
  overflow: hidden;
  border-top-width: 0;
  border-bottom-left-radius: ${nomalizes[5]}px;
  border-bottom-right-radius: ${nomalizes[5]}px;
  margin-top: -${nomalizes[3]}px;
  background-color: #fff;
  border-color: #777777;
`;
const Option = styled.TouchableOpacity`
  width: 100%;
  height: ${nomalizes[30]}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: ${nomalizes[15]}px;
`;
const Mark = styled.View`
  width: ${nomalizes[12]}px;
  height: ${nomalizes[12]}px;
  border-radius: ${nomalizes[3]}px;
  margin-right: ${nomalizes[7]}px;
  background-color: #ade4fa;
`;
const AnimatedOption = Animated.createAnimatedComponent(Options);

const SelectInput = () => {
  const [show, setShow] = useState<boolean>(false);
  const animatedHeight = useRef(new Animated.Value(0)).current;
  const animatedBorder = useRef(new Animated.Value(0)).current;
  const onShow = () => {
    Animated.timing(animatedHeight, {
      toValue: nomalizes[160],
      duration: 250,
      useNativeDriver: false,
    }).start();
    Animated.timing(animatedBorder, {
      toValue: 1,
      duration: 250,
      useNativeDriver: false,
    }).start();
    setShow(!show);
  };
  const onHide = () => {
    Animated.timing(animatedHeight, {
      toValue: 0,
      duration: 250,
      useNativeDriver: false,
    }).start();
    Animated.timing(animatedBorder, {
      toValue: 0,
      duration: 250,
      useNativeDriver: false,
    }).start();
    setShow(!show);
  };

  return (
    <Container>
      <Wrapper onPress={show ? onHide : onShow}>
        <FlexEndRow>
          <Mark />
          <TText>과일</TText>
        </FlexEndRow>
        <IImage
          style={{
            width: nomalizes[5],
            height: nomalizes[5],
          }}
          source={images.arrowDown}
        />
      </Wrapper>
      <AnimatedOption
        style={{
          height: animatedHeight,
          borderWidth: animatedBorder,
        }}>
        <ScrollView>
          <Option>
            <Mark />
            <TText>과일</TText>
          </Option>

          <Option>
            <Mark />
            <TText>과일</TText>
          </Option>

          <Option>
            <Mark />
            <TText>과일</TText>
          </Option>
          <Option>
            <Mark />
            <TText>과일</TText>
          </Option>
          <Option>
            <Mark />
            <TText>과일</TText>
          </Option>
          <Option>
            <Mark />
            <TText>토마토</TText>
          </Option>
          <Option>
            <Mark />
            <TText>과일</TText>
          </Option>
        </ScrollView>
      </AnimatedOption>
    </Container>
  );
};

export default SelectInput;
