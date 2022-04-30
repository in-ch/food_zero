import React from 'react';

import Header from '@components/Header/Header';
import InsertProfileImg from '@components/InsertProfileImg/InsertProfileImg';
import {SizedBox} from '@components/SizedBox';
import {nomalizes} from '@utills/constants';

interface Props {
  GoBack: () => void;
}

const InputProfilePresenter = ({GoBack}: Props) => {
  return (
    <>
      <Header back={GoBack} />
      <SizedBox.Custom margin={nomalizes[50]} />
      <InsertProfileImg />
    </>
  );
};

export default InputProfilePresenter;
