import React, { useState } from "react"
import Modal from "react-modal"
import { BaseModalContainer } from "./styled.components"

const BaseModal = ({ isModal, props, modalStyles }) => {
  // eslint-disable-next-line no-unused-vars
  const [boxStyles, setBoxStyles] = useState(modalStyles)

  return (
    <>
      <Modal
        isOpen={isModal}
        style={boxStyles}
        shouldCloseOnOverlayClick={true}
        ariaHideApp={false}
      >
        <BaseModalContainer>{props.children}</BaseModalContainer>
      </Modal>
    </>
  )
}

export default BaseModal
