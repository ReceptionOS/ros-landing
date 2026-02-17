import React, { useEffect, useState } from "react"
import Seo from "../../components/seo"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Menu from "../../components/Menu/Menu"
import Hero from "./components/Hero/Hero"
import CookieBanner from "../../components/CookieBanner/CookieBanner"
import Footer from "../../components/Footer/Footer"
import WriteUsCTA from "./components/WriteUsCTA/WriteUsCTA"
import FeaturedSection from "./components/FeaturedSection/FeaturedSection"
import FAQ from "./components/FAQ/FAQ"

const Offer = () => {
  const { t } = useTranslation()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return

  return (
    <>
      <Seo title={t`offer.seo.title`} description={t`offer.seo.description`} />
      <Menu t={t} />
      <Hero t={t} />
      <FeaturedSection t={t} />
      <FAQ t={t} />
      <WriteUsCTA t={t} />
      <Footer t={t} />
      <CookieBanner />
    </>
  )
}
export default Offer
