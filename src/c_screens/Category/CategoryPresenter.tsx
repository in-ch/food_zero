import React from 'react';
import {Image} from 'react-native';
import styled from 'styled-components/native';
import images from '~/assets/images';
import HeaderPlus from '~/c_components/Header/HeaderPlus';
import {SizedBox} from '~/c_components/SizedBox';
import {nomalizes} from '~/utills/constants';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;
const Box = styled.View`
  width: 100%;
  height: ${nomalizes[25]}px;
  display: flex;
  flex-direction: row;
  margin-top: ${nomalizes[10]}px;
`;
const Row = styled.View`
  display: flex;
  flex: 8;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-left: ${nomalizes[20]}px;
  height: ${nomalizes[25]}px;
`;
const RowRight = styled.View`
  display: flex;
  flex: 2;
  margin-right: ${nomalizes[10]}px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
const Mark = styled.View<ColorProps>`
  width: ${nomalizes[12]}px;
  height: ${nomalizes[12]}px;
  border-radius: ${nomalizes[3]}px;
  margin-right: ${nomalizes[7]}px;
  background-color: ${props => props.color};
`;
const TText = styled.Text`
  color: #000;
`;
interface Props {
  goBack: () => void;
}
interface ColorProps {
  color: string;
}

const CategoryPresenter = ({goBack}: Props) => {
  return (
    <Container>
      <HeaderPlus
        text="카테고리 관리"
        back={goBack}
        button={() => console.log('asdf')}
      />
      <SizedBox.Custom margin={nomalizes[10]} />
      <Box>
        <Row>
          <Mark color="#e7a6a6" />
          <TText>과일</TText>
        </Row>
        <RowRight>
          <Image
            style={{
              width: nomalizes[16],
              height: nomalizes[16],
            }}
            source={images.setting}
          />
        </RowRight>
      </Box>
      <Box>
        <Row>
          <Mark color="#e7a6a6" />
          <TText>과일</TText>
        </Row>
        <RowRight>
          <Image
            style={{
              width: nomalizes[16],
              height: nomalizes[16],
            }}
            source={images.setting}
          />
        </RowRight>
      </Box>
      <Box>
        <Row>
          <Mark color="#e7a6a6" />
          <TText>과일</TText>
        </Row>
        <RowRight>
          <Image
            style={{
              width: nomalizes[16],
              height: nomalizes[16],
            }}
            source={images.setting}
          />
        </RowRight>
      </Box>
    </Container>
  );
};

export default CategoryPresenter;
