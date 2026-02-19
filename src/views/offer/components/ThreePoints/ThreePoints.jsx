import React from "react"
import { ThreePointsComponent } from "./styled.components"
import { BorderContainerRowsVerticalSides } from "../../../../components/BorderContainer/BorderContainerRowsVerticalSides"
import SliderComponent from "../../../home/components/AIWave/Slider"
import { RoundedInfoTile } from "../../../../styled.components"
import { tWithSpan } from "../../../../utils/translationHelpers"
import { BorderContainerTop } from "../../../../components/BorderContainer/BorderContainerTop"
import { BorderContainerThreePoints } from "../../../../components/BorderContainer/BorderContainerThreePoints"

const ThreePoints = ({ t }) => {
  const tilesData = [
    {
      id: 1,
      image: (
        <svg
          className="three-points-image"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.4535 8.86961C17.6466 10.596 17.2344 12.6327 16.2873 14.0889C15.3403 15.5452 13.917 16.6276 12.2607 17.1512C10.6044 17.6748 8.81761 17.6072 7.20556 16.96C5.5935 16.3127 4.25612 15.1259 3.42176 13.6023C2.5874 12.0787 2.30781 10.3126 2.63074 8.60577C2.95367 6.89891 3.85909 5.35708 5.19239 4.24354C6.52569 3.13001 8.20419 2.51383 9.94128 2.50023C11.6784 2.48663 13.3663 3.07644 14.7169 4.16895L12.5044 6.16228C11.7114 5.64499 10.7777 5.38596 9.83159 5.42078C8.88546 5.45561 7.97333 5.78258 7.22054 6.35676C6.46775 6.93094 5.91125 7.72416 5.62751 8.62742C5.34377 9.53067 5.34671 10.4996 5.63593 11.4011C5.92515 12.3027 6.48646 13.0925 7.24272 13.6621C7.99898 14.2317 8.91308 14.5531 9.8594 14.5822C10.8057 14.6113 11.7378 14.3466 12.5276 13.8245C13.3174 13.3024 13.9262 12.5485 14.2702 11.6665H10.8327V8.86961H17.4535Z"
            stroke="#E76220"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      titleKey: "offer.three-points.tile-1.title",
      descriptionKey: "offer.three-points.tile-1.description",
      className: "three-points-tile"
    },
    {
      id: 2,
      image: (
        <svg
          className="three-points-image"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.99992 17.9998C5.58169 17.9998 2 14.4182 2 9.99992C2 5.58169 5.58169 2 9.99992 2C14.4182 2 17.9998 5.58169 17.9998 9.99992C17.9998 10.2699 17.9865 10.5368 17.9603 10.7999M9.99992 5.59996V9.99992L12.3999 12.3999M12.3999 16.1091L13.9366 17.8454C14.1188 18.0513 14.4143 18.0513 14.5965 17.8454L17.9998 13.9999"
            stroke="#E76220"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      titleKey: "offer.three-points.tile-2.title",
      descriptionKey: "offer.three-points.tile-2.description",
      className: "three-points-tile"
    },
    {
      id: 3,
      image: (
        <svg
          className="three-points-image"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.6667 11.2037V13.5C16.6667 14.9001 16.6667 15.6002 16.3942 16.135C16.1545 16.6054 15.772 16.9878 15.3016 17.2275C14.7669 17.5 14.0668 17.5 12.6667 17.5H6.5C5.09987 17.5 4.3998 17.5 3.86502 17.2275C3.39462 16.9878 3.01217 16.6054 2.77248 16.135C2.5 15.6002 2.5 14.9001 2.5 13.5V7.33332C2.5 5.93319 2.5 5.23312 2.77248 4.69834C3.01217 4.22794 3.39462 3.84549 3.86502 3.6058C4.3998 3.33332 5.09987 3.33332 6.5 3.33332H8.7963M17.5756 2.49756L13.0874 2.49756M17.5756 2.49756L17.5751 7.05427M17.5756 2.49756L10.4904 9.58332"
            stroke="#E76220"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      titleKey: "offer.three-points.tile-3.title",
      descriptionKey: "offer.three-points.tile-3.description",
      className: "three-points-tile"
    }
  ]

  return (
    <ThreePointsComponent>
      <div className="three-points-wrapper">
        <h2>{t("offer.three-points.headline")}</h2>
        <BorderContainerTop />
        <div className="three-points-tile-container desktop">
          {tilesData.map(tile => (
            <BorderContainerRowsVerticalSides
              key={tile.id}
              className={tile.className}
            >
              <div className="three-points-tile-content">
                {tile.image}
                <div className="three-points-text-tile">
                  <p className="p-new-model-18">{t(tile.titleKey)}</p>
                  <p className="p-new-model-16">{t(tile.descriptionKey)}</p>
                </div>
              </div>
            </BorderContainerRowsVerticalSides>
          ))}
        </div>
        <div className="three-points-mobile">
          <SliderComponent t={t} items={tilesData} />
        </div>
        <BorderContainerThreePoints>
          <div className="three-points-container">
            <RoundedInfoTile>
              <p>{t("offer.three-points.pill")}</p>
            </RoundedInfoTile>
            <h2 className="three-points-title">
              {tWithSpan(t, "offer.three-points.title", "highlight", true)}
            </h2>
            <p className="p-new-model-16">
              {tWithSpan(t, "offer.three-points.description")}
            </p>
          </div>
        </BorderContainerThreePoints>
      </div>
    </ThreePointsComponent>
  )
}
export default ThreePoints
