import React from 'react'
import './cover.css'
function cover() {
    return (
        <section className='cover'>
            <div className='container'>
                <div className='cover-input'>
                    <input type="text" placeholder='Searching ...' />
                </div>
                <div className='cards '>
                    <div className='cover-text'>
                        <h2>
                            All posts
                        </h2>
                    </div>
                    <hr />
                    <div className='cover-cards d-flex flex-wrap gap-5'>
                        <div className='search-card d-flex '>
                            <div className="left-c">
                                <img src="./images/nn.svg" alt="error" />
                            </div>
                            <div className="right-c">
                                <span>
                                    STARTUP
                                </span>
                                <h2>
                                    Design tips for designers that cover <br />  everything you need
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
                                </p>
                            </div>
                        </div>
                        <div className='search-card d-flex '>
                            <div className="left-c">
                                <img src="./images/glki.svg" alt="error" />
                            </div>
                            <div className="right-c">
                                <span>
                                    Business
                                </span>
                                <h2>
                                    How to build rapport with your web design <br /> clients
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
                                </p>
                            </div>
                        </div>
                        <div className='search-card d-flex '>
                            <div className="left-c">
                                <img src="./images/nn.svg" alt="error"  />
                            </div>
                            <div className="right-c">
                                <span>
                                    STARTUP
                                </span>
                                <h2>
                                    Logo design trends to avoid in 2022
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
                                </p>
                            </div>
                        </div>
                        <div className='search-card d-flex '>
                            <div className="left-c">
                                <img src="./images/nn.svg" alt="error" />
                            </div>
                            <div className="right-c">
                                <span>
                                    TECHNOLOGY
                                </span>
                                <h2>
                                    8 Figma design systems you can download <br /> for free today
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
                                </p>
                            </div>
                        </div>
                        <div className='search-card d-flex '>
                            <div className="left-c">
                                <img src="./images/glki.svg" alt="error" />
                            </div>
                            <div className="right-c">
                                <span>
                                    Business
                                </span>
                                <h2>
                                    How to build rapport with your web design <br /> clients
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default cover
