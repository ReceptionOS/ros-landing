import React from "react"
import {
  HowItWorksComponent,
  HowItWorksGridComponent,
  HowItWorksSliderComponent
} from "./styled.components"
import { BorderContainerNoRowsSides } from "../../../../components/BorderContainer/BorderContainerNoRowsSides"
import { RoundedInfoTile } from "../../../../styled.components"
import SliderComponent from "./Slider"

import Video1 from "../../../../assets/videos/how/output1.mp4"
import Video2 from "../../../../assets/videos/how/output2.mp4"
import Video3 from "../../../../assets/videos/how/output3.mp4"
import { BorderContainer4Rows } from "../../../../components/BorderContainer/BorderContainer4Rows"
import LocalVideo2 from "../../../../components/LocalVideo/LocalVideo2"
import { BorderContainer4Rows2Sides } from "../../../../components/BorderContainer/BorderContainer4Rows2Sides"
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
    <>
      <HowItWorksComponent>
        <div className="container">
          <BorderContainerNoRowsSides className="hiw-text">
            <div className="top-tile">
              <RoundedInfoTile>
                <p>{t("home.HowItWorks.how-it-works")}</p>
              </RoundedInfoTile>
              <h3>{t("home.HowItWorks.title")}</h3>
            </div>
          </BorderContainerNoRowsSides>
        </div>
      </HowItWorksComponent>
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
    </>
  )
}
export default HowItWorks
