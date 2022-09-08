import React from 'react'
import Link from 'next/link'
import {ChevronForwardOutline, CloseOutline} from "react-ionicons"

const Service = ({services}) => {
  
  const servicesA = services.filter((service) => {
    return(
    service.id <= 4
  )})

 
  const bests = services.filter(service => service.id > 4)

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
              {servicesA.map(service => (
                <Link key={service.id} href={`/services/${service.title}`} passHref>
                <li className="service-item">
                <div className="service-item-icon">
                  <ChevronForwardOutline />
                </div>
                <h3 className="h3 service-item-title">{service.title}</h3>
                </li>
                </Link>
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
                  <Link key={best.id} href={`/services/${best.title}`} passHref>
                  <li  className="service-item">
                    
                   
                  <div className="service-item-icon">
                    <ChevronForwardOutline/>
                  </div>

                  <h3 className="h3 service-item-title">{best.title}</h3>
                </li>
                </Link>
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