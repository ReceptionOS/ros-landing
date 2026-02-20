import React from "react"
import { MenuComponent } from "./styled.components"
import "../../images/menu/ros-image.webp"
import { StaticImage } from "gatsby-plugin-image"
import { RoundedButtonOrange } from "../../styled.components"
const Menu = ({ t, openTypeform }) => {

  return (
    <>
      <MenuComponent>
        <div className="navigation-component">
          <StaticImage
            className="ros-image"
            src="../../images/menu/ros-image.webp"
            alt="ros-image"
            placeholder="ros-image"
            loading="lazy"
          />
          <div className="buttons">
            <RoundedButtonOrange onClick={openTypeform} className="order-button">{t(`home.Menu.order-button`)}</RoundedButtonOrange>
          </div>
        </div>
      </MenuComponent>
    </>
  )
}
export default Menu
