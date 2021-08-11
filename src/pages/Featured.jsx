import React from 'react'
import SectionTitle from './SectionTitle';


const Featured = () => {
    return (
        <section className='section_featured border-bottom'>
            <SectionTitle title='featured' />
            <div className="container">
                <div className="row bojoborol">
                    <div className="body">
                        <div className="img_container">
                            <img src="https://images.unsplash.com/photo-1610879774382-6aa6493a42ba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXJjaGljdHVyZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="featured" />
                        </div>
                        <span className='_sp_small_'>
                            hall canter
                        </span>
                    </div>
                    <div className="body">
                        <div className="img_container">
                            <img src="https://images.unsplash.com/photo-1614767057546-91543981cf74?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGFyY2hpY3R1cmV8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="featured" />
                        </div>
                        <span className='_sp_small_'>
                            st tomast
                        </span>
                    </div>
                    <div className="body">
                        <div className="img_container">
                            <img src="https://images.unsplash.com/photo-1620205335153-09f784b65c05?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXJjaGljdHVyZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="featured" />
                        </div>
                        <span className='_sp_small_'>
                            alpha tower
                        </span>
                    </div>
                    <div className="body">
                        <div className="img_container">
                            <img src="https://images.unsplash.com/photo-1624691470912-d22bfb1e4b8e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGFyY2hpY3R1cmV8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="featured" />
                        </div>
                        <span className='_sp_small_'>
                            ALIQUAM GRAVIDA MOLIS
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Featured
