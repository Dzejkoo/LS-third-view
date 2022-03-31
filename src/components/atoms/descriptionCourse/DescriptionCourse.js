import React from 'react';
import { DescriptionCourseWrapper } from './DescriptionCourse.styles';

export const DescriptionCourse = () => {
  return (
    <DescriptionCourseWrapper>
      <textarea id="description" name="description" placeholder="Opis kursu"></textarea>
      <span>1000 znaków</span>
    </DescriptionCourseWrapper>
  );
};
