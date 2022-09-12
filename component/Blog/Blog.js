import React from 'react'
import { sanityClient, urlFor } from '../../sanity'
import {PricetagOutline, CalendarOutline} from "react-ionicons"
import Link from 'next/link'

const Blog = ({posts}) => {
  console.log(posts[0].categories.title)
  return (
    <div>
        <section className="blog" id="blog">
        <div className="container">

          <p className="section-subtitle">Latest News</p>

          <h2 className="h2 section-title">Our latest articles & resources</h2>

          <ul className="blog-list">
          {posts.map(post => (
            <li key={post._id}>
            <div className="blog-card">

              <figure className="blog-banner">
              <Link href={`/post/${post.slug.current}`}>
                <a >
                  <img src={urlFor(post.mainImage).url()} alt="How is technology working with new things?"
                    loading="lazy" className="w-100"/>
                </a>
              </Link>	
              </figure>

              <div className="blog-content">

                <ul className="blog-meta-list">

                  <li className="blog-meta-item">
                   <PricetagOutline/>

                    {post.categories.map(category => (
                      <Link href="#">
                      <a className="blog-meta-link">{category.title}</a>
                      </Link>
                    ))}
                  </li>

                  <li className="blog-meta-item">
                    <CalendarOutline />

                    <time className="blog-meta-time" dateTime="2022-02-25">{new Date(post.publishedAt).toLocaleDateString()}</time>
                  </li>

                </ul>

                <h3 className="h3 blog-title">
                  <Link href={`/post/${post.slug.current}`}>
                  <a >{post.title}</a>
                  </Link>
                </h3>

              </div>

            </div>
          </li>
          ))}
          
          </ul>

        </div>
      </section>
    </div>
  )
}

export default Blog
