import React from "react"
import { WriteUsComponent } from "./styled.components"
import { RoundedButtonOrange } from "../../../../styled.components"
import { StaticImage } from "gatsby-plugin-image"
import { orderAnalysisButton } from "../../../../config/externalResources"

const WriteUsCTA = ({ t }) => {
  return (
    <>
      <WriteUsComponent>
        <div className="text-container">
          <h2>{t("offer.WriteUs.title")}</h2>
          <p className="p-new-model-18">{t("offer.WriteUs.description")}</p>
          <RoundedButtonOrange
            className="button"
            as="a"
            href={orderAnalysisButton}
            target="_blank"
            rel="noreferrer"
          >
            {t("offer.WriteUs.button")}
          </RoundedButtonOrange>
          <p className="p-new-model-16">
            {t("offer.WriteUs.contact")}
            <a className="link" href="mailto:k@receptionos.com">k@receptionos.com</a>
          </p>
        </div>
        <StaticImage
          className="image"
          src="../../../../images/writeuscta/cta-bg.webp"
          alt="ros-image"
          loading="lazy"
        />
        <StaticImage
          className="image-mobile"
          src="../../../../images/writeuscta/cta-bg-mobile.webp"
          alt="ros-image"
          loading="lazy"
        />
      </WriteUsComponent>
    </>
  )
}
export default WriteUsCTA
