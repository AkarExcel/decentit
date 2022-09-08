import React from 'react'


const Hero = () => {
  return (
    <div>
        <section className="hero" id="home">

        <img src="./assets/images/shape1.png" alt="Illustration art" className="shape shape-1"/>
        <img src="./assets/images/shape3.png" alt="Illustration art" className="shape shape-3"/>

        <div className="container">

        <figure className="hero-banner">
            <img src="./assets/images/hero-banner.png" alt="Illustration art" loading="lazy" className="w-100"/>
        </figure>

        <div className="hero-content">

            <h2 className="h1 hero-title">Secure IT solutions for a more secure environment</h2>

            <p className="section-text">
            Velit hendrerit sit auctor tempor sem. Congue mi tempor condimentum felis arcu, non cursus. Nulla pharetra
            porttitor sed
            platea arcu et leo odio.
            </p>

            <button className="btn btn-primary">
            <span>Get Started Now</span>

            <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>

        </div>

        </div>

        </section>
    </div>
  )
}

export default Hero