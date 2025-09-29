import React from "react"
import { WriteUsComponent } from "./styled.components"
import { RoundedButtonOrange } from "../../../../styled.components"
import { StaticImage } from "gatsby-plugin-image"
import { orderAnalysisButton } from "../../../../config/externalResources"

const WriteUs = ({ t }) => {

  return (
    <>
      {/* <div className="container"> */}
      <WriteUsComponent>
        <div className="text-container">
          <h2>{t('home.WriteUs.title')}</h2>
          <p className="p-new-model-16">{t('home.WriteUs.description')}</p>
          <StaticImage
            className="ros-image mobile"
            src="../../../../images/writeus/writeus-background_mobile.webp"
            alt="ros-image"
            placeholder="ros-image"
            loading="lazy"
          />
          <RoundedButtonOrange as="a" href={orderAnalysisButton} target="_blank" rel="noreferrer">{t('home.WriteUs.button')}</RoundedButtonOrange>
        </div>
      </WriteUsComponent>
      {/* </div> */}
    </>
  )
}
export default WriteUs
