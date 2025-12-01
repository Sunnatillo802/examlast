import React from 'react'
import './start.css'
function start() {
    return (
        <section className='start'>
            <div className='container'>
                <div className='start-text'>
                    <div className='span'>
                        <span className='mb-4 animate__animated animate__backInLeft animate__delay-1s'>
                            Posted on startup
                        </span>
                    </div>

                    <h1 className='animate__animated animate__backInLeft animate__delay-0.3s'>
                        Step-by-step guide to choosing <br /> great font pairs
                    </h1>
                    <h6 className='animate__animated animate__backInLeft animate__delay-0.3s'>
                        By <span className='text-warning'>James West</span> | May 23, 2022
                    </h6>
                    <p className='animate__animated animate__backInLeft animate__delay-0.3s'>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu <br /> fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                    </p>
                </div>
                <div className='start-button animate__animated animate__backInLeft animate__delay-0.3s'>
                    <button>
                        Read More ›
                    </button>
                </div>
            </div>
        </section>
    )
}

export default start
