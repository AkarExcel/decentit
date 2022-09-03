import React from 'react'
import {ChevronForwardOutline, CloseOutline} from "react-ionicons"

const Service = () => {
  const data = [
    {
      id: 1,
      title: "Zero Configuration",
      image: "./assets/images/features-icon-1.png",
      text: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Sed est non feugiat sagittis."
    },
    {
      id: 2,
      title: "Code Security",
      image: "./assets/images/features-icon-2.png",
      text: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Sed est non feugiat sagittis."
    },
    {
      id: 3,
      title: "Team Management",
      image: "./assets/images/features-icon-3.png",
      text: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Sed est non feugiat sagittis."
    },
    {
      id: 4,
      title: "Access Controlled",
      image: "./assets/images/features-icon-4.png",
      text: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Sed est non feugiat sagittis."
    }
    
  ]
  return (
    <>
        <section className="features" id="features">
        <div className="container">

          <p className="section-subtitle">How Can Help You</p>

          <h2 className="h2 section-title">We’re helping teams do their best work</h2>

          <ul className="features-list">
            {data.map(a => (
              <li key={a.id}>
              <div className="features-card">
              <div className="card-icon">
                  <img src={a.image} alt="Illustration icon"/>
                </div>
                <h3 className="h3 card-title">{a.title}</h3>
            
              <p className="card-text">
                  {a.text}
                </p>
                <a href="#" className="card-link">
                  <span>Learn More</span>
                  <ChevronForwardOutline />
                  
                </a>
                </div>
                </li>
            ))}

          </ul>

        </div>
      </section>
    </>
  )
}

export default Service