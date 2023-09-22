import React, { useState } from 'react';
import './addLinkModal.css';
import { createLink } from '../api';

interface AddLinkModalProps {
  onClose: () => void;
}

const AddLinkModal: React.FC<AddLinkModalProps> = ({ onClose }) => {
  const [linkTitle, setLinkTitle] = useState('')
  const [linkUrl, setLinkUrl] = useState('')
  const [isValidUrl, setValidUrl] = useState(false)


  const handleLinkTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLinkTitle(event.target.value)
}

const handleLinkUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValidUrl(event.target.checkValidity())
    setLinkUrl(event.target.value)
}


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = {
      link_name: linkTitle,
      link_url: linkUrl
    }
    createLink(params)
    onClose();
  };

  return (
    <div className="link-modal">
      <div className="link-content">
        <h2>Add New Link</h2>
        <form onSubmit={handleSubmit}>
        <label>
          Link Name:
          <input type="text" value={linkTitle} onChange={handleLinkTitleChange} />
      </label>
      
      <label>
          Link Url:
          <input type="url" value={linkUrl} onChange={handleLinkUrlChange} />
          { !isValidUrl ? (
               <p style={{ color: 'red' }}> Enter a valid URL</p>
              ) : (
              <p></p>
          )}
      </label>
          <button type="submit" disabled={!isValidUrl}>Add Link</button>
        </form>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default AddLinkModal;
