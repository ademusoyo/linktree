import React, { useState } from 'react';

const AddLinkModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={togglePopup}>Open Popup</button>
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-btn" onClick={togglePopup}>
              Close
            </button>
            <p>Hello World</p>
          </div>
        </div>
      )}
    </>
  );
};

export default AddLinkModal;
