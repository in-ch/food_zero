import React from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native';
import {nomalizes} from '@utills/constants';
import {cssUtil} from '@utills/cssUtil';

const Container = styled.View`
  width: 90%;
  height: ${nomalizes[40]}px;
  background-color: #fff;
  border: 1px solid #777777;
  margin-left: 5%;
  display: flex;
  flex-direction: row;
  ${cssUtil.doubleCenter};
`;
const TTextInput = styled.TextInput`
  padding-left: ${nomalizes[10]}px;
  flex: 8;
  height: ${nomalizes[40]}px;
  font-size: ${nomalizes[14]}px;
`;
const LengthContainer = styled.View`
  flex: 2;
  height: ${nomalizes[40]}px;
  padding-right: ${nomalizes[10]}px;
  display: flex;
  flex-direction: row;
  ${cssUtil.doubleCenter};
`;

interface Props {
  value: string;
  setValue: (value: string) => void;
  maxLength: number;
}
const SizedInput = ({value, setValue, maxLength}: Props) => {
  return (
    <Container>
      <TTextInput
        placeholder="닉네임 입력"
        placeholderTextColor="#646464"
        onChangeText={(text: string) => setValue(text)}
        value={value}
        maxLength={maxLength}
      />
      <LengthContainer>
        <Text>
          {value?.length}/{maxLength}
        </Text>
      </LengthContainer>
    </Container>
  );
};

export default SizedInput;
