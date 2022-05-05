import React from 'react';
import {Image} from 'react-native';
import styled from 'styled-components/native';
import {nomalizes} from '@utills/constants';
import images from '@assets/images';
import {cssUtil} from '~/utills/cssUtil';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
// import moment from 'moment';
// import 'moment/locale/ko';

// require('moment-timezone');

const Container = styled.View`
  width: 100%;
  height: ${nomalizes[40]}px;
`;
const HHeader = styled.View`
  width: 100%;
  height: ${nomalizes[40]}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Row = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const TText = styled.Text`
  font-size: ${nomalizes[16]}px;
  font-weight: bold;
  padding-right: ${nomalizes[5]}px;
`;
const AddButton = styled.TouchableOpacity`
  width: ${nomalizes[40]}px;
  height: ${nomalizes[20]}px;
  margin-left: ${nomalizes[5]}px;
  border-radius: ${nomalizes[4]}px;
  color: #fff;
  background-color: #ff6c63;
  display: flex;
  ${cssUtil.doubleCenter};
`;
const AddButtonText = styled.Text`
  color: #fff;
  font-size: ${nomalizes[8]}px;
`;
interface Props {
  date: string;
}

const Header = ({date}: Props) => {
  const ddate = new Date(date);
  const month = ddate.getMonth();
  const year = ddate.getFullYear();
  return (
    <Container>
      <HHeader>
        <Row>
          <TText>
            {year}년 {month + 1}월
          </TText>
          <Image
            style={{
              width: nomalizes[5],
              height: nomalizes[5],
            }}
            source={images.arrowDown}
          />
        </Row>
        <Row>
          <TouchableWithoutFeedback>
            <Image
              style={{
                width: nomalizes[15],
                height: nomalizes[15],
              }}
              source={images.calendar}
            />
          </TouchableWithoutFeedback>
          <AddButton>
            <AddButtonText>추가하기</AddButtonText>
          </AddButton>
        </Row>
      </HHeader>
    </Container>
  );
};

export default Header;
