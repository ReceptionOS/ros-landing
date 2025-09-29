import React from "react"
import { AutopilotComponent } from "./styled.components"
import { Trans } from 'react-i18next';
import '../../../../images/autopilot/phone_circle.webp'
import BlobAnimation from '../../../../assets/videos/how/Blob_Animation.mp4';
import { RoundedButtonOrange } from "../../../../styled.components";

const Autopilot = ({ t, handleClick }) => {

  return (
    <>
      <AutopilotComponent>
        <video
          className="bg-video"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src={BlobAnimation} type="video/mp4" />
        </video>
        <div className="container">
          <div className="text-container">
            <h1>
              <Trans
                i18nKey="home.Autopilot.title"
                components={{
                  span: <span></span>
                }}
              />
            </h1>
            <p className="p-new-model-18">{t(`home.Autopilot.description`)}</p>
          </div>
          <RoundedButtonOrange onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7 6.99982L7 16.9998M2 10.9998L2 12.9998M12 2.99982L12 20.9998M17 6.99981L17 16.9998M22 10.9998L22 12.9998" stroke="#FFE8D9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>{t(`home.Autopilot.button`)}</span>
          </RoundedButtonOrange>
          <div className="data-info">
            <p className="p-new-model-15">{t(`home.Autopilot.data`)}</p>
          </div>
        </div>
      </AutopilotComponent>
    </>
  )
}
export default Autopilot
