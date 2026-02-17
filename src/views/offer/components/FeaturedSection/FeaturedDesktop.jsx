import React from "react"
import { BorderContainerFeatures } from "../../../../components/BorderContainer/BorderContainerFeatures"
import { BorderContainerSidesTopBottomSmaller } from "../../../../components/BorderContainer/BorderContainerSidesTopBottomSmaller"

const FeaturedDesktop = ({ t, consItems, prosItems }) => {
  return (
    <div className="borders-desktop">
      <BorderContainerFeatures>
        <div className="pros-cons-wrapper">
          <div className="lines-container  cons">
            <p className="title">{t("offer.featured.cons.title")}</p>
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
          <div className="lines-container pros">
            <p className="title">{t("offer.featured.pros.title")}</p>
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
      </BorderContainerFeatures>
      <BorderContainerSidesTopBottomSmaller>
        <div className="bottom-wrapper">
          <h3 className="title">{t("offer.featured.exclusivity.title")}</h3>
          <p className="description">
            {t("offer.featured.exclusivity.description")}
          </p>
          <div className="how-it-works">
            <p className="title">
              {t("offer.featured.exclusivity.how-it-works")}
            </p>
            <div className="content">
              <p>
                {t("offer.featured.exclusivity.how-it-works.description-first")}
              </p>
              <p>
                {t(
                  "offer.featured.exclusivity.how-it-works.description-second"
                )}
              </p>
            </div>
          </div>
        </div>
      </BorderContainerSidesTopBottomSmaller>
    </div>
  )
}

export default FeaturedDesktop
