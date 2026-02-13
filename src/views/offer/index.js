import React, { useEffect, useState } from "react"
import Seo from "../../components/seo"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Menu from "../../components/Menu/Menu"
import Hero from "./components/Hero/Hero"
import ElevenWidget from "../../components/ElevenWidget/ElevenWidget"
import CookieBanner from "../../components/CookieBanner/CookieBanner"
import Footer from "../../components/Footer/Footer"
import { agentId } from "../../config/externalResources"
import FeaturedSection from "./components/FeaturedSection/FeaturedSection"

const Offer = () => {
  const { t } = useTranslation()

  const [mounted, setMounted] = useState(false)
  const [agent, setAgent] = useState()

  const setAgentId = () => {
    setAgent(agentId)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return

  return (
    <>
      <Seo title={t`offer.seo.title`} description={t`offer.seo.description`} />
      <Menu t={t} />
      <Hero t={t} handleClick={setAgentId} />
      <FeaturedSection t={t} />
      <Footer t={t} />
      <CookieBanner />
    </>
  )
}
export default Offer
