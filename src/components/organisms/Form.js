import React from 'react';
import styled from 'styled-components';
import { NameCourse } from '../atoms/nameCourse/NameCourse';
import { Trainers } from '../atoms/trainers/Trainers';
import { CategoryCourse } from '../molecules/categoryCourse/CategoryCourse';
import { DescriptionCourse } from '../atoms/descriptionCourse/DescriptionCourse';
import { DataListInput } from '../atoms/dataListInput/DataListInput';
import { UploadFile } from '../molecules/uploadFile/UploadFile';
import { Buttons } from '../atoms/buttons/Buttons';

const FormWrapper = styled.div`
  max-width: 1064px;
  margin: 0 auto;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  margin-bottom: 50px;
`;

export const Form = () => {
  return (
    <FormWrapper>
      <NameCourse />
      <Trainers />
      <CategoryCourse />
      <DescriptionCourse />
      <DataListInput name="Poziom kursu" />
      <UploadFile />
      <Buttons />
    </FormWrapper>
  );
};
