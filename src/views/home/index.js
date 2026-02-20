import React, { useCallback, useEffect, useState } from "react"
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
import CookieBanner from "../../components/CookieBanner/CookieBanner"
import { agentId } from "../../config/externalResources"

const Home = () => {
  const { t } = useTranslation()

  const [agent, setAgent] = useState()

  const setAgentId = () => {
    setAgent(agentId)
  }

  useEffect(() => {
    if (typeof window === "undefined") return

    const MIN_LOADER_MS = 3500
    const loaderStart = window.__rosLoaderStart || Date.now()
    let dismissed = false

    const dismissLoader = () => {
      if (dismissed) return
      dismissed = true

      const loader = document.getElementById("ros-loader-overlay")
      const wrapper = document.getElementById("gatsby-focus-wrapper")

      if (wrapper) wrapper.classList.add("ros-revealed")
      if (loader) {
        loader.classList.add("ros-loader-hidden")
        setTimeout(() => {
          if (window.__rosLoaderCleanup) window.__rosLoaderCleanup()
          loader.remove()
        }, 900)
      }
    }

    const waitForMinTime = new Promise((resolve) => {
      const elapsed = Date.now() - loaderStart
      const remaining = Math.max(0, MIN_LOADER_MS - elapsed)
      setTimeout(resolve, remaining)
    })

    const waitForHero = new Promise((resolve) => {
      const video = document.querySelector("video.bg-video")
      if (!video) return resolve()
      if (video.readyState >= 3) return resolve()
      video.addEventListener("canplay", resolve, { once: true })
      setTimeout(resolve, 8000)
    })

    Promise.all([waitForMinTime, waitForHero]).then(dismissLoader)

    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = "//embed.typeform.com/next/css/popup.css"
    document.head.appendChild(link)

    const script = document.createElement("script")
    script.src = "//embed.typeform.com/next/embed.js"
    document.head.appendChild(script)
  }, [])

  const openTypeform = useCallback(() => {
    if (window.tf) {
      window.tf.createPopup('01KHXM1R21R2EQ8GP6SZJFM230').open()
    }
  }, [])

  return (
    <>
      <Seo title={t`home.seo.title`} description={t`home.seo.description`} />
      <Menu t={t} openTypeform={openTypeform} />
      <Autopilot t={t} handleClick={setAgentId} />
      <OurPartners t={t} />
      <AIWave t={t} />
      <HowItWorks t={t} />
      <EliminateProblems t={t} />
      <Compare t={t} />
      <PartnersAboutUs t={t} />
      <Analysis t={t} openTypeform={openTypeform} />
      <CaseStudy t={t} openTypeform={openTypeform} />
      <AboutUs t={t} />
      <PriceList t={t} />
      <WriteUs t={t} openTypeform={openTypeform} />
      <Footer t={t} />
      <CookieBanner />
      <ElevenWidget agentId={agent} />
    </>
  )
}
export default Home
