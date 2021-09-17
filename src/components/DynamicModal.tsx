import React from 'react';
import ReactModal from 'react-modal';
import '../style/dynamic-modal.css';
import {connect} from "react-redux";
import {closeDynamicModal} from "../redux/actions";

export interface IDynamicModalProps {
    closeDynamicModal: () => void;
    modalData: {
        modalType: string;
        title?: string;
        bodyText?: string;
        okButtonText?: string;
        cancelButtonText?: string;
        okButtonFunction?: () => void;
        cancelButtonFunction?: () => void;
    }
}

export interface IDynamicModalState {
    isOpen: boolean;
}

class DynamicModal extends React.Component<IDynamicModalProps, IDynamicModalState> {
    constructor(props: any) {
        super(props);
        this.state = {
            isOpen: true,
        }

        this.closeModal = this.closeModal.bind(this);
    }

    public static defaultProps = {
        closeDynamicModal: void 0,
        modalData: {
            modalType: 'default',
        }
    }

    componentDidMount() {
        switch (this.props.modalData.modalType) {
            case 'successNotification':
                setTimeout(() => {
                    this.closeModal();
                }, 2000);
            default:
                console.log('this.props.modalType: ', this.props.modalData.modalType);
        }
    }

    closeModal (): void {
        this.setState({
            isOpen: false,
        }, () => {
            this.props.closeDynamicModal();
        })
    }

    render(): JSX.Element {
        const {title, bodyText, okButtonText, cancelButtonText, okButtonFunction, cancelButtonFunction} = this.props.modalData;
        console.log('title: ', title);
        return (
            <ReactModal
                ariaHideApp={false}
                isOpen={this.state.isOpen}
                role='dialog'
                shouldCloseOnEsc={true}
                closeTimeoutMS={500}
                shouldCloseOnOverlayClick={false}
                bodyOpenClassName='dynamicModalOpen'
                overlayClassName='dynamicModalOverlay'
                className='dynamicModalBody'
            >
                <div className={`dynamicModalContainer ${this.props.modalData.modalType}`}>
                    <div className='dynamicModalContent'>
                        {(title) && (
                            <h2 className='modal-title'>{title}</h2>
                        )}
                        {(bodyText) && (
                            <div className="modal-body">{bodyText}</div>
                        )}
                        {(okButtonText || cancelButtonText) && (
                            <div className="button-container">
                                {(okButtonText) && (
                                    <button className="okBtn" onClick={okButtonFunction}>{okButtonText}</button>
                                )}
                                {(cancelButtonText) && (
                                    <button className="cancelBtn" onClick={cancelButtonFunction}>{cancelButtonText}</button>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </ReactModal>
        )
    }
}

const mapDispatchToProps: object = {
    closeDynamicModal
}

export default connect(null, mapDispatchToProps)(DynamicModal);
