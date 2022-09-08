import React from 'react'
import { sanityClient, urlFor } from '../../sanity'
import {PricetagOutline, CalendarOutline} from "react-ionicons"

const Blog = ({post}) => {
  return (
    <div>
        <section className="blog" id="blog">
        <div className="container">

          <p className="section-subtitle">Latest News</p>

          <h2 className="h2 section-title">Our latest articles & resources</h2>

          <ul className="blog-list">
          {post.map(posts => (
            <li key={posts._id}>
            <div className="blog-card">

              <figure className="blog-banner">
                <a href="#">
                  <img src={urlFor(post.mainImage).url()} alt="How is technology working with new things?"
                    loading="lazy" className="w-100"/>
                </a>
              </figure>

              <div className="blog-content">

                <ul className="blog-meta-list">

                  <li className="blog-meta-item">
                   <PricetagOutline/>

                    <a href="#" className="blog-meta-link">Technology</a>
                  </li>

                  <li className="blog-meta-item">
                    <CalendarOutline />

                    <time className="blog-meta-time" dateTime="2022-02-25">{new Date(posts.publishedAt).toLocaleDateString()}</time>
                  </li>

                </ul>

                <h3 className="h3 blog-title">
                  <a href="#">{posts.title}</a>
                </h3>

              </div>

            </div>
          </li>
          ))}
            <li>
              <div className="blog-card">

                <figure className="blog-banner">
                  <a href="#">
                    <img src="./assets/images/blog-1.jpg" alt="How is technology working with new things?"
                      loading="lazy" className="w-100"/>
                  </a>
                </figure>

                <div className="blog-content">

                  <ul className="blog-meta-list">

                    <li className="blog-meta-item">
                      <ion-icon name="pricetag-outline"></ion-icon>

                      <a href="#" className="blog-meta-link">Technology</a>
                    </li>

                    <li className="blog-meta-item">
                      <ion-icon name="calendar-number-outline"></ion-icon>

                      <time className="blog-meta-time" dateTime="2022-02-25">25 Feb, 2022</time>
                    </li>

                  </ul>

                  <h3 className="h3 blog-title">
                    <a href="#">How is technology working with new things?</a>
                  </h3>

                </div>

              </div>
            </li>

            <li>
              <div className="blog-card">

                <figure className="blog-banner">
                  <a href="#">
                    <img src="./assets/images/blog-2.jpg" alt="Top 10 important tips on IT services and design"
                      loading="lazy" className="w-100"/>
                  </a>
                </figure>

                <div className="blog-content">

                  <ul className="blog-meta-list">

                    <li className="blog-meta-item">
                      <ion-icon name="pricetag-outline"></ion-icon>

                      <a href="#" className="blog-meta-link">Design</a>
                    </li>

                    <li className="blog-meta-item">
                      <ion-icon name="calendar-number-outline"></ion-icon>

                      <time className="blog-meta-time" dateTime="2022-02-25">25 Feb, 2022</time>
                    </li>

                  </ul>

                  <h3 className="h3 blog-title">
                    <a href="#">Top 10 important tips on IT services & design</a>
                  </h3>

                </div>

              </div>
            </li>

            <li>
              <div className="blog-card">

                <figure className="blog-banner">
                  <a href="#">
                    <img src="./assets/images/blog-3.jpg" alt="How our company works in different ways" loading="lazy"
                      className="w-100"/>
                  </a>
                </figure>

                <div className="blog-content">

                  <ul className="blog-meta-list">

                    <li className="blog-meta-item">
                      <ion-icon name="pricetag-outline"></ion-icon>

                      <a href="#" className="blog-meta-link">Startup</a>
                    </li>

                    <li className="blog-meta-item">
                      <ion-icon name="calendar-number-outline"></ion-icon>

                      <time className="blog-meta-time" dateTime="2022-02-25">25 Feb, 2022</time>
                    </li>

                  </ul>

                  <h3 className="h3 blog-title">
                    <a href="#">How our company works in different ways</a>
                  </h3>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>
    </div>
  )
}

export default Blog