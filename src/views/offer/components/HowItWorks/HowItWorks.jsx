import React from "react"
import { HowItWorksComponent } from "./styled.components"
import { RoundedInfoTile } from "../../../../styled.components"
import { tWithSpan } from "../../../../utils/translationHelpers"

const HowItWorks = ({ t }) => {
  return (
    <HowItWorksComponent>
      <div className="how-it-works-wrapper">
        <RoundedInfoTile>
          <p>{t("offer.how-it-works.pill")}</p>
        </RoundedInfoTile>
        <h2 className="how-it-works-title">{t("offer.how-it-works.title")}</h2>
        <p className="how-it-works-description">
          {tWithSpan(t, "offer.how-it-works.description")}
        </p>
      </div>
    </HowItWorksComponent>
  )
}

export default HowItWorks
