import React from 'react'

const Newsletter = () => {
    const addEmail = event => {
        event.preventDefault() // don't redirect the page
        // where we'll add our form logic
      }
  return (
    <div>
        <section className="newsletter" id="newsletter">
        <div className="container">

          <figure className="newsletter-banner">
            <img 
            src="./assets/images/newsletter.png" 
            alt="Illustration art" 
            loading="lazy" 
            className="w-100" 
            />
          </figure>

          <div className="newsletter-content">

            <p className="section-subtitle">Subscribe Our Newsletter</p>

            <h2 className="h2 section-title">The latest resources, sent to your inbox weekly</h2>

            <form onSubmit={addEmail} className="newsletter-form">
              <input 
              type="email" 
              name="email" 
              required 
              placeholder="Enter your email address" 
              className="input-field"
              />
              <button type="submit" className="btn btn-primary">
                <span>Subscribe Now</span>
                <ion-icon name="chevron-forward-outline"></ion-icon>
              </button>
            </form>

          </div>

        </div>
      </section>

    </div>
  )
}

export default Newsletter