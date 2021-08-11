import React from 'react'
import SectionTitle from '../../pages/SectionTitle';
import Photos from './Photos.data';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';

const ClientsPhotos = () => {
    return (
        <section className='clients_photos'>
            <SectionTitle title='Clients Brands' />
            <div className="wrapper">
                {Photos.map(e => {
                    return <div className="img_wrapper" key={e.id}>
                        <div className='img_holder'>
                            <img src={e.img} alt="..." />
                        </div>
                        <div className='content'>
                            <span>
                                <RoomOutlinedIcon /> {e.location}
                            </span>
                        </div>
                    </div>
                })}
            </div>
        </section>
    )
}

export default ClientsPhotos
