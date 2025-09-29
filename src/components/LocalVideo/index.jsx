import React from 'react';
import { LocalVideoSection } from './styled.components';

const LocalVideo = ({ src, className }) => (
  <LocalVideoSection className={className}>
    <video muted playsInline>
      <source src={src} type="video/webm" />
    </video>
  </LocalVideoSection>
);

export default LocalVideo;
