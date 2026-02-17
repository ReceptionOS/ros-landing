import React from "react"
import { AIWaveContainer } from "./styled.components"
import { RoundedInfoTile } from "../../../../styled.components"
import { StaticImage } from "gatsby-plugin-image"
import { BorderContainerRowsVerticalSides } from "../../../../components/BorderContainer/BorderContainerRowsVerticalSides"
import "../../../../images/aiwave/middle-empty.webp"
import SliderComponent from "./Slider"

const AIWave = ({ t }) => {
  const tilesData = [
    {
      id: 1,
      image: (
        <StaticImage
          className="image"
          src="../../../../images/aiwave/1.svg"
          alt="image"
          placeholder="image"
          loading="lazy"
        />
      ),
      titleKey: "home.AIWave.tile-title-1",
      descriptionKey: "home.AIWave.tile-description-1",
      className: "ai-wave-tile"
    },
    {
      id: 2,
      image: (
        <StaticImage
          className="image"
          src="../../../../images/aiwave/2.svg"
          alt="image"
          placeholder="image"
          loading="lazy"
        />
      ),
      titleKey: "home.AIWave.tile-title-2",
      descriptionKey: "home.AIWave.tile-description-2",
      className: "ai-wave-tile no-left"
    },
    {
      id: 3,
      image: (
        <StaticImage
          className="image"
          src="../../../../images/aiwave/6.svg"
          alt="image"
          placeholder="image"
          loading="lazy"
        />
      ),
      titleKey: "home.AIWave.tile-title-3",
      descriptionKey: "home.AIWave.tile-description-3",
      className: "ai-wave-tile no-left"
    },
    {
      id: 4,
      image: (
        <StaticImage
          className="image"
          src="../../../../images/aiwave/6.svg"
          alt="image"
          placeholder="image"
          loading="lazy"
        />
      ),
      titleKey: "home.AIWave.tile-title-4",
      descriptionKey: "home.AIWave.tile-description-4",
      className: "ai-wave-tile"
    },
    {
      id: 5,
      image: (
        <StaticImage
          className="image"
          src="../../../../images/aiwave/5.svg"
          alt="image"
          placeholder="image"
          loading="lazy"
        />
      ),
      titleKey: "home.AIWave.tile-title-5",
      descriptionKey: "home.AIWave.tile-description-5",
      className: "ai-wave-tile no-left"
    },
    {
      id: 6,
      image: (
        <StaticImage
          className="image"
          src="../../../../images/aiwave/6.svg"
          alt="image"
          placeholder="image"
          loading="lazy"
        />
      ),
      titleKey: "home.AIWave.tile-title-6",
      descriptionKey: "home.AIWave.tile-description-6",
      className: "ai-wave-tile no-left"
    }
  ]

  return (
    <>
      <div className="container">
        <AIWaveContainer>
          <div className="text-container">
            <RoundedInfoTile>
              <p>{t("home.AIWave.ai-wave")}</p>
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
            {tilesData.map(tile => (
              <BorderContainerRowsVerticalSides
                key={tile.id}
                className={tile.className}
              >
                <div className="tile-content">
                  {tile.image}
                  <div className="text-tile">
                    <p className="p-new-model-18">{t(tile.titleKey)}</p>
                    <p className="p-new-model-16">{t(tile.descriptionKey)}</p>
                  </div>
                </div>
              </BorderContainerRowsVerticalSides>
            ))}
          </div>
          <div className="mobile">
            <SliderComponent t={t} items={tilesData} />
          </div>
        </AIWaveContainer>
      </div>
    </>
  )
}
export default AIWave
