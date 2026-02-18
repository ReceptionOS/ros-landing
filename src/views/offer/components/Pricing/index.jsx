import React from "react"

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

const icons = {
  "icon-layers": (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.4996 10.8336L11.6253 13.4467C11.0266 13.7129 10.7273 13.8461 10.4162 13.8987C10.1404 13.9453 9.85876 13.9453 9.58299 13.8987C9.27184 13.8461 8.97251 13.7129 8.37386 13.4467L2.49958 10.8336M17.4997 15.0003L11.5971 17.5716C11.0084 17.828 10.7141 17.9562 10.4086 18.0069C10.1378 18.0518 9.8614 18.0518 9.59059 18.0069C9.28506 17.9562 8.99073 17.828 8.40207 17.5716L2.49969 15.0003M11.6555 9.41835L15.2737 7.77284C16.5456 7.19442 17.1815 6.90521 17.3789 6.5045C17.5503 6.15631 17.5503 5.74822 17.3789 5.40003C17.1815 4.99932 16.5456 4.71011 15.2737 4.13169L11.6555 2.48618C11.0462 2.20908 10.7415 2.07053 10.4243 2.01584C10.1432 1.96738 9.85592 1.96738 9.57483 2.01584C9.25763 2.07053 8.95297 2.20908 8.34365 2.48619L4.72541 4.1317C3.45356 4.71011 2.81763 4.99932 2.6203 5.40003C2.44883 5.74822 2.44883 6.15631 2.6203 6.5045C2.81763 6.90521 3.45356 7.19442 4.72542 7.77284L8.34366 9.41835C8.95297 9.69545 9.25763 9.83401 9.57483 9.88869C9.85592 9.93716 10.1432 9.93716 10.4243 9.88869C10.7415 9.83401 11.0462 9.69545 11.6555 9.41835Z"
        stroke="#E76220"
        stroke-width="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  "icon-user": (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.6668 17.5V17.1429C16.6668 14.5787 14.5882 12.5 12.024 12.5H7.97635C5.41217 12.5 3.3335 14.5787 3.3335 17.1429V17.5M13.7502 6.25C13.7502 8.32107 12.0712 10 10.0002 10C7.92909 10 6.25016 8.32107 6.25016 6.25C6.25016 4.17893 7.92909 2.5 10.0002 2.5C12.0712 2.5 13.7502 4.17893 13.7502 6.25Z"
        stroke="#E76220"
        stroke-width="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  "icon-reload": (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.3964 9.74967C16.3964 6.06778 13.4116 3.08301 9.72972 3.08301C7.6244 3.08301 5.74701 4.0589 4.52524 5.58301M14.5771 9.48043L16.4366 11.1514L18.1076 9.29191M3.55698 9.76473C3.55698 13.4275 6.52621 16.3967 10.1889 16.3967C12.0205 16.3967 13.6787 15.6542 14.8788 14.4538M5.36977 10.5074L3.43429 8.94564L1.87256 10.8811"
        stroke="#E76220"
        stroke-width="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  "icon-phone": (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.7513 1.66699C14.8934 1.66699 18.2513 5.02486 18.2513 9.16699M11.5846 5.00033C13.4256 5.00033 14.918 6.49271 14.918 8.33366M6.03876 13.9615C7.70875 15.6315 9.5068 16.6963 10.9808 17.3627C11.0544 17.396 11.0913 17.4127 11.5108 17.5206C12.6157 17.8047 14.6976 17.425 15.631 16.7691C15.9854 16.52 16.1379 16.3675 16.443 16.0625C16.756 15.7495 16.9125 15.593 17.0124 15.434C17.353 14.8919 17.353 14.2026 17.0124 13.6605C16.9125 13.5015 16.756 13.345 16.443 13.032L16.2197 12.8088C15.9126 12.5017 15.7591 12.3482 15.5849 12.2587C15.3278 12.1266 15.0329 12.0877 14.7504 12.1486C14.5589 12.1898 14.3708 12.2983 13.9947 12.5153L13.0772 13.0443C12.8838 13.1559 12.7871 13.2116 12.6469 13.2454C12.5456 13.2699 12.371 13.2779 12.2678 13.2628C12.1252 13.242 12.0485 13.2066 11.895 13.136C11.2727 12.8495 10.2397 12.2561 9.09645 11.1128C7.92797 9.94437 7.33388 8.89105 7.05476 8.27366C6.99024 8.13095 6.95798 8.0596 6.93706 7.92547C6.92199 7.82887 6.92615 7.66344 6.94606 7.56772C6.9737 7.43481 7.02138 7.34208 7.11674 7.15662L7.64017 6.13857C7.86183 5.70745 7.97266 5.49188 8.00021 5.27266C8.02952 5.03941 7.99246 4.80262 7.89329 4.58948C7.80008 4.38916 7.62869 4.21776 7.2859 3.87497L6.96824 3.55732C6.65524 3.24431 6.49874 3.08781 6.33973 2.9879C5.79765 2.64729 5.10837 2.64729 4.56629 2.9879C4.40729 3.08781 4.25078 3.24431 3.93778 3.55731C3.63277 3.86233 3.48026 4.01484 3.23118 4.36929C2.57525 5.30272 2.19555 7.38455 2.47971 8.48944C2.58762 8.90901 2.60427 8.94583 2.63756 9.01948C3.30393 10.4935 4.36877 12.2915 6.03876 13.9615Z"
        stroke="#E76220"
        stroke-width="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

const Pricing = ({ t }) => {
  const content = t("offer.Pricing", { returnObjects: true })

  const { pill, title, price, features, calc, numbers, footer } = content

  return (
    <div style={{ color: "white" }}>
      {/* Pill */}
      <div className="pill">{pill}</div>

      {/* Title */}
      <h1>{title}</h1>

      {/* Price */}
      <div className="price">
        <div className="price-label">{price.label}</div>
        <div className="price-value">{price.value}</div>
      </div>

      {/* Features */}
      <div className="features">
        {features.items.map((item, index) => (
          <div key={index}>
            <div className="feature-icon">{icons[item.icon]}</div>
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
        <div className="feature-description">{features.description}</div>
      </div>

      {/* Calc */}
      <div className="calc">
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
      </div>

      {/* Numbers */}
      <div className="numbers">
        {numbers.map((number, index) => (
          <div key={index}>
            <div className="number-label">{number.label}</div>
            <div className="number-value">{number.value}</div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="footer">
        <h3>{footer.title}</h3>
        <p>{footer.description}</p>
        <a href={footer.button.href} className="button">
          {footer.button.label}
        </a>
      </div>
    </div>
  )
}

export { Pricing }
