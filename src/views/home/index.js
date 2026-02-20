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

    const script = document.createElement("script")
    script.src = "//embed.typeform.com/next/embed.js"
    document.head.appendChild(script)
  }, [])

  const [typeformOpen, setTypeformOpen] = useState(false)

  const openTypeform = useCallback(() => setTypeformOpen(true), [])

  useEffect(() => {
    if (typeformOpen && window.tf) {
      window.tf.load()
    }
    document.body.style.overflow = typeformOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [typeformOpen])

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
      {typeformOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10000,
            background: 'rgba(10, 10, 10, 0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <button
            onClick={() => setTypeformOpen(false)}
            aria-label="Close"
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              background: 'none',
              border: 'none',
              color: '#ffe8d9',
              fontSize: '28px',
              cursor: 'pointer',
              zIndex: 1,
              lineHeight: 1,
            }}
          >
            &#x2715;
          </button>
          <div
            data-tf-live="01KHXM1R21R2EQ8GP6SZJFM230"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      )}
    </>
  )
}
export default Home
