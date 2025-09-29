import React, { useEffect } from "react"
import { FooterComponent } from "./styled.components"
import { StaticImage } from "gatsby-plugin-image"
import { BorderContainer4Rows } from "../BorderContainer/BorderContainer4Rows"
import { BorderContainerNoRowsTop } from "../BorderContainer/BorderContainerNoRowsTop"
import { RoundedButtonSvg } from "../../styled.components"
import Dropdown from "react-bootstrap/Dropdown"
import { useI18next, Link } from "gatsby-plugin-react-i18next"
import { navigate } from "gatsby"
import { facebook, linkedin, privacyPolicy, terms, twitter } from "../../config/externalResources"

const Footer = ({ t }) => {
  const { language, languages, originalPath, changeLanguage } = useI18next();

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (localStorage.getItem("user-chose-language")) return;

    const nav = (navigator.languages && navigator.languages[0]) || navigator.language || "en";
    const preferred = nav.split("-")[0];

    const target = preferred === "pl"
      ? (languages.includes("pl") ? "pl" : languages[0])
      : (languages.includes("en") ? "en" : languages[0]);

    if (language !== target) {
      changeLanguage(target);
      navigate(originalPath, { replace: true });
    }
  }, []);

  const handleUserLanguagePick = (lang) => {
    try {
      localStorage.setItem("user-chose-language", "1");
    } catch (e) {
    }
    if (language !== lang) {
      changeLanguage(lang);
      navigate(originalPath);
    }
  };
  return (
    <>
      <div className="container">
        <FooterComponent>
          <svg
            className="footer-background desktop"
            xmlns="http://www.w3.org/2000/svg"
            width="1051"
            height="201"
            viewBox="0 0 1051 201"
            fill="none"
          >
            <path
              opacity="0.4"
              d="M246.087 90.9814C229.156 103.094 213.45 115.893 198.559 129.377C198.151 129.605 197.947 130.062 197.539 130.291C90.0406 226.279 28.234 355.177 8.65171 490.245C7.22383 499.387 5.99994 508.529 4.98003 517.67C4.98003 519.499 4.57207 521.099 4.36808 522.927C3.14419 536.639 2.12428 550.352 1.51234 564.065C1.30835 570.007 0.90039 575.949 0.90039 581.662C0.90039 583.948 0.900391 586.233 0.900391 588.519L21.9105 588.519C22.3185 564.064 23.9504 539.382 27.4181 514.699C28.438 508.757 29.4579 503.044 30.6818 497.102C47.6123 431.51 81.4733 369.575 134.713 318.838C194.275 262.617 263.629 235.192 332.371 231.535C277.908 288.442 235.276 361.576 211.614 446.822C198.559 494.13 192.236 541.667 191.42 588.29L211.002 588.29C212.634 544.181 219.569 499.158 232.828 454.136C259.958 362.261 311.565 286.614 376.227 232.221C417.432 236.106 457.616 247.99 494.741 267.416C407.437 336.893 346.65 450.25 345.834 588.061L366.232 588.061C369.904 453.221 435.586 346.492 525.95 285.928C616.314 346.492 681.997 452.993 685.668 588.061L706.067 588.061C705.455 450.022 644.464 336.893 557.16 267.416C594.284 247.99 634.469 235.877 675.673 232.221C740.336 286.614 791.943 362.261 819.073 454.135C832.331 499.158 839.267 544.181 840.899 588.29L860.481 588.29C859.665 541.667 853.546 494.13 840.287 446.822C816.625 361.347 773.993 288.214 719.529 231.535C788.271 235.192 857.625 262.617 917.188 318.838C970.631 369.575 1004.49 431.51 1021.22 497.101C1022.44 503.044 1023.46 508.757 1024.48 514.699C1027.95 539.382 1029.58 564.064 1029.99 588.519L1051 588.519C1051 586.233 1051 583.948 1051 581.662C1051 575.72 1050.59 569.778 1050.39 564.064C1049.78 550.352 1048.96 536.639 1047.53 522.927C1047.53 521.098 1047.12 519.499 1046.92 517.67C1045.9 508.529 1044.88 499.387 1043.45 490.245C1023.87 355.405 962.064 226.279 854.769 130.291C854.361 130.062 854.158 129.605 853.75 129.377C838.655 115.893 822.948 103.094 806.222 90.9813C720.753 27.9036 623.25 -0.892727 526.154 0.0214614C429.059 -0.892719 331.555 28.1322 246.087 90.9814ZM140.016 274.501C157.559 254.846 176.733 236.106 198.151 218.965C277.908 155.43 369.292 131.433 457.82 139.432C428.039 153.831 399.685 172.114 373.372 193.597C294.227 187.655 211.818 211.88 140.016 274.273L140.016 274.501ZM526.154 245.248C493.109 224.222 457.004 209.138 419.676 200.682C453.129 179.199 489.03 162.744 526.154 152.231C563.483 162.744 599.18 179.199 632.633 200.682C595.304 209.138 559.199 224.222 526.154 245.248ZM912.088 274.501C840.287 211.88 758.082 187.655 678.733 193.826C652.419 172.114 624.066 154.059 594.284 139.661C682.609 131.662 774.197 155.659 853.954 219.194C875.372 236.334 894.546 255.075 912.088 274.73L912.088 274.501ZM892.506 213.709C885.367 206.852 878.227 199.996 870.476 193.597C763.793 103.094 639.16 82.0682 525.95 113.607C412.74 82.0682 287.903 103.094 181.425 193.597C173.877 199.996 166.534 206.853 159.394 213.709C253.838 102.409 389.69 41.1591 525.95 39.1022C662.21 41.1591 797.858 102.409 892.506 213.709Z"
              fill="url(#paint0_linear_206_2819)"
              fillOpacity="0.2"
            />
            <defs>
              <linearGradient
                id="paint0_linear_206_2819"
                x1="525.95"
                y1="0.000366211"
                x2="525.95"
                y2="243.255"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#DB6F53" />
                <stop offset="1" stopColor="#DB6F53" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            className="footer-background mobile"
            xmlns="http://www.w3.org/2000/svg"
            width="390"
            height="100"
            viewBox="0 0 390 100"
            fill="none"
          >
            <path
              opacity="0.4"
              d="M57.9899 44.524C49.7044 50.4517 42.0178 56.715 34.7306 63.3139C34.531 63.4257 34.4311 63.6494 34.2315 63.7613C-18.3764 110.736 -48.6234 173.816 -58.2066 239.917C-58.9054 244.39 -59.5044 248.864 -60.0035 253.338C-60.0035 254.233 -60.2031 255.016 -60.303 255.91C-60.9019 262.621 -61.401 269.332 -61.7005 276.042C-61.8004 278.95 -62 281.858 -62 284.654C-62 285.773 -62 286.891 -62 288.01L-51.718 288.01C-51.5184 276.042 -50.7198 263.963 -49.0227 251.884C-48.5236 248.976 -48.0245 246.18 -47.4255 243.272C-39.14 211.172 -22.5691 180.863 3.48532 156.033C32.6343 128.519 66.5749 115.098 100.216 113.308C73.5626 141.158 52.6992 176.948 41.1194 218.666C34.7306 241.818 31.636 265.082 31.2367 287.898L40.82 287.898C41.6186 266.312 45.0126 244.279 51.5012 222.245C64.778 177.284 90.0338 140.263 121.678 113.644C141.843 115.545 161.509 121.361 179.677 130.868C136.952 164.869 107.204 220.344 106.804 287.786L116.787 287.786C118.584 221.798 150.728 169.566 194.95 139.927C239.173 169.566 271.316 221.686 273.113 287.786L283.096 287.786C282.796 220.232 252.949 164.869 210.223 130.868C228.392 121.361 248.057 115.433 268.222 113.644C299.866 140.263 325.122 177.284 338.399 222.245C344.888 244.278 348.282 266.312 349.08 287.898L358.663 287.898C358.264 265.082 355.269 241.818 348.781 218.666C337.201 176.836 316.337 141.046 289.684 113.308C323.325 115.098 357.266 128.519 386.415 156.033C412.569 180.863 429.14 211.172 437.326 243.272C437.925 246.18 438.424 248.976 438.923 251.884C440.62 263.963 441.418 276.042 441.618 288.01L451.9 288.01C451.9 286.891 451.9 285.773 451.9 284.654C451.9 281.746 451.701 278.838 451.601 276.042C451.301 269.332 450.902 262.621 450.203 255.91C450.203 255.016 450.003 254.233 449.904 253.338C449.404 248.864 448.905 244.39 448.207 239.917C438.623 173.928 408.376 110.736 355.868 63.7612C355.669 63.6494 355.569 63.4257 355.369 63.3139C347.982 56.715 340.296 50.4517 332.11 44.524C290.283 13.6548 242.567 -0.437574 195.05 0.00978491C147.533 -0.43757 99.8166 13.7667 57.9899 44.524ZM6.08078 134.335C14.6657 124.717 24.0493 115.545 34.531 107.157C73.5626 76.0642 118.284 64.3205 161.608 68.235C147.034 75.2812 133.158 84.2288 120.281 94.7422C81.5486 91.8343 41.2193 103.69 6.08078 134.223L6.08078 134.335ZM195.05 120.019C178.878 109.729 161.209 102.348 142.941 98.2094C159.312 87.696 176.882 79.6432 195.05 74.4983C213.318 79.6432 230.787 87.696 247.159 98.2094C228.891 102.348 211.222 109.729 195.05 120.019ZM383.919 134.335C348.781 103.69 308.551 91.8342 269.719 94.8541C256.842 84.2288 242.966 75.3931 228.392 68.3469C271.616 64.4323 316.437 76.176 355.469 107.269C365.951 115.657 375.334 124.828 383.919 134.447L383.919 134.335ZM374.336 104.585C370.842 101.229 367.348 97.8738 363.555 94.7422C311.346 50.4517 250.353 40.162 194.95 55.5966C139.547 40.162 78.454 50.4517 26.3453 94.7422C22.6518 97.8739 19.0581 101.229 15.5642 104.585C61.7832 50.1162 128.267 20.1418 194.95 19.1352C261.633 20.1418 328.017 50.1162 374.336 104.585Z"
              fill="#DB6F53"
              fillOpacity="0.2"
            />
          </svg>
          <BorderContainerNoRowsTop className="footer-container footer-1">
            <StaticImage
              className="ros-image"
              src="../../images/ros_white.webp"
              alt="ros-image"
              placeholder="ros-image"
              loading="lazy"
            />
          </BorderContainerNoRowsTop>
          <BorderContainer4Rows className="footer-container footer-2">
            <div className="info">
              <p className="p-new-model-16">
                {t(`home.Footer.change-language`)}
              </p>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  {language.includes("pl") ? t(`home.Footer.polish`) : t(`home.Footer.english`)}
                  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                    <path d="M4.85718 7.64258L9.57146 12.3569L14.2857 7.64258" stroke="#FFE8D9" strokeOpacity="0.64" strokeLinejoin="round" />
                  </svg>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {languages.map(lang => (
                    <Dropdown.Item
                      key={lang}
                      onClick={() => handleUserLanguagePick(lang)}
                    >
                      {lang.includes("pl") ? t(`home.Footer.polish`) : t(`home.Footer.english`)}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </BorderContainer4Rows>
          <BorderContainer4Rows className="footer-container footer-3">
            <div>
              <a
                href="mailto:contact@receptionos.com"
                onCopy={e => {
                  e.preventDefault()
                  e.clipboardData.setData(
                    "text/plain",
                    "contact@receptionos.com"
                  )
                }}
              >
                r@receptionos.com
              </a>
              <RoundedButtonSvg as="a" href="mailto:contact@receptionos.com">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M2.92871 9.99995H17.0716M17.0716 9.99995L11.5716 4.5M17.0716 9.99995L11.5716 15.4999"
                    stroke="#FFE8D9"
                    strokeLinejoin="round"
                  />
                </svg>
              </RoundedButtonSvg>
            </div>
          </BorderContainer4Rows>
          <div className="footer-4">
            <div className="icons">
              <a href={facebook} target="_blank" rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g clipPath="url(#clip0_2012_1018)">
                    <path
                      d="M8 0C3.58176 0 0 3.58176 0 8C0 11.7517 2.58304 14.8998 6.06752 15.7645V10.4448H4.41792V8H6.06752V6.94656C6.06752 4.22368 7.29984 2.9616 9.97312 2.9616C10.48 2.9616 11.3546 3.06112 11.7123 3.16032V5.37632C11.5235 5.35648 11.1955 5.34656 10.7882 5.34656C9.47648 5.34656 8.9696 5.84352 8.9696 7.13536V8H11.5827L11.1338 10.4448H8.9696V15.9414C12.9309 15.463 16.0003 12.0902 16.0003 8C16 3.58176 12.4182 0 8 0Z"
                      fill="#FFE8D9"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2012_1018">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href={twitter} target="_blank" rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M12.2176 1.26953H14.4666L9.55323 6.88519L15.3334 14.5268H10.8076L7.26277 9.89222L3.20671 14.5268H0.956369L6.2117 8.52026L0.666748 1.26953H5.30749L8.51168 5.50575L12.2176 1.26953ZM11.4283 13.1807H12.6745L4.63034 2.54495H3.29306L11.4283 13.1807Z"
                    fill="#FFE8D9"
                  />
                </svg>
              </a>
              <a href={linkedin} target="_blank" rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g clipPath="url(#clip0_2012_1007)">
                    <path
                      d="M14.8156 0H1.18125C0.528125 0 0 0.515625 0 1.15313V14.8438C0 15.4813 0.528125 16 1.18125 16H14.8156C15.4688 16 16 15.4813 16 14.8469V1.15313C16 0.515625 15.4688 0 14.8156 0ZM4.74687 13.6344H2.37188V5.99687H4.74687V13.6344ZM3.55938 4.95625C2.79688 4.95625 2.18125 4.34062 2.18125 3.58125C2.18125 2.82188 2.79688 2.20625 3.55938 2.20625C4.31875 2.20625 4.93437 2.82188 4.93437 3.58125C4.93437 4.3375 4.31875 4.95625 3.55938 4.95625ZM13.6344 13.6344H11.2625V9.92188C11.2625 9.0375 11.2469 7.89687 10.0281 7.89687C8.79375 7.89687 8.60625 8.8625 8.60625 9.85938V13.6344H6.2375V5.99687H8.5125V7.04063H8.54375C8.85937 6.44063 9.63438 5.80625 10.7875 5.80625C13.1906 5.80625 13.6344 7.3875 13.6344 9.44375V13.6344V13.6344Z"
                      fill="#FFE8D9"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2012_1007">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
            <a
              href={privacyPolicy}
              target="_blank"
              rel="noreferrer"
              style={{ marginTop: "20px" }}
              className="p-new-model-16"
            >
              {t(`home.Footer.policy`)}
            </a>
            <a
              href={terms}
              target="_blank"
              rel="noreferrer"
              className="p-new-model-16"
            >
              {t(`home.Footer.terms`)}
            </a>
            <p style={{ marginTop: "40px" }} className="p-new-model-16">
              {t(`home.Footer.place`)}
            </p>
          </div>
        </FooterComponent>
      </div>
    </>
  )
}
export default Footer
