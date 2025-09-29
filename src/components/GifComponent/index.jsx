import React from 'react';
import { GifSection } from './styled.components';

const GifComponent = ({ src, className }) => (
  <GifSection className={className}>
    <video loop muted autoPlay playsInline>
      <source src={src} type="video/mp4" />
    </video>
  </GifSection>
);

export default GifComponent;
