import React from 'react';
import { UploadFileWrapper, DragFile, UploadInfo } from './UploadFile.styles';
import { ReactComponent as DragFileIcon } from '../../../assets/image/icon/add-file.svg';
import { ReactComponent as InfoIcon } from '../../../assets/image/icon/info.svg';

export const UploadFile = () => {
  return (
    <UploadFileWrapper>
      <DragFile>
        <DragFileIcon />
        <p>
          Przeciągnij obrazek lub <span>kliknij, aby dodać</span>.
        </p>
      </DragFile>
      <UploadInfo>
        <InfoIcon />
        <p>Rekomendowany wymiar obrazka to 1200x600 px. Dozwolony format obrazu to jpg i png.Obrazek nie może przekraczać 20MB.</p>
      </UploadInfo>
    </UploadFileWrapper>
  );
};
