import React from 'react'
import './footer.css'
function footer() {
    return (
        <section className='footer '>
            <div className='container'>
                <div className='footer-body d-flex align-items-center justify-content-between'>
                    <div className='f-left'>
                        <p className='text-light'>
                            Finstreet 118 2561 Fintown <br />Hello@finsweet.com 020 7993 2905
                        </p>
                    </div>
                    <div className='f-right d-flex'>
                        <a href=""><img src="./images/in.svg" alt="error" /></a>
                        <a href=""><img src="./images/insta.svg" alt="error" /></a>
                        <a href=""><img src="./images/in.svg" alt="error" /></a>
                        <a href=""><img src="./images/insta.svg" alt="" /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default footer
