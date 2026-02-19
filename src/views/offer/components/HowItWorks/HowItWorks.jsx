import React from "react"
import { HowItWorksComponent } from "./styled.components"
import { RoundedInfoTile } from "../../../../styled.components"
import { tWithSpan } from "../../../../utils/translationHelpers"
import OurPartners from "../../../home/components/OurPartners/OurPartners"
import {
  HowItWorksGridComponent,
  HowItWorksSliderComponent
} from "../../../home/components/HowItWorks/styled.components"
import SliderComponent from "../../../home/components/HowItWorks/Slider"
import { BorderContainer4Rows } from "../../../../components/BorderContainer/BorderContainer4Rows"
import LocalVideo2 from "../../../../components/LocalVideo/LocalVideo2"
import { BorderContainer4Rows2Sides } from "../../../../components/BorderContainer/BorderContainer4Rows2Sides"

import Video1 from "../../../../assets/videos/how/output1.mp4"
import Video2 from "../../../../assets/videos/how/output2.mp4"
import Video3 from "../../../../assets/videos/how/output3.mp4"

const HowItWorks = ({ t }) => {
  const items = [
    {
      title: t("home.HowItWorks.video1-title"),
      description: t("home.HowItWorks.video1-description"),
      link: Video1
    },
    {
      title: t("home.HowItWorks.video2-title"),
      description: t("home.HowItWorks.video2-description"),
      link: Video2
    },
    {
      title: t("home.HowItWorks.video3-title"),
      description: t("home.HowItWorks.video3-description"),
      link: Video3
    }
  ]

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
      <div className="how-it-works-content">
        <div className="how-it-works-experience">
          <h3 className="how-it-works-subtitle">
            {t("offer.how-it-works.experience.title")}
          </h3>
          <p className="p-new-model-16">
            {t("offer.how-it-works.experience.description")}
          </p>
        </div>
        <div className="how-it-works-clinic">
          <p className="how-it-works-clinic-label">
            {t("offer.how-it-works.clinic.label")}
          </p>
          <p className="how-it-works-clinic-title">
            {t("offer.how-it-works.clinic.title")}
          </p>
          <div className="how-it-works-clinic-author">
            <div className="how-it-works-clinic-image">image</div>
            <div className="how-it-works-clinic-info">
              <p className="how-it-works-clinic-name">
                {t("offer.how-it-works.clinic.author.name")}
              </p>
              <p className="how-it-works-clinic-university">
                {t("offer.how-it-works.clinic.author.university")}
              </p>
            </div>
          </div>
          <div className="how-it-works-clinic-button">button arrow</div>
        </div>
        <OurPartners box />
        <div className="faq-title-container">
          <RoundedInfoTile>
            <p>{t("offer.how-it-works.faq.pill")}</p>
          </RoundedInfoTile>

          <h2 className="faq-title">{t("offer.how-it-works.faq.title")}</h2>

          <HowItWorksSliderComponent className="desktop">
            <div className="container">
              {items && <SliderComponent items={items} />}
            </div>
          </HowItWorksSliderComponent>

          <HowItWorksGridComponent className="mobile">
            <div className="container">
              {items.map((item, index) => (
                <div className="video-container" key={index}>
                  <BorderContainer4Rows className={`row${index}`}>
                    <LocalVideo2 src={item.link} />
                  </BorderContainer4Rows>
                  <BorderContainer4Rows2Sides className="text-container">
                    <h4>{item.title}</h4>
                    <p className="p-new-model-16">{item.description}</p>
                  </BorderContainer4Rows2Sides>
                </div>
              ))}
            </div>
          </HowItWorksGridComponent>
        </div>
        <div className="">
          <h2>{t("offer.how-it-works.learning.title")}</h2>
          <p>{t("offer.how-it-works.learning.description")}</p>
        </div>
        <div className="">
          <div className="">
            <p>{t("offer.how-it-works.step-1.title")}</p>
            <div className="">
              <p>{t("offer.how-it-works.step-1.heading")}</p>
              <p>{t("offer.how-it-works.step-1.description")}</p>
            </div>
          </div>
          <div className="">
            <p>{t("offer.how-it-works.step-2.title")}</p>
            <div className="">
              <p>{t("offer.how-it-works.step-2.heading")}</p>
              <p>{t("offer.how-it-works.step-2.description")}</p>
            </div>
          </div>
          <div className="">
            <p>{t("offer.how-it-works.step-3.title")}</p>
            <div className="">
              <p>{t("offer.how-it-works.step-3.heading")}</p>
              <p>{t("offer.how-it-works.step-3.description")}</p>
            </div>
          </div>
          <div className="">
            <p>{t("offer.how-it-works.step-4.title")}</p>
            <div className="">
              <p>{t("offer.how-it-works.step-4.heading")}</p>
              <p>{t("offer.how-it-works.step-4.description")}</p>
            </div>
          </div>
        </div>
        <div className="">
          <p>{t("offer.how-it-works.cta.title")}</p>
          <p>{t("offer.how-it-works.cta.description")}</p>
        </div>
        <div className="">
          <p>{t("offer.how-it-works.cta.button")}</p>
        </div>
      </div>
    </HowItWorksComponent>
  )
}

export default HowItWorks
