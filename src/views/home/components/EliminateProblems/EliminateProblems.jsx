import React, { useState } from "react"
import { EliminateProblemsComponent, EPModalContainer } from "./styled.components"
import { RoundedButtonSvg, RoundedButtonSvgDark, RoundedInfoTile } from "../../../../styled.components"
import { BorderContainer4Rows } from "../../../../components/BorderContainer/BorderContainer4Rows"
import { BorderContainerBottomRowsTop } from "../../../../components/BorderContainer/BorderContainerBottomRowsTop"
import { BorderContainerTopRowsBottom2 } from "../../../../components/BorderContainer/BorderContainerTopRowsBottom2"
import BaseModal from "../../../../components/BaseModal/BaseModal"
import Video from "../../../../components/Video/video"

const EliminateProblems = ({ t }) => {
  const [isModal, setIsModal] = useState(false);
  const [childrenContent, setChildrenContent] = useState();

  const openModal = (content) => {
    setChildrenContent(content);
    setIsModal(true);
  }

  const Children = () => (
    <EPModalContainer>
      <div className="video-container">
        <RoundedButtonSvgDark className="close-button" onClick={() => setIsModal(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 18L18 6M6 6L18 18" stroke="#FFE8D9" strokeLinejoin="round" />
          </svg>
        </RoundedButtonSvgDark>
        <Video src={childrenContent} />
      </div>
    </EPModalContainer>
  )

  const props = {
    children: Children()
  }

  const modalStyles = {
    overlay: {
      zIndex: 103,
      background: 'rgba(0,0,0,0.3)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
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
      border: "none",
      borderRadius: '0px',
      background: 'transparent',
      overflow: 'hidden'
    }
  }

  return (
    <>
      <BaseModal
        isModal={isModal}
        props={props}
        modalStyles={modalStyles}
      />
      <div className="container">
        <EliminateProblemsComponent>
          <div className="top-title">
            <RoundedInfoTile>
              <p>{t('home.EliminateProblems.eliminate-problems')}</p>
            </RoundedInfoTile>
            <h3>{t('home.EliminateProblems.title')}</h3>
            <p className="p-new-model-18">{t('home.EliminateProblems.description')}</p>
          </div>
          <BorderContainerBottomRowsTop />
          <div className="tiles-container">
            {[
              {
                id: 1,
                link: 'https://8attk966a4.ufs.sh/f/otwLApjIvmMnrNwCSv920sQtuNYePTwnmpXV9Fgz6rjiqK53'
              },
              {
                id: 2,
                link: 'https://8attk966a4.ufs.sh/f/otwLApjIvmMnX3fKyxwSot7NABhqO0wvmrDz1gTpdn5ZV3Ie'
              },
              {
                id: 3,
                link: 'https://8attk966a4.ufs.sh/f/otwLApjIvmMnjsi8lHGbCe3thDaJKnuPgpw5UONi4TZmWV8G'
              },
            ]
              .map(item => (
                <BorderContainer4Rows key={item.id} className="tile-container">
                  <div className="tile-left">
                    <p style={{ color: '#FFE8D9' }} className="p-new-model-18">{t(`home.EliminateProblems.tile${item.id}-title`)}</p>
                    <p className="p-new-model-16">{t(`home.EliminateProblems.tile${item.id}-description`)}</p>
                  </div>
                  <div className="tile-right">
                    <RoundedButtonSvg onClick={() => openModal(item.link)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M2.92871 9.99995H17.0716M17.0716 9.99995L11.5716 4.5M17.0716 9.99995L11.5716 15.4999" stroke="#FFE8D9" strokeLinejoin="round" />
                      </svg>
                    </RoundedButtonSvg>
                  </div>
                </BorderContainer4Rows>
              ))
            }
          </div>
          <BorderContainerTopRowsBottom2 />
        </EliminateProblemsComponent>
      </div>
    </>
  )
}
export default EliminateProblems
