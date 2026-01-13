import React, { useEffect, useState } from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { CookieBannerContainer } from "./styled.components"
import { RoundedButtonDark, RoundedButtonOrange } from "../../styled.components"

const CustomCheckbox = ({ checked, onChange, disabled = false }) => {
  if (checked) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
        onClick={disabled ? undefined : onChange}
      >
        <g clipPath="url(#clip0_523_5936)">
          <path
            d="M12.6667 2.5H3.33333C2.59333 2.5 2 3.1 2 3.83333V13.1667C2 13.9 2.59333 14.5 3.33333 14.5H12.6667C13.4067 14.5 14 13.9 14 13.1667V3.83333C14 3.1 13.4067 2.5 12.6667 2.5ZM6.66667 11.8333L3.33333 8.5L4.27333 7.56L6.66667 9.94667L11.7267 4.88667L12.6667 5.83333L6.66667 11.8333Z"
            fill="url(#paint0_linear_523_5936)"
            fillOpacity="0.2"
          />
          <path
            d="M12.6667 2.5H3.33333C2.59333 2.5 2 3.1 2 3.83333V13.1667C2 13.9 2.59333 14.5 3.33333 14.5H12.6667C13.4067 14.5 14 13.9 14 13.1667V3.83333C14 3.1 13.4067 2.5 12.6667 2.5ZM6.66667 11.8333L3.33333 8.5L4.27333 7.56L6.66667 9.94667L11.7267 4.88667L12.6667 5.83333L6.66667 11.8333Z"
            fill="#E66928"
            fillOpacity="0.5"
          />
          <path
            d="M12.6667 2.5H3.33333C2.59333 2.5 2 3.1 2 3.83333V13.1667C2 13.9 2.59333 14.5 3.33333 14.5H12.6667C13.4067 14.5 14 13.9 14 13.1667V3.83333C14 3.1 13.4067 2.5 12.6667 2.5ZM6.66667 11.8333L3.33333 8.5L4.27333 7.56L6.66667 9.94667L11.7267 4.88667L12.6667 5.83333L6.66667 11.8333Z"
            fill="url(#paint1_linear_523_5936)"
            fillOpacity="0.2"
            style={{ mixBlendMode: 'color-dodge' }}
          />
        </g>
        <defs>
          <linearGradient id="paint0_linear_523_5936" x1="8" y1="2.5" x2="8" y2="14.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0D0702" stopOpacity="0" />
            <stop offset="1" stopColor="#733B15" />
          </linearGradient>
          <linearGradient id="paint1_linear_523_5936" x1="7.51852" y1="5.28571" x2="12.3093" y2="9.13042" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E76220" stopOpacity="0" />
            <stop offset="1" stopColor="#E76220" />
          </linearGradient>
          <clipPath id="clip0_523_5936">
            <rect width="16" height="16" fill="white" transform="translate(0 0.5)" />
          </clipPath>
        </defs>
      </svg>
    )
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
      onClick={disabled ? undefined : onChange}
    >
      <rect
        x="2"
        y="2.5"
        width="12"
        height="12"
        rx="2"
        fill="transparent"
        stroke="#E76220"
        strokeWidth="1.5"
      />
    </svg>
  )
}

const CookieTypes = [
  {
    name: "necessary",
    description: "extras.necessary",
  },
  {
    name: "preferences",
    description: "extras.preferences",
  },
  {
    name: "statistics",
    description: "extras.statistics",
  },
]

const CookieBanner = () => {
  const { t } = useTranslation()
  const [editCookies, setEditCookies] = useState(false)
  const [shouldShow, setShouldShow] = useState(false)
  const [checkboxStates, setCheckboxStates] = useState({
    necessary: true, // Always checked and disabled
    preferences: false,
    statistics: false
  })

  const isRodoAccepted = () => {
    if (typeof document !== undefined) {
      const cookies = document.cookie.split(`; `)
      for (let cookie of cookies) {
        const item = cookie.split(`=`)
        const storedKey = item[0]
        const storedValue = item[1]
        if ("rodo_accepted" === storedKey) return storedValue
      }
    }
    return false
  }

  useEffect(() => {
    if (!isRodoAccepted()) setTimeout(() => setShouldShow(true), 700)
  }, [])

  const handleCheckboxChange = (type) => {
    if (type === 'necessary') return // Can't uncheck necessary cookies
    setCheckboxStates(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  const acceptAll = () => {
    document.cookie = "rodo_accepted=true;max-age=31536000;path=/"
    document.cookie = "optIn=all;max-age=31536000;path=/"
    setShouldShow(false)
  }

  const acceptSome = () => {
    document.cookie = "rodo_accepted=true;max-age=31536000;path=/"
    if (checkboxStates.statistics) {
      document.cookie = "optIn=all;max-age=31536000;path=/"
      setShouldShow(false)
      return
    } else if (checkboxStates.preferences) {
      document.cookie = "optIn=strict;max-age=31536000;path=/"
      setShouldShow(false)
      return
    }
    document.cookie = "optIn=strict;max-age=31536000;path=/"
    setShouldShow(false)
  }

  const declineAll = () => {
    document.cookie = "rodo_accepted=false;max-age=31536000;path=/"
    document.cookie = "optIn=none;max-age=31536000;path=/"
    setShouldShow(false)
  }

  if (!shouldShow) return null

  return (
    <>
      <CookieBannerContainer>
        <div className="header-con">
          <p className="p-style p-head">{!editCookies ? t`home.CookieBanner.header` : t`home.CookieBanner.edit-header`}</p>
          {!editCookies && (
            <p className="p-style p-description">{t`home.CookieBanner.description`}</p>
          )}
        </div>
        {editCookies ? (
          <div className="agrees-con">
            {CookieTypes.map((type, index) => {
              return (
                <div key={index} className="agree-con"
                  onClick={type.name !== "necessary" ? () => handleCheckboxChange(type.name) : undefined}
                  style={{ cursor: type.name !== "necessary" ? 'pointer' : 'default' }}
                >
                  <div className="check-con">
                    <CustomCheckbox
                      checked={checkboxStates[type.name]}
                      disabled={type.name === "necessary"}
                    />
                    <label
                      style={{ cursor: type.name !== "necessary" ? 'pointer' : 'default' }}
                    >
                      {t(String("home.CookieBanner." + type.name))}
                    </label>
                  </div>
                  <p className="p-style p-description">
                    {t(String("home.CookieBanner." + type.name + "-description"))}
                  </p>
                </div>
              )
            })}
          </div>
        ) : null}
        <div className="footer-con">
          <RoundedButtonDark
            className="cookie-button"
            onClick={() => declineAll()}
          >
            {t("home.CookieBanner.decline")}
          </RoundedButtonDark>
          <RoundedButtonDark
            className="cookie-button"

            onClick={
              !editCookies ? () => setEditCookies(true) : () => acceptSome()
            }
          >
            {editCookies ? t("home.CookieBanner.save") : t("home.CookieBanner.edit-cookies")}
          </RoundedButtonDark>
          <RoundedButtonOrange
            className="cookie-button"
            id="accept-all"
            onClick={() => acceptAll()}
          >
            {t("home.CookieBanner.accept-all")}
          </RoundedButtonOrange>
        </div>
      </CookieBannerContainer>
    </>
  )
}

export default CookieBanner