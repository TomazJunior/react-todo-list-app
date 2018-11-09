import React, {Component} from 'react';
import './ModalDialog.css';
export default class ModalDialog extends Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(onClose) {
    onClose();
  }

  render() {
    const onClose = this.props.onClose;
    const children = this.props.children;
    return (
      <div className='modalOverlay'>
        <dialog open>
          <span onClick={() => this.handleClose(onClose)} className="modalDialogClose">x</span>  
          {children}
        </dialog>
      </div>
    );
  }
}