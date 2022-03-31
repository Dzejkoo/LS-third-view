import React from 'react';

import { CategoryCourseWrapper } from './CategoryCourse.styles';
import { DataListInput } from '../../atoms/dataListInput/DataListInput';

export const CategoryCourse = () => {
  return (
    <CategoryCourseWrapper>
      <DataListInput name="Kategoria kursu" />
      <DataListInput name="Podkategoria kursu (opcjonalnie)"></DataListInput>
    </CategoryCourseWrapper>
  );
};
