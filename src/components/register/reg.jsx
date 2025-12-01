import React from 'react'
import './reg.css'
function reg() {
    return (
        <section className='reg'>
            <div className='container'>
                <div className='reg-text d-flex align-items-center justify-content-center'>
                    <span>Register</span>
                </div>
                <div className='reg-input d-flex flex-column align-items-center justify-content-center'>
                    <input type="text" placeholder='Firstname' />
                    <input type="text" placeholder='Lastname' />
                    <input type="text" placeholder='Username' />
                    <input type="text" placeholder='Password' />
                    <input type="text" placeholder='Confirm' />
                </div>
                <div className='reg-button d-flex align-items-center justify-content-center p-3'>
                    <button>
                        Register
                    </button>
                </div>
            </div>
        </section>
    )
}

export default reg
