import React, {useState} from "react";
import './link.css'
import { updateLink, deleteLink } from "../api";

interface LinkProps {
    id: number;
    linkName: string;
    linkUrl: string;
}

const Link: React.FC<LinkProps> = ({ id, linkName, linkUrl }) => {
    const [linkTitle, setLinkTitle] = useState(linkName);
    const [linkHref, setLinkHref] = useState(linkUrl);
    const [isEditing, setIsEditing] = useState(false);
    const [isValidUrl, setValidUrl] = useState(true);

    const editLink = () => {
        setIsEditing(!isEditing)
    }

    const handleLinkTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLinkTitle(event.target.value)
    }

    const handleLinkUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValidUrl(event.target.checkValidity())
        setLinkHref(event.target.value)
    }
    


    const saveLink = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const bodyParams = {
            link_name: linkTitle,
            link_url: linkHref
        }

        updateLink(id, bodyParams)
        window.location.replace(window.location.href)
    }

    const removeLink = () => {
        deleteLink(id)
        window.location.replace(window.location.href)
    }

    if (isEditing) {
        return(
            <div className="link-grid"  data-testid="link-test-grid">
                    <form className="link-form" onSubmit={saveLink}>
                        <label>
                            Link Name:
                            <input type="text" value={linkTitle} onChange={handleLinkTitleChange} />
                        </label>
                        
                        <label>
                            Link Url:
                            <input type="url" value={linkHref} onChange={handleLinkUrlChange} />
                            { !isValidUrl ? (
                                <p style={{ color: 'red' }}>Invalid URL</p>
                            ) : (
                                <p></p>
                             )}
                        </label>
                        <button className="save-button" type="submit" disabled={!isValidUrl}>Save</button>
                    </form>
            <button className="edit-button" onClick={editLink}>Close</button>
        </div>
        )
    } else {
        return (
            <>
             <div className="link-grid">
                <a href={linkHref} target="_blank" rel="noopener noreferrer">
                    {linkTitle}
                </a>
                <button className="edit-button" onClick={editLink}>Edit</button>
                <button className="delete-button" onClick={removeLink}>Delete</button>
            </div>
            </>
            
    
        )
    }

}


export default Link;