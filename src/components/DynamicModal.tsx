import React from 'react';

export interface IDynamicModalProps {
    title?: string;
    bodyText?: string;
    okButtonText?: string;
    cancelButtonText?: string;
    okButtonFunction?: () => void;
    cancelButtonFunction?: () => void;
}

class DynamicModal extends React.Component<IDynamicModalProps, any> {
    constructor(props: any) {
        super(props);
    }

    render(): JSX.Element {
        const {title, bodyText, okButtonText, cancelButtonText, okButtonFunction, cancelButtonFunction} = this.props;
        return (
            <div className='dynamicModalContainer'>
                {(title) && (
                    <div className='modal-title'>{title}</div>
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
        )
    }
}

export default DynamicModal;
