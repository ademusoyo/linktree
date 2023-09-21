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

const LinkPage: React.FC = () => {

    const [links, setLinks] = useState<Href[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
      };
    
      const handleCloseModal = () => {
        setIsModalOpen(false);
      };

    useEffect(()=> {

        if(links.length === 0) {
            getLinks()
            .then(data => {
                setLinks(data)
            })    
        }
    }, [links])


    return (
        <>
            <h1>Welcome! These are all your links!</h1>
            <div className='links-grid'>
            {

                links.map((link) => (
                    <Link key={link.id} id={link.id} linkName={link.link_name}
                    linkUrl={link.link_url} />
                ))
            }
            </div>
            <button onClick={handleOpenModal} className="modal-button">Add New Link</button>
            {isModalOpen && <AddLinkModal onClose={handleCloseModal} />}
        </>
    )



}

export default LinkPage;