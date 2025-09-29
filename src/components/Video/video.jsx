import React from 'react';
import { VideoComponent } from './styled.components';

const Video = ({ src, title }) => (
  <VideoComponent>
    <iframe
      title={title}
      src={src}
      allowFullScreen
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    />
  </VideoComponent>
);

export default Video;
