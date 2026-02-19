import React from "react"
import { FeaturedSectionComponent } from "./styled.components"
import { RoundedInfoTile } from "../../../../styled.components"
import { StaticImage } from "gatsby-plugin-image"
import FeaturedDesktop from "./FeaturedDesktop"
import FeaturedMobile from "./FeaturedMobile"

const FeaturedSection = ({ t }) => {
  const consItems = [
    t("offer.featured.cons.item-1"),
    t("offer.featured.cons.item-2"),
    t("offer.featured.cons.item-3")
  ]
  const prosItems = [
    t("offer.featured.pros.item-1"),
    t("offer.featured.pros.item-2"),
    t("offer.featured.pros.item-3")
  ]

  return (
    <FeaturedSectionComponent>
      <StaticImage
        className="image"
        src="../../../../images/featured/featured-image.webp"
        alt="ros-image"
        loading="lazy"
      />
      <StaticImage
        className="featured-image-mobile"
        src="../../../../images/featured/featured-image-mobile.webp"
        alt="ros-image"
        loading="lazy"
      />
      <div className="featured-wrapper">
        <div className="featured-container">
          <RoundedInfoTile>
            <p>{t("offer.featured.pill")}</p>
          </RoundedInfoTile>
          <h2 className="featured-title">{t("offer.featured.title")}</h2>
          <p className="p-new-model-16">{t("offer.featured.description")}</p>
        </div>
        <FeaturedDesktop t={t} consItems={consItems} prosItems={prosItems} />
        <FeaturedMobile t={t} consItems={consItems} prosItems={prosItems} />
      </div>
    </FeaturedSectionComponent>
  )
}
export default FeaturedSection
