 import React from 'react';
import './Modal.css'; // لو حابة تضيفي ستايل خاص

export default function Modal({ imgSrc, onClose }) {
  if (!imgSrc) return null;

  return (
    <div className="modal d-flex   justify-content-center  align-items-center bg-dark bg-opacity-75" tabIndex="-1" 
    onClick={onClose}>
      <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-body p-0">
            <img src={imgSrc} className="w-100" alt="modal preview" />
          </div>
          <div className="modal-footer justify-content-center">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
