import React from "react"
import { WhyUsComponent } from "./styled.components"
import { RoundedInfoTile } from "../../../../styled.components"
import { StaticImage } from "gatsby-plugin-image"
import { BorderContainerRowsVerticalSides } from "../../../../components/BorderContainer/BorderContainerRowsVerticalSides"
import SliderComponent from "../../../home/components/AIWave/Slider"
import { BorderContainerTopBottomStriped } from "../../../../components/BorderContainer/BorderContainerTopBottomStriped"
import { BorderContainerTop } from "../../../../components/BorderContainer/BorderContainerTop"
import { BorderContainer4Rows } from "../../../../components/BorderContainer/BorderContainer4Rows"
import { Divider } from "../../../../components/BorderContainer/Divider"
import { BorderContainerBottom } from "../../../../components/BorderContainer/BorderContainerBottom"
import { BorderContainer4RowsLeft } from "../../../../components/BorderContainer/BorderContainer4RowsLeft"
import { BorderContainer4RowsRight } from "../../../../components/BorderContainer/BorderContainer4RowsRight"
import { BorderContainer4RowsCornersOnly } from "../../../../components/BorderContainer/BorderContainer4RowsCornersOnly"

const WhyUs = ({ t }) => {
  const consItems = [
    t("offer.why-us.cons.item-1"),
    t("offer.why-us.cons.item-2"),
    t("offer.why-us.cons.item-3"),
  ]
  const prosItems = [
    t("offer.why-us.pros.item-1"),
    t("offer.why-us.pros.item-2"),
    t("offer.why-us.pros.item-3"),
  ]
  const tilesData = [
    {
      id: 1,
      image: (
        <svg
          className="why-us-image"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.4535 8.86961C17.6466 10.596 17.2344 12.6327 16.2873 14.0889C15.3403 15.5452 13.917 16.6276 12.2607 17.1512C10.6044 17.6748 8.81761 17.6072 7.20556 16.96C5.5935 16.3127 4.25612 15.1259 3.42176 13.6023C2.5874 12.0787 2.30781 10.3126 2.63074 8.60577C2.95367 6.89891 3.85909 5.35708 5.19239 4.24354C6.52569 3.13001 8.20419 2.51383 9.94128 2.50023C11.6784 2.48663 13.3663 3.07644 14.7169 4.16895L12.5044 6.16228C11.7114 5.64499 10.7777 5.38596 9.83159 5.42078C8.88546 5.45561 7.97333 5.78258 7.22054 6.35676C6.46775 6.93094 5.91125 7.72416 5.62751 8.62742C5.34377 9.53067 5.34671 10.4996 5.63593 11.4011C5.92515 12.3027 6.48646 13.0925 7.24272 13.6621C7.99898 14.2317 8.91308 14.5531 9.8594 14.5822C10.8057 14.6113 11.7378 14.3466 12.5276 13.8245C13.3174 13.3024 13.9262 12.5485 14.2702 11.6665H10.8327V8.86961H17.4535Z"
            stroke="#E76220"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      titleKey: "offer.why-us.tile-1.title",
      descriptionKey: "offer.why-us.tile-1.description",
      className: "why-us-tile",
    },
    {
      id: 2,
      image: (
        <svg
          className="why-us-image"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.99992 17.9998C5.58169 17.9998 2 14.4182 2 9.99992C2 5.58169 5.58169 2 9.99992 2C14.4182 2 17.9998 5.58169 17.9998 9.99992C17.9998 10.2699 17.9865 10.5368 17.9603 10.7999M9.99992 5.59996V9.99992L12.3999 12.3999M12.3999 16.1091L13.9366 17.8454C14.1188 18.0513 14.4143 18.0513 14.5965 17.8454L17.9998 13.9999"
            stroke="#E76220"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      titleKey: "offer.why-us.tile-2.title",
      descriptionKey: "offer.why-us.tile-2.description",
      className: "why-us-tile",
    },
    {
      id: 3,
      image: (
        <svg
          className="why-us-image"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.6667 11.2037V13.5C16.6667 14.9001 16.6667 15.6002 16.3942 16.135C16.1545 16.6054 15.772 16.9878 15.3016 17.2275C14.7669 17.5 14.0668 17.5 12.6667 17.5H6.5C5.09987 17.5 4.3998 17.5 3.86502 17.2275C3.39462 16.9878 3.01217 16.6054 2.77248 16.135C2.5 15.6002 2.5 14.9001 2.5 13.5V7.33332C2.5 5.93319 2.5 5.23312 2.77248 4.69834C3.01217 4.22794 3.39462 3.84549 3.86502 3.6058C4.3998 3.33332 5.09987 3.33332 6.5 3.33332H8.7963M17.5756 2.49756L13.0874 2.49756M17.5756 2.49756L17.5751 7.05427M17.5756 2.49756L10.4904 9.58332"
            stroke="#E76220"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      titleKey: "offer.why-us.tile-3.title",
      descriptionKey: "offer.why-us.tile-3.description",
      className: "why-us-tile",
    },
  ]

  return (
    <WhyUsComponent>
      <div className="why-us-wrapper">
        <div className="why-us-container">
          <RoundedInfoTile>
            <p>{t("offer.why-us.pill")}</p>
          </RoundedInfoTile>
          <h2 className="why-us-title">{t("offer.why-us.title")}</h2>
          <p className="p-new-model-16">{t("offer.why-us.description")}</p>
        </div>
        <div className="why-us-pros-cons-desktop">
          <BorderContainerTopBottomStriped>
            <div className="why-us-pros-cons-wrapper">
              <div className="why-us-lines-container cons">
                <p className="title">{t("offer.why-us.cons.title")}</p>
                <div className="items">
                  {consItems?.map((item, index) => (
                    <p className="item-cons" key={`cons-${index}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_1163_10168)">
                          <path
                            d="M7.125 7.125L9 9M9 9L10.875 10.875M9 9L10.875 7.125M9 9L7.125 10.875M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z"
                            stroke="#A3948B"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1163_10168">
                            <rect width="18" height="18" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
              <div className="why-us-lines-container pros">
                <p className="title">{t("offer.why-us.pros.title")}</p>
                <div className="items">
                  {prosItems?.map((item, index) => (
                    <p className="item-pros" key={`pros-${index}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_1163_10149)">
                          <path
                            d="M5.93042 9L7.97681 11.3412L12.0696 6.65877M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z"
                            stroke="#E76220"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1163_10149">
                            <rect width="18" height="18" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </BorderContainerTopBottomStriped>
        </div>
        <div className="borders-mobile">
          <BorderContainerTop className="border-top" />
          <div className="pros-cons-wrapper">
            <BorderContainer4Rows className="rows">
              <div className="why-us-lines-container cons">
                <p className="title">{t("offer.why-us.cons.title")}</p>
                <div className="items">
                  {consItems?.map((item, index) => (
                    <p className="item-cons" key={`cons-${index}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_1163_10168)">
                          <path
                            d="M7.125 7.125L9 9M9 9L10.875 10.875M9 9L10.875 7.125M9 9L7.125 10.875M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z"
                            stroke="#A3948B"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1163_10168">
                            <rect width="18" height="18" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </BorderContainer4Rows>
            <BorderContainer4Rows className="rows">
              <div className="why-us-lines-container pros">
                <p className="title">{t("offer.why-us.pros.title")}</p>
                <div className="items">
                  {prosItems?.map((item, index) => (
                    <p className="item-pros" key={`pros-${index}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_1163_10149)">
                          <path
                            d="M5.93042 9L7.97681 11.3412L12.0696 6.65877M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z"
                            stroke="#E76220"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1163_10149">
                            <rect width="18" height="18" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </BorderContainer4Rows>
          </div>
        </div>
        <h3 className="why-us-subtitle">{t("offer.why-us.subtitle")}</h3>
        <div className="why-us-tile-container desktop">
          {tilesData.map(tile => (
            <BorderContainerRowsVerticalSides
              key={tile.id}
              className={tile.className}
            >
              <div className="why-us-tile-content">
                {tile.image}
                <div className="why-us-text-tile">
                  <p className="p-new-model-18">{t(tile.titleKey)}</p>
                  <p className="p-new-model-16">{t(tile.descriptionKey)}</p>
                </div>
              </div>
            </BorderContainerRowsVerticalSides>
          ))}
        </div>
        <div className="why-us-mobile">
          <SliderComponent t={t} items={tilesData} />
        </div>
        <Divider className="divider" />
        <div className="why-us-bottom">
          <div className="why-us-bottom-desktop">
            <BorderContainer4RowsLeft className="why-us-bottom-left">
              <div className="main-headline">
                <h3>Wasza pozycja na rynku:</h3>
                <p className="">Pacjenci płacą premium i oczekują premium.</p>
              </div>
              <p className="subcontent p-new-model-16">
                Chaos, nieodebrane telefony i brak opieki psują ten obraz.
                ReceptionOS pomoże dostarczyć doświadczenia na poziomie Waszych
                cen.
              </p>
            </BorderContainer4RowsLeft>
            <div className="why-us-bottom-right">
              <BorderContainer4RowsRight className="bg-content">
                <BorderContainer4RowsCornersOnly className="top">
                  <p>TOP 8%</p>
                </BorderContainer4RowsCornersOnly>
                <p className="clinics">klinik w regionie</p>
                <p className="rating">
                  Ocena została obliczona na podstawie cen zabiegów w clinic -
                  city i okolicach
                </p>
              </BorderContainer4RowsRight>
            </div>
          </div>
          <div className="why-us-bottom-mobile">
            <BorderContainer4Rows className="why-us-bottom-left">
              <div className="main-headline">
                <h3>Wasza pozycja na rynku:</h3>
                <p className="">Pacjenci płacą premium i oczekują premium.</p>
              </div>
              <p className="subcontent p-new-model-16">
                Chaos, nieodebrane telefony i brak opieki psują ten obraz.
                ReceptionOS pomoże dostarczyć doświadczenia na poziomie Waszych
                cen.
              </p>
            </BorderContainer4Rows>
            <div className="why-us-bottom-right">
              <BorderContainer4Rows className="bg-content">
                <BorderContainer4RowsCornersOnly className="top">
                  <p>TOP 8%</p>
                </BorderContainer4RowsCornersOnly>
                <p className="clinics">klinik w regionie</p>
                <p className="rating">
                  Ocena została obliczona na podstawie cen zabiegów w clinic -
                  city i okolicach
                </p>
              </BorderContainer4Rows>
            </div>
          </div>
        </div>
        <BorderContainerBottom className="divider" />
      </div>
    </WhyUsComponent>
  )
}
export default WhyUs
