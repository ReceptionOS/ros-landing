import React, { useState } from 'react';
import Modal from 'react-modal';
import { BaseModalContainer } from './styled.components';

const BaseModal = ({
    // t,
    isModal,
    // setIsModal,
    props,
    modalStyles
}) => {

    const [boxStyles, setBoxStyles] = useState(modalStyles);

    return (
        <>
            <Modal
                isOpen={isModal}
                style={boxStyles}
                shouldCloseOnOverlayClick={true}
                ariaHideApp={false}>
                <BaseModalContainer>
                    {props.children}
                </BaseModalContainer>
            </Modal>
        </>
    );
};

export default BaseModal;
