import React from 'react'
import './popular.css'
function popular() {
    return (
        <section className='popular'>
            <div className='container'>
                <div className='text'>
                    <h3 className='mb-5'>Popular blogs</h3>
                </div>
                <div className='cards d-flex justify-content-center align-content-center flex-wrap gap-3'>
                    <div className='cardd'>
                        <img src="./images/nn.svg" alt="error" />
                        <div className='card-text'>
                            <span>
                                By John Doe l Aug 23, 2021
                            </span>
                            <h2>
                                A UX Case Study Creating a Studious Environment for <br /> Students:
                            </h2>
                            <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                            </p>
                        </div>
                    </div>
                    <div className='cardd'>
                        <img src="./images/glki.svg" alt="error" />
                        <div className='card-text'>
                            <span>
                                By John Doe l Aug 23, 2021
                            </span>
                            <h2>
                                A UX Case Study Creating a Studious Environment for <br /> Students:
                            </h2>
                            <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                            </p>
                        </div>
                    </div>
                    <div className='cardd'>
                        <img src="./images/nn.svg" alt="error" />
                        <div className='card-text'>
                            <span>
                                By John Doe l Aug 23, 2021
                            </span>
                            <h2>
                                A UX Case Study Creating a Studious Environment for <br /> Students:
                            </h2>
                            <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default popular
