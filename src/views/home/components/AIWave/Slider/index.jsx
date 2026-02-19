import React from "react"
import Slider from "react-slick"
import { SliderContainer } from "./styled.components"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { StaticImage } from "gatsby-plugin-image"
import { BorderContainerRowsVerticalSides } from "../../../../../components/BorderContainer/BorderContainerRowsVerticalSides"

const SliderComponent = ({ t, items }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    className: "center",
    centerMode: true,
    centerPadding: "55px",
    variableWidth: true,
  }

  const renderItems = items?.map(item => {
    const titleKey = item?.titleKey || `home.AIWave.tile-title-${item.id}`
    const descriptionKey =
      item?.descriptionKey || `home.AIWave.tile-description-${item.id}`
    return (
      <BorderContainerRowsVerticalSides
        key={item.id}
        style={{ width: 301 }}
        className="ai-wave-tile"
      >
        <div className="tile-content">
          {item.image}
          <div className="text-tile">
            <p className="p-new-model-18">{t(titleKey)}</p>
            <p className="p-new-model-16">{t(descriptionKey)}</p>
          </div>
        </div>
      </BorderContainerRowsVerticalSides>
    )
  })

  return (
    <section>
      <SliderContainer>
        <Slider {...settings}>{renderItems}</Slider>
      </SliderContainer>
    </section>
  )
}

export default SliderComponent
