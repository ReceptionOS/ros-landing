import React, { useState } from "react"
import {
  PricingWrapper,
  PricingContainer,
  PricingHeader,
  PricingInner,
  PTopPricing,
  PTopFeatures,
  PricingTop,
  PMiddleCalc,
  PMiddleNumbers,
  PricingBottom,
  PricingMiddle
} from "./Pricing.styled"
import { RoundedInfoTile } from "../../../../styled.components"
import { pricingIcons } from "./Pricing.icons"
import {
  Vector115,
  Vector4,
  CornerArrow,
  SideVectorLeft,
  SideVectorRight
} from "./Pricing.vectors"

/**
 * @param {Object} content
 * @param {string} content.pill
 * @param {string} content.title
 *
 * @param {Object} content.price
 * @param {string} content.price.label
 * @param {string} content.price.value
 *
 * @param {Object} content.features
 * @param {Array<Object>} content.features.items
 * @param {string} content.features.items.icon
 * @param {string} content.features.items.label
 * @param {Array<string>} content.features.items.info
 * @param {string} content.features.description
 *
 * @param {Object} content.calc
 * @param {string} content.calc.title
 * @param {Array<Object>} content.calc.tabs
 * @param {string} content.calc.tabs.title
 * @param {Array<Object>} content.calc.tabs.items
 * @param {string} content.calc.tabs.items.label
 * @param {string} content.calc.tabs.items.value
 *
 * @param {Array<Object>} content.numbers
 * @param {string} content.numbers.label
 * @param {string} content.numbers.value
 *
 * @param {string} content.footer.title
 * @param {string} content.footer.description
 * @param {Object} content.footer.button
 * @param {string} content.footer.button.label
 * @param {string} content.footer.button.href
 */

const Pricing = ({ t }) => {
  const content = t("offer.Pricing", { returnObjects: true })
  const [activeTab, setActiveTab] = useState(0)

  const { pill, title, price, features, calc, numbers, footer } = content

  return (
    <PricingWrapper>
      <PricingContainer>
        <PricingHeader>
          <RoundedInfoTile>
            <p>{pill}</p>
          </RoundedInfoTile>
          <h1>{title}</h1>
        </PricingHeader>

        <PricingInner>
          {/* Top */}
          <PricingTop>
            <div className="vector-115">
              <Vector115 />
            </div>
            <div className="vector-4">
              <Vector4 />
            </div>

            <PTopPricing>
              <div className="price-flag">
                <div className="price-flag-inner">
                  <p>{price.label}</p>
                </div>
              </div>
              <div className="price-amount">
                <span className="price-value">
                  {price.value.split(" /")[0]}
                </span>
                <span className="price-suffix">
                  / {price.value.split("/ ")[1] || price.value.split("/")[1]}
                </span>
              </div>
            </PTopPricing>

            <div className="top-border">
              <CornerArrow position="left-top" />
              <CornerArrow position="right-top" />
              <CornerArrow position="left-bottom" />
              <CornerArrow position="right-bottom" />

              <PTopFeatures>
                <div className="features-left">
                  {features.items
                    .filter(item => !item.info)
                    .map((item, index) => (
                      <div className="feature-item" key={index}>
                        {pricingIcons[item.icon]}
                        <span className="feature-label">{item.label}</span>
                      </div>
                    ))}
                </div>
                <div className="features-right">
                  {features.items
                    .filter(item => item.info)
                    .map((item, index) => (
                      <React.Fragment key={index}>
                        <div className="feature-item">
                          {pricingIcons[item.icon]}
                          <span className="feature-header">{item.label}</span>
                        </div>
                        {item.info.map((info, i) => (
                          <div className="feature-item" key={i}>
                            <div className="bullet-dot" />
                            <span className="feature-label">{info}</span>
                          </div>
                        ))}
                      </React.Fragment>
                    ))}
                </div>
              </PTopFeatures>

              <div className="features-description">{features.description}</div>
            </div>

            <div className="top-divider" />
          </PricingTop>

          {/* Middle */}
          <PricingMiddle>
            <div className="side-vector-left">
              <SideVectorLeft />
            </div>
            <div className="side-vector-right">
              <SideVectorRight />
            </div>

            <PMiddleCalc>
              <div className="calc-heading">
                <h2>{calc.title}</h2>
                <div className="tab-switcher">
                  {calc.tabs.map((tab, index) => (
                    <button
                      key={index}
                      className={`tab-btn ${activeTab === index ? "tab-btn-active" : "tab-btn-inactive"}`}
                      onClick={() => setActiveTab(index)}
                    >
                      {activeTab === index && (
                        <span className="tab-prefix">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      )}
                      {tab.title}
                    </button>
                  ))}
                </div>
              </div>

              <div className="calc-divider" />

              <div className="calc-content">
                <div className="calc-list">
                  {calc.tabs[activeTab].items.map((item, index) => (
                    <React.Fragment key={index}>
                      {index > 0 && <div className="calc-item-divider" />}
                      <div className="calc-item">
                        {item.label}
                        <span className="calc-item-value">{item.value}</span>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </PMiddleCalc>

            <PMiddleNumbers>
              <div className="numbers-top-line">
                <div className="numbers-accent numbers-accent-1" />
                <div className="numbers-accent numbers-accent-2" />
                <div className="numbers-accent numbers-accent-3" />
              </div>
              <div className="numbers-container">
                <CornerArrow position="left-top" />
                <CornerArrow position="right-top" />
                <CornerArrow position="left-bottom" />
                <CornerArrow position="right-bottom" />
                <div className="numbers-grid">
                  {numbers.map((number, index) => (
                    <div className="number-item" key={index}>
                      <span className="number-value">
                        {number.value.includes(" /") ? (
                          <>
                            {number.value.split(" /")[0]}{" "}
                            <span className="number-value-suffix">
                              /{number.value.split("/")[1]}
                            </span>
                          </>
                        ) : (
                          number.value
                        )}
                      </span>
                      <span className="number-label">{number.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </PMiddleNumbers>
          </PricingMiddle>

          {/* Footer */}
          <PricingBottom>
            <h3>{footer.title}</h3>
            <p>{footer.description}</p>
            <a href={footer.button.href} className="button">
              {footer.button.label}
            </a>
          </PricingBottom>
        </PricingInner>
      </PricingContainer>
    </PricingWrapper>
  )
}

export { Pricing }
