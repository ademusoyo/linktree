import React, { useEffect, useState} from 'react';
import './links.css'
import Link from '../Link/link';
import { getLinks } from '../api';
import AddLinkModal from '../AddLinkModal/addLinkModal';

type Href = {
    id: number;
    link_name: string;
    link_url: string;
}

const Links: React.FC = () => {

    const [links, setLinks] = useState<Href[]>([]);

    useEffect(()=> {

        if(links.length == 0) {
            getLinks()
            .then(data => {
                setLinks(data)
            })    
        }
    }, [links])


    return (
        <div className='links-grid'>
            {

                links.map((link) => (
                    <Link id={link.id} linkName={link.link_name}
                    linkUrl={link.link_url} />
                ))
            }

            {/* <button className="add-button">Add Link</button> */}

            <AddLinkModal />

        </div>
    )



}

export default Links;