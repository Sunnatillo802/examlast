import React from 'react'
import './category.css'
function cotegory() {
  return (
    <section className='category'>
      <div className='container'>
          <div className='cat-head'>
              <h2>Choose A Catagory</h2>
          </div>
          <div className='cards mt-4 d-flex  flex-wrap'>
              <div className="cat-card">
                <img src="./images/Icon (1).svg" alt="error" />
                  <h4>
                    Business
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  </p>
              </div>
               <div className="cat-card bg-warning ">
                <img src="./images/Icon (1).svg" alt="error" />
                  <h4>
                    Startup
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  </p>
              </div>
               <div className="cat-card">
                <img src="./images/Icon (1).svg" alt="error" />
                  <h4>
                    Economy
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  </p>
              </div>
               <div className="cat-card">
                <img src="./images/Icon (1).svg" alt="error" />
                  <h4>
                    Techology
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  </p>
              </div>
          </div>
      </div>
    </section>
  )
}

export default cotegory
