import React, { useEffect, useState } from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import {
  BannerWrapper,
  BannerContent,
  BannerActions,
} from "./styled.components"
import { RoundedButtonOrange } from "../../styled.components"

const storageKey = "ros-cookie-consent"

const CookieBanner = () => {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    try {
      const consent = window.localStorage.getItem(storageKey)
      if (!consent) {
        setIsVisible(true)
      }
    } catch (error) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    try {
      if (typeof window !== "undefined") {
        window.localStorage.setItem(storageKey, "accepted")
      }
    } catch (error) {}

    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <BannerWrapper
      role="dialog"
      aria-live="polite"
      aria-label={t("home.CookieBanner.ariaLabel")}
    >
      <BannerContent>
        <p className="p-new-model-16">{t("home.CookieBanner.message")}</p>
        <BannerActions>
          <RoundedButtonOrange type="button" onClick={handleAccept}>
            {t("home.CookieBanner.accept")}
          </RoundedButtonOrange>
        </BannerActions>
      </BannerContent>
    </BannerWrapper>
  )
}

export default CookieBanner
