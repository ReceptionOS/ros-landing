import React from "react"
import { HeroComponent } from "./styled.components"
import { StaticImage } from "gatsby-plugin-image"
import { RoundedButtonOrange } from "../../../../styled.components"
import { orderAnalysisButton } from "../../../../config/externalResources"

const Hero = ({ t }) => {
  return (
    <HeroComponent>
      <div className="hero">
        <div className="hero-image-container">
          <StaticImage
            className="hero-img"
            src="../../../../images/offer-hero/offer-hero-img.png"
            alt="hero-img"
            loading="eager"
          />
          <StaticImage
            className="hero-img-mobile"
            src="../../../../images/offer-hero/offer-hero-img_mobile.png"
            alt="hero-img"
            loading="eager"
          />
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">{t("offer.Hero.title")}</h1>
            <div className="hero-description">
              <p>{t("offer.Hero.description")}</p>
              <p>{t("offer.Hero.special")} </p>
            </div>
            <RoundedButtonOrange
              as="a"
              href={orderAnalysisButton}
              target="_blank"
              rel="noreferrer"
            >
              {t(`offer.Hero.order-button`)}
            </RoundedButtonOrange>
          </div>
        </div>
      </div>
    </HeroComponent>
  )
}
export default Hero
