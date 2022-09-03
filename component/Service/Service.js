import React from 'react'
import {ChevronForwardOutline, CloseOutline} from "react-ionicons"

const Service = () => {
  const service = [
    {
      id: 1,
      title: "Cloud Databases"
    },
    {
      id: 2,
      title: "Website Hosting"
    },
    {
      id: 3,
      title: "Remote Desktop"
    },
    {
      id: 4,
      title: "File Backup"
    },

  ]
  const bests = [
    {
      id: 1,
      title: "Laravel Web Development"
    },
    {
      id: 2,
      title: "Design and Development"
    },
    {
      id: 3,
      title: "Android Apps Development"
    },
    {
      id: 4,
      title: "React Web Development"
    },

  ]
  return (
    <div>
        <section className="service" id="service">
        <div className="container">

          <figure className="service-banner">
            <img src="./assets/images/service-1.png" alt="Illustration art" loading="lazy" className="w-100"/>
          </figure>

          <div className="service-content">

            <p className="section-subtitle">Services We Offer</p>

            <h2 className="h2 section-title">We are here, to help your startup business</h2>

            <ul className="service-list">
              {service.map(service => (
                <li key={service.id} className="service-item">
                <div className="service-item-icon">
                  <ChevronForwardOutline />
                </div>
                <h3 className="h3 service-item-title">{service.title}</h3>

                </li>
              ))

              }              

            </ul>

          </div>

          <figure className="service-banner">
            <img src="./assets/images/service-2.png" alt="Illustration art" loading="lazy" className="w-100"/>
          </figure>

          <div className="service-content">

            <p className="section-subtitle">Our Services</p>

            <h2 className="h2 section-title">Best IT and technology service in your area</h2>

            <ul className="service-list">
              {
                bests.map(best => (
                  <li key={best.id} className="service-item">

                  <div className="service-item-icon">
                    <ChevronForwardOutline/>
                  </div>

                  <h3 className="h3 service-item-title">{best.title}</h3>

                </li>
                ))
              }
              

            </ul>

          </div>

        </div>
      </section>

    </div>
  )
}

export default Service