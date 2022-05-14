import React, {useState} from 'react';
import {SettingProps} from './Setting';
import SettingPresenter from './SettingPresetner';

const SettingContainer = ({navigation}: SettingProps) => {
  const GoBack = () => {
    navigation.goBack();
  };
  const [neighborShareAbled, setNeighborShareAbled] = useState<boolean>(false); // 이웃의 나눔 요청 받기
  const [neighborShareNewsAbled, setNeighborShareNewsAbled] =
    useState<boolean>(false); // 이웃의 식품 공유 소식 받기

  const handleNeighborShareAbled = () => {
    setNeighborShareAbled(!neighborShareAbled);
  };
  const handleNeighborShareNewsAbled = () => {
    setNeighborShareNewsAbled(!neighborShareNewsAbled);
  };
  return (
    <SettingPresenter
      GoBack={GoBack}
      handleNeighborShareAbled={handleNeighborShareAbled}
      handleNeighborShareNewsAbled={handleNeighborShareNewsAbled}
      neighborShareAbled={neighborShareAbled}
      neighborShareNewsAbled={neighborShareNewsAbled}
    />
  );
};

export default SettingContainer;
