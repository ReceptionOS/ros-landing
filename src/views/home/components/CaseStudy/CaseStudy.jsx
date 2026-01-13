import React, { useState } from "react"
import { CaseStudyComponent, CsModalContainer } from "./styled.components"
import { RoundedButtonOrange, RoundedButtonSvgDark, RoundedInfoTile } from "../../../../styled.components"
import { StaticImage } from "gatsby-plugin-image"
import { BorderContainer4Rows } from "../../../../components/BorderContainer/BorderContainer4Rows"
import BaseModal from "../../../../components/BaseModal/BaseModal"
import { Trans } from "react-i18next"
import { orderAnalysisButton } from "../../../../config/externalResources"

const CaseStudy = ({ t }) => {
  const [isModal, setIsModal] = useState(false);

  const openModal = () => {
    setIsModal(true);
  }

  const Children = () => (
    <div className="container">
      <CsModalContainer>
        <BorderContainer4Rows className="cs-modal cs-modal-1 cs-modal-first">
          <RoundedButtonSvgDark className="close-button" onClick={() => setIsModal(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6 18L18 6M6 6L18 18" stroke="#FFE8D9" strokeLinejoin="round" />
            </svg>
          </RoundedButtonSvgDark>
          <RoundedInfoTile style={{ marginTop: '-40px' }}>
            <p>{t('home.CaseStudy.case-study')}</p>
          </RoundedInfoTile>
          <StaticImage
            className="apolonia-cs"
            src="../../../../images/case-study/apolonia-logo.webp"
            alt="apolonia"
            placeholder="apolonia"
            loading="lazy"
          />
          <h3>{t('home.CaseStudy.modal.title')}</h3>
          <p className="p-new-model-16">
            <Trans
              i18nKey="home.CaseStudy.modal.description"
              components={{
                span: <span></span>
              }}
            />
          </p>
        </BorderContainer4Rows>
        <BorderContainer4Rows className="cs-modal cs-modal-2">
          {['1', '2', '3'].map(key => (
            <div style={key !== '2' ? {} : {
              borderLeft: '1px solid #302c29',
              borderRight: '1px solid #302c29',
            }} key={key} className="tile-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 7.72594C16.2866 4.7221 15.2162 3.13469 13.8569 2.59099C12.6649 2.1142 11.3352 2.1142 10.1431 2.59099C8.50144 3.24765 7.28112 5.42679 4.84049 9.78506C2.49449 13.9743 1.3215 16.069 1.59194 17.7805C1.78851 19.0246 2.44733 20.1486 3.4367 20.9279C4.79789 22.0001 7.19861 22.0001 12 22.0001C16.8015 22.0001 19.2022 22.0001 20.5634 20.9279C21.5528 20.1486 22.2116 19.0246 22.4081 17.7805C22.6261 16.4012 21.9065 14.773 20.391 12.0001M12 13V9M12.5 16.5C12.5 16.7761 12.2761 17 12 17C11.7239 17 11.5 16.7761 11.5 16.5M12.5 16.5C12.5 16.2239 12.2761 16 12 16C11.7239 16 11.5 16.2239 11.5 16.5M12.5 16.5H11.5" stroke="#FF8637" stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="text-con">
                <p style={{ color: "#FFE8D9" }} className="p-new-model-16">{t(`home.CaseStudy.modal.title-warning${key}`)}</p>
                <p className="p-new-model-16">{t(`home.CaseStudy.modal.description-warning${key}`)}</p>
              </div>
            </div>
          ))}
        </BorderContainer4Rows>
        <BorderContainer4Rows className="cs-modal cs-modal-3">
          <p className="p-new-model-18">{t(`home.CaseStudy.modal.solution-title`)}</p>
        </BorderContainer4Rows>
        <BorderContainer4Rows className="cs-modal cs-modal-2">
          {['1', '2'].map(key => (
            <div style={key !== '2' ? {} : {
              borderLeft: '1px solid #302c29',
            }} key={key} className="tile-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M2.83209 16C2.29689 14.7751 2 13.4222 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C9.74835 22 7.67051 21.2558 5.99902 20M8.5 12.5L11 15L16.5 9.5" stroke="#37FF76" stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="text-con">
                <p style={{ color: "#FFE8D9" }} className="p-new-model-16">{t(`home.CaseStudy.modal.title-solution${key}`)}</p>
                <p className="p-new-model-16">{t(`home.CaseStudy.modal.description-solution${key}`)}</p>
              </div>
            </div>
          ))}
        </BorderContainer4Rows>
        <BorderContainer4Rows className="cs-modal cs-modal-3 cs-modal-last">
          <RoundedButtonOrange as="a" href={orderAnalysisButton} target="_blank" rel="noreferrer">{t(`home.CaseStudy.modal.button`)}</RoundedButtonOrange>
        </BorderContainer4Rows>
      </CsModalContainer>
    </div>
  );

  const props = {
    children: Children(),
  }

  const modalStyles = {
    overlay: {
      zIndex: 103,
      background: 'rgba(10,10,10,0.9)',
      backdropFilter: 'blur(40px)',
      WebkitBackdropFilter: 'blur(40px)',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    content: {
      margin: 'auto',
      padding: '0',
      inset: '0',
      width: '100%',
      height: '100%',
      boxSizing: 'border-box',
      border: "1px solid #302C29",
      borderRadius: '0px',
      background: 'transparent',
    }
  }

  return (
    <>
      <BaseModal
        isModal={isModal}
        props={props}
        modalStyles={modalStyles}
      />
      <CaseStudyComponent>
        <div className="container">
          <StaticImage
            className="background-cs mobile"
            src="../../../../images/case-study/case-study-background_mobile.webp"
            alt="apolonia"
            placeholder="apolonia"
            loading="lazy"
          />
          <StaticImage
            className="background-cs desktop"
            src="../../../../images/case-study/case-study-background.webp"
            alt="apolonia"
            placeholder="apolonia"
            loading="lazy"
          />
          <div className="case-study-top">
            <RoundedInfoTile>
              <p>{t('home.CaseStudy.case-study')}</p>
            </RoundedInfoTile>
            <h2>{t('home.CaseStudy.title')}</h2>
            <p className="p-new-model-16">
              {t('home.CaseStudy.description')}
            </p>
          </div>
          <StaticImage
            className="apolonia-cs"
            src="../../../../images/case-study/apolonia-logo.webp"
            alt="apolonia"
            placeholder="apolonia"
            loading="lazy"
          />
          <BorderContainer4Rows className="image-cs-container">
            <StaticImage
              className="apolonia-image"
              src="../../../../images/case-study/apolonia-image.webp"
              alt="apolonia img"
              placeholder="apolonia img"
              loading="lazy"
            />
          </BorderContainer4Rows>
          <RoundedButtonOrange onClick={openModal}>
            {t('home.CaseStudy.button')}
          </RoundedButtonOrange>
        </div>
      </CaseStudyComponent>
    </>
  )
}
export default CaseStudy
