import React from "react"
import { WhyUsComponent } from "./styled.components"
import { RoundedInfoTile } from "../../../../styled.components"
import { StaticImage } from "gatsby-plugin-image"
import { BorderContainerRowsVerticalSides } from "../../../../components/BorderContainer/BorderContainerRowsVerticalSides"
import SliderComponent from "../../../home/components/AIWave/Slider"
import { BorderContainerTopBottomStriped } from "../../../../components/BorderContainer/BorderContainerTopBottomStriped"

const WhyUs = ({ t }) => {
  const consItems = [
    t("offer.why-us.cons.item-1"),
    t("offer.why-us.cons.item-2"),
    t("offer.why-us.cons.item-3"),
  ]
  const prosItems = [
    t("offer.why-us.pros.item-1"),
    t("offer.why-us.pros.item-2"),
    t("offer.why-us.pros.item-3"),
  ]
  const tilesData = [
    {
      id: 1,
      image: (
        <StaticImage
          className="why-us-image"
          src="../../../../images/aiwave/1.svg"
          alt="image"
          placeholder="image"
          loading="lazy"
        />
      ),
      titleKey: "offer.why-us.tile-1.title",
      descriptionKey: "offer.why-us.tile-1.description",
      className: "why-us-tile",
    },
    {
      id: 2,
      image: (
        <StaticImage
          className="why-us-image"
          src="../../../../images/aiwave/2.svg"
          alt="image"
          placeholder="image"
          loading="lazy"
        />
      ),
      titleKey: "offer.why-us.tile-2.title",
      descriptionKey: "offer.why-us.tile-2.description",
      className: "why-us-tile",
    },
    {
      id: 3,
      image: (
        <StaticImage
          className="why-us-image"
          src="../../../../images/aiwave/6.svg"
          alt="image"
          placeholder="image"
          loading="lazy"
        />
      ),
      titleKey: "offer.why-us.tile-3.title",
      descriptionKey: "offer.why-us.tile-3.description",
      className: "why-us-tile",
    },
  ]

  return (
    <WhyUsComponent>
      <div className="why-us-wrapper">
        <div className="why-us-container">
          <RoundedInfoTile>
            <p>{t("offer.why-us.pill")}</p>
          </RoundedInfoTile>
          <h2 className="why-us-title">{t("offer.why-us.title")}</h2>
          <p className="p-new-model-16">{t("offer.why-us.description")}</p>
        </div>
        <BorderContainerTopBottomStriped>
          <div className="why-us-pros-cons-wrapper">
            <div className="why-us-lines-container cons">
              <p className="title">{t("offer.why-us.cons.title")}</p>
              <div className="items">
                {consItems?.map((item, index) => (
                  <p className="item-cons" key={`cons-${index}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_1163_10168)">
                        <path
                          d="M7.125 7.125L9 9M9 9L10.875 10.875M9 9L10.875 7.125M9 9L7.125 10.875M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z"
                          stroke="#A3948B"
                          strokeWidth="1.33333"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1163_10168">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="why-us-lines-container pros">
              <p className="title">{t("offer.why-us.pros.title")}</p>
              <div className="items">
                {prosItems?.map((item, index) => (
                  <p className="item-pros" key={`pros-${index}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_1163_10149)">
                        <path
                          d="M5.93042 9L7.97681 11.3412L12.0696 6.65877M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z"
                          stroke="#E76220"
                          strokeWidth="1.33333"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1163_10149">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </BorderContainerTopBottomStriped>
        <h3 className="why-us-subtitle">{t("offer.why-us.subtitle")}</h3>
        <div className="why-us-tile-container desktop">
          {tilesData.map(tile => (
            <BorderContainerRowsVerticalSides
              key={tile.id}
              className={tile.className}
            >
              <div className="why-us-tile-content">
                {tile.image}
                <div className="why-us-text-tile">
                  <p className="p-new-model-18">{t(tile.titleKey)}</p>
                  <p className="p-new-model-16">{t(tile.descriptionKey)}</p>
                </div>
              </div>
            </BorderContainerRowsVerticalSides>
          ))}
        </div>
        <div className="why-us-mobile">
          <SliderComponent t={t} items={tilesData} />
        </div>
      </div>
    </WhyUsComponent>
  )
}
export default WhyUs
