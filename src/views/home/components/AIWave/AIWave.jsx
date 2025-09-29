import React from "react"
import { AIWaveContainer } from "./styled.components"
import { RoundedInfoTile } from "../../../../styled.components"
import { StaticImage } from "gatsby-plugin-image"
import { BorderContainerRowsVerticalSides } from "../../../../components/BorderContainer/BorderContainerRowsVerticalSides"
import '../../../../images/aiwave/middle-empty.webp'
import SliderComponent from "./Slider"
const AIWave = ({ t }) => {

  return (
    <>
      <div className="container">
        <AIWaveContainer>
          <div className="text-container">
            <RoundedInfoTile>
              <p>{t('home.AIWave.ai-wave')}</p>
            </RoundedInfoTile>
            <h2>{t(`home.AIWave.title`)}</h2>
            <p className="p-new-model-18 ">{t(`home.AIWave.description`)}</p>
          </div>
          <div className="tile-container desktop">
            <StaticImage
              className="empty left-empty"
              src="../../../../images/aiwave/middle-empty.webp"
              alt="middle-empty"
              placeholder="middle-empty"
              loading="lazy"
            />
            <StaticImage
              className="empty middle-empty"
              src="../../../../images/aiwave/middle-empty.webp"
              alt="middle-empty"
              placeholder="middle-empty"
              loading="lazy"
            />
            <StaticImage
              className="empty right-empty"
              src="../../../../images/aiwave/middle-empty.webp"
              alt="middle-empty"
              placeholder="middle-empty"
              loading="lazy"
            />
            <BorderContainerRowsVerticalSides className="ai-wave-tile">
              <div className="tile-content">
                <StaticImage
                  className="image"
                  src="../../../../images/aiwave/1.svg"
                  alt="image"
                  placeholder="image"
                  loading="lazy"
                />
                <div className="text-tile">
                  <p className="p-new-model-18">{t(`home.AIWave.tile-title-1`)}</p>
                  <p className="p-new-model-16">{t(`home.AIWave.tile-description-1`)}</p>
                </div>
              </div>
            </BorderContainerRowsVerticalSides>
            <BorderContainerRowsVerticalSides className="ai-wave-tile no-left">
              <div className="tile-content">
                <StaticImage
                  className="image"
                  src="../../../../images/aiwave/2.svg"
                  alt="image"
                  placeholder="image"
                  loading="lazy"
                />
                <div className="text-tile">
                  <p className="p-new-model-18">{t(`home.AIWave.tile-title-2`)}</p>
                  <p className="p-new-model-16">{t(`home.AIWave.tile-description-2`)}</p>
                </div>
              </div>
            </BorderContainerRowsVerticalSides>
            <BorderContainerRowsVerticalSides className="ai-wave-tile ai-wave-empty no-left" />
            <BorderContainerRowsVerticalSides className="ai-wave-tile ai-wave-empty" />
            <BorderContainerRowsVerticalSides className="ai-wave-tile no-left">
              <div className="tile-content">
                <StaticImage
                  className="image"
                  src="../../../../images/aiwave/3.svg"
                  alt="image"
                  placeholder="image"
                  loading="lazy"
                />
                <div className="text-tile">
                  <p className="p-new-model-18">{t(`home.AIWave.tile-title-3`)}</p>
                  <p className="p-new-model-16">{t(`home.AIWave.tile-description-3`)}</p>
                </div>
              </div>
            </BorderContainerRowsVerticalSides>
            <BorderContainerRowsVerticalSides className="ai-wave-tile no-left">
              <div className="tile-content">
                <StaticImage
                  className="image"
                  src="../../../../images/aiwave/4.svg"
                  alt="image"
                  placeholder="image"
                  loading="lazy"
                />
                <div className="text-tile">
                  <p className="p-new-model-18">{t(`home.AIWave.tile-title-4`)}</p>
                  <p className="p-new-model-16">{t(`home.AIWave.tile-description-4`)}</p>
                </div>
              </div>
            </BorderContainerRowsVerticalSides>
          </div>
          <div className="mobile">
            <SliderComponent t={t} />
          </div>
        </AIWaveContainer>
      </div>
    </>
  )
}
export default AIWave
