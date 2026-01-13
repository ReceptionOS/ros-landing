import React from "react"
import { AnalysisComponent } from "./styled.components";
import { BorderContainerTopRowsSides } from "../../../../components/BorderContainer/BorderContainerTopRowsSides";
import { RoundedButtonOrange, RoundedInfoTile } from "../../../../styled.components";
import { StaticImage } from "gatsby-plugin-image";
import { analysisPrice } from "../../../../config/pricing";
import { orderAnalysisButton } from "../../../../config/externalResources";

const Analysis = ({ t }) => {

  return (
    <>
      <div className="container">
        <AnalysisComponent>
          <BorderContainerTopRowsSides className="analysis-container">
            <StaticImage
              className="background-a desktop"
              src="../../../../images/analysis/analysis-background.webp"
              alt="background"
              placeholder="background"
              loading="lazy"
            />
            <StaticImage
              className="background-a mobile"
              src="../../../../images/analysis/analysis-background_mobile.webp"
              alt="background"
              placeholder="background"
              loading="lazy"
            />
            <div className="top-title">
              <RoundedInfoTile>
                <p>{t('home.Analysis.case-study')}</p>
              </RoundedInfoTile>
              <h4>{t('home.Analysis.title')}</h4>
            </div>
            <div className="middle-text">
              <h1>{analysisPrice} PLN</h1>
              <p className="p-new-model-14">{t('home.Analysis.in-it')}</p>
              <div className="inner-text">
                <p className="p-new-model-16">{t('home.Analysis.inner-text1')}</p>
                <svg className="desktop" xmlns="http://www.w3.org/2000/svg" width="25" height="2" viewBox="0 0 25 2" fill="none">
                  <path d="M0.5 1H24.5" stroke="#EB670F" strokeOpacity="0.3" />
                </svg>
                <svg className="mobile" xmlns="http://www.w3.org/2000/svg" width="81" height="2" viewBox="0 0 81 2" fill="none">
                  <path d="M0 1H81" stroke="#302C29" />
                </svg>
                <p className="p-new-model-16">{t('home.Analysis.inner-text2')}</p>
                <svg className="desktop" xmlns="http://www.w3.org/2000/svg" width="25" height="2" viewBox="0 0 25 2" fill="none">
                  <path d="M0.5 1H24.5" stroke="#EB670F" strokeOpacity="0.3" />
                </svg>
                <svg className="mobile" xmlns="http://www.w3.org/2000/svg" width="81" height="2" viewBox="0 0 81 2" fill="none">
                  <path d="M0 1H81" stroke="#302C29" />
                </svg>
                <p className="p-new-model-16">{t('home.Analysis.inner-text3')}</p>
              </div>
              <RoundedButtonOrange as="a" href={orderAnalysisButton} target="_blank" rel="noreferrer" >{t(`home.CaseStudy.modal.button`)}</RoundedButtonOrange>
            </div>
          </BorderContainerTopRowsSides>
        </AnalysisComponent>
      </div>
      <StaticImage
        className="analysis-image desktop"
        src="../../../../images/analysis/analysis-image.webp"
        alt="analysis-image"
        placeholder="analysis-image"
        loading="lazy"
      />
      <StaticImage
        className="analysis-image mobile"
        src="../../../../images/analysis/analysis-image_mobile.webp"
        alt="analysis-image"
        placeholder="analysis-image"
        loading="lazy"
      />
    </>
  )
}
export default Analysis;
