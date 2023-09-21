import React, {useState} from "react";
import './link.css'

interface LinkProps {
    id: number;
    linkName: string;
    linkUrl: string;
}

const Link: React.FC<LinkProps> = ({ id, linkName, linkUrl }) => {
    const [linkTitle, setLinkTitle] = useState(linkName);
    const [linkHref, setLinkHref] = useState(linkUrl);

    return (
        <div className="link-grid">
            <a className="link" href={linkHref} target="_blank" rel="noopener noreferrer">
                {linkTitle}
            </a>
            <button className="edit-button">Edit</button>
            <button className="delete-button">Delete</button>
        </div>

    )

}


export default Link;