import React, { useEffect, useState } from "react"
import Seo from "../../components/seo"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Menu from "../../components/Menu/Menu"
import Autopilot from "./components/Autopilot/Autopilot"
import AIWave from "./components/AIWave/AIWave"
import WriteUs from "./components/WriteUs/WriteUs"
import Footer from "../../components/Footer/Footer"
import PriceList from "./components/PriceList/PriceList"
import AboutUs from "./components/AboutUs/AboutUs"
import CaseStudy from "./components/CaseStudy/CaseStudy"
import Analysis from "./components/Analysis/Analysis"
import PartnersAboutUs from "./components/PartnersAboutUs/PartnersAboutUs"
import Compare from "./components/Compare/Compare"
import EliminateProblems from "./components/EliminateProblems/EliminateProblems"
import HowItWorks from "./components/HowItWorks/HowItWorks"
import OurPartners from "./components/OurPartners/OurPartners"
import ElevenWidget from "../../components/ElevenWidget/ElevenWidget"
import { agentId } from "../../config/externalResources"

const Home = () => {
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
      <Seo title={t`home.seo.title`} description={t`home.seo.description`} />
      <Menu t={t} />
      <Autopilot t={t} handleClick={setAgentId} />
      <OurPartners t={t} />
      <AIWave t={t} />
      <HowItWorks t={t} />
      <EliminateProblems t={t} />
      <Compare t={t} />
      <PartnersAboutUs t={t} />
      <Analysis t={t} />
      <CaseStudy t={t} />
      <AboutUs t={t} />
      <PriceList t={t} />
      <WriteUs t={t} />
      <Footer t={t} />
      <ElevenWidget agentId={agent} />
    </>
  )
}
export default Home
