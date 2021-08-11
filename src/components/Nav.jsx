            <div className={slider ? "d-flex flex-column flex-shrink-0 p-3 bg-light slider__on _slide_" : "d-flex flex-column flex-shrink-0 p-3 bg-light _slide_ mobile_slider_off"} >
                <div className="d-flex mb-3 mb-md-0 justify-content-between __user_header">
                    <div className="user__info">
                        {IsUserIsTrue && IsUserIsTrue.length > 0 ?
                            <div className="branding_name">
                                <div className="user__svg">
                                    <User />
                                </div>
                                <div className="name_and_mail">
                                    <h4> {`${IsUserIsTrue[0].F_Name} ${IsUserIsTrue[0].L_Name}`} </h4>
                                    <Check />
                                </div>
                                <Link to='/user/login/signup/' className='_view_profile'>view profile</Link>
                            </div>
                            : <Link to='/user/login/signup/' className='btn btn-outline-danger to_login'>Login</Link>}
                    </div>
                    <div className="close__Slider">
                        <button className='close-slider' onClick={() => setSlider(false)} >
                            <Cross />
                        </button>
                    </div>
                </div>

                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link to='/' className="nav-link link-dark" >
                            all shop
                        </Link>
                    </li>
                    <li>
                        <Link to='/all/popular/products/' className="nav-link link-dark">
                            populer
                        </Link>
                    </li>
                    <li>
                        <Link to='/all/products/of/months' className="nav-link link-dark">
                            product of month
                        </Link>
                    </li>
                    <li>
                        <Link to='/products/catagory/recomanded/' className="nav-link link-dark">
                            Recomanded
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle link-dark" to='/' id="dropdown08" data-bs-toggle="dropdown" aria-expanded="false">Catagory</Link>
                        <ul className="dropdown-menu" aria-labelledby="dropdown08">
                            <li><Link className="dropdown-item" to='/products/catagory/mobile'>mobile</Link></li>
                            <li><Link className="dropdown-item" to='/products/catagory/accesories/laptop'>Laptop product</Link></li>

                            <li><Link className="dropdown-item" to='/products/catagory/ComputerAccosories/'>Computer accessories</Link></li>
                            <li><Link className="dropdown-item" to='/products/catagory/Camara/all'>camara</Link></li>

                        </ul>
                    </li>

                    <li>
                        <Link to='/catagory/brands/' className="nav-link link-dark">
                            Brands
                        </Link>
                    </li>
                    <li>
                        <button className="nav-link link-dark contec__button" onClick={
                            () => window.open('mailto:abcdefgh@gmail.com')
                        }>
                            contect us
                        </button>
                    </li>
                </ul>
            </div>