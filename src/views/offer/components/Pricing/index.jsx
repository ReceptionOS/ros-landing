import React from "react"
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
import { pricingIcons } from "./Pricing.icons"

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

  const { pill, title, price, features, calc, numbers, footer } = content

  return (
    <PricingWrapper>
      <PricingContainer>
        <PricingHeader>
          {/* Pill */}
          <div className="pill">{pill}</div>

          {/* Title */}
          <h1>{title}</h1>
        </PricingHeader>

        <PricingInner>
          {/* Top */}
          <PricingTop>
            {/* Price */}
            <PTopPricing>
              <div className="price-label">{price.label}</div>
              <div className="price-value">{price.value}</div>
            </PTopPricing>

            {/* Features */}
            <PTopFeatures>
              {features.items.map((item, index) => (
                <div key={index}>
                  <div className="feature-icon">{pricingIcons[item.icon]}</div>
                  <div className="feature-label">{item.label}</div>
                  {item.info && (
                    <div className="feature-info">
                      {item.info.map((info, index) => (
                        <div key={index}>{info}</div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </PTopFeatures>
            <div className="feature-description">{features.description}</div>
          </PricingTop>

          {/* Middle */}
          <PricingMiddle>
            {/* Calc */}
            <PMiddleCalc>
              <h2>{calc.title}</h2>
              {calc.tabs.map((tab, index) => (
                <div key={index}>
                  <h3>{tab.title}</h3>
                  <div className="tab-items">
                    {tab.items.map((item, index) => (
                      <div key={index}>
                        <div className="item-label">{item.label}</div>
                        <div className="item-value">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </PMiddleCalc>

            {/* Numbers */}
            <PMiddleNumbers>
              {numbers.map((number, index) => (
                <div key={index}>
                  <div className="number-label">{number.label}</div>
                  <div className="number-value">{number.value}</div>
                </div>
              ))}
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
