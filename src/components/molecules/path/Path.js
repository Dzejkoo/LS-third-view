import React from 'react';
import { PathWrapper } from './Path.styles';
import { ReactComponent as SmallArrow } from '../../../assets/image/icon/small-arrow.svg';

export const Path = () => {
  return (
    <PathWrapper>
      <span>
        Dashboard <SmallArrow />
      </span>
      <span>
        Kursy <SmallArrow />
      </span>
      <span>Dodaj nowy kurs</span>
    </PathWrapper>
  );
};
