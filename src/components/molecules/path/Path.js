import React from 'react';
import { PathWrapper } from './Path.styles';
import { ReactComponent as SmallArrow } from '../../../assets/image/icon/small-arrow.svg';

export const Path = () => {
  return (
    <PathWrapper>
      <button>Dashboard</button>
      <SmallArrow />
      <button>Kursy</button>
      <SmallArrow />
      <button>Dodaj nowy kurs</button>
    </PathWrapper>
  );
};
