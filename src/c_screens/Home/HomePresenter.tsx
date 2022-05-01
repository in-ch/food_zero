import React from 'react';

import CCalendar from '@components/Calendar/Calendar';
import {statusBarHeight} from '@utills/constants';
import {SizedBox} from '@components/SizedBox';

const HomePresenter = () => {
  return (
    <>
      <SizedBox.Custom margin={statusBarHeight} />
      <CCalendar />
    </>
  );
};

export default HomePresenter;
