import React from "react"
import { AboutUsComponent } from "./styled.components"
import { RoundedInfoTile } from "../../../../styled.components"
import { Trans } from "react-i18next"
import { StaticImage } from "gatsby-plugin-image"

const AboutUs = ({ t }) => {

  return (
    <>
      <AboutUsComponent>
        <div className="container">
          <div className="about-us-top">
            <RoundedInfoTile>
              <p>{t('home.AboutUs.about-us')}</p>
            </RoundedInfoTile>
            <h3>{t('home.AboutUs.title')}</h3>
            <p className="p-new-model-16">
              <Trans
                i18nKey="home.AboutUs.description"
                components={{
                  span: <span></span>
                }}
              />
            </p>
          </div>
          <StaticImage
            className="about-us-image desktop"
            src="../../../../images/aboutus/about-us-background.webp"
            alt="about-us-image"
            placeholder="about-us-image"
            loading="lazy"
          />
          <StaticImage
            className="about-us-image mobile"
            src="../../../../images/aboutus/about-us-background_mobile.webp"
            alt="about-us-image"
            placeholder="about-us-image"
            loading="lazy"
          />
        </div>
      </AboutUsComponent>
    </>
  )
}
export default AboutUs
