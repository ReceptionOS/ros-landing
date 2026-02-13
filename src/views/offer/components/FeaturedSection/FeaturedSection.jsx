import React from "react"
import { FeaturedSectionComponent } from "./styled.components"
import { RoundedInfoTile } from "../../../../styled.components"
import { StaticImage } from "gatsby-plugin-image"

const FeaturedSection = ({ t }) => {
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
      <div className="featured-container">
        <RoundedInfoTile>
          <p>{t("offer.featured.pill")}</p>
        </RoundedInfoTile>
        <h2 className="featured-title">{t("offer.featured.title")}</h2>
        <p className="p-new-model-16">{t("offer.featured.description")}</p>
      </div>
    </FeaturedSectionComponent>
  )
}
export default FeaturedSection
