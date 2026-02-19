import React from "react"
import { ThreePointsComponent } from "./styled.components"
import { BorderContainerRowsVerticalSides } from "../../../../components/BorderContainer/BorderContainerRowsVerticalSides"
import SliderComponent from "../../../home/components/AIWave/Slider"
import { RoundedInfoTile } from "../../../../styled.components"
import { tWithSpan } from "../../../../utils/translationHelpers"
import { BorderContainerTop } from "../../../../components/BorderContainer/BorderContainerTop"
import { BorderContainerThreePoints } from "../../../../components/BorderContainer/BorderContainerThreePoints"
import PhoneIcon from "../../../../images/three-points/phone.svg"
import MailIcon from "../../../../images/three-points/maill.svg"
import PeopleIcon from "../../../../images/three-points/people.svg"

const ThreePoints = ({ t }) => {
  const tilesData = [
    {
      id: 1,
      image: <PhoneIcon className="three-points-image" />,
      titleKey: "offer.three-points.tile-1.title",
      descriptionKey: "offer.three-points.tile-1.description",
      className: "three-points-tile"
    },
    {
      id: 2,
      image: <MailIcon className="three-points-image" />,
      titleKey: "offer.three-points.tile-2.title",
      descriptionKey: "offer.three-points.tile-2.description",
      className: "three-points-tile"
    },
    {
      id: 3,
      image: <PeopleIcon className="three-points-image" />,
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
