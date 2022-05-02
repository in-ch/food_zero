import React from 'react';

import CCalendar from '@components/Calendar/Calendar';
import {statusBarHeight} from '@utills/constants';
import {SizedBox} from '@components/SizedBox';
import MenuBar from '~/c_components/MenuBar/MenuBar';
import Storys from '~/c_components/Storys/Storys';

const HomePresenter = () => {
  return (
    <>
      <SizedBox.Custom margin={statusBarHeight} />
      <MenuBar />
      <Storys />
      <CCalendar />
    </>
  );
};

export default HomePresenter;
