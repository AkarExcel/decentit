import Link from 'next/link'
import React from 'react'
import { urlFor } from '../../sanity'

const MorePost = ({morePost}) => {
    
  return (
    <section>
      <h2 className="my-8 text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
        More Stories
      </h2>
      <div className="flex flex-wrap justify-between pt-12 -mx-6">
      {morePost.map((post => (
        <Link key={post._id} href={`/post/${post.slug.current}`}>
        <div  className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink group cursor-pointer overflow-hidden">
        <div className="flex-1 flex-row bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
            <a href="#" className="flex flex-wrap no-underline hover:no-underline">	
                <img src={urlFor(post.coverImage).url()} 
                    className="h-full w-full rounded-t object-cover group-hover:scale-105 transition-transform
                    duration-200 ease-in-out pb-6"/>
                <p className="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
                <div className="w-full font-bold text-xl text-gray-900 px-6">{post.title}</div>
                <p className="text-gray-800 text-base px-6 mb-5">
                    {post.description}
                </p>
            </a>
        </div>
        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
            <div className="flex items-center justify-between">
                <img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src={urlFor(post.author.image).url()} alt="Avatar of Author"/>
                <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
            </div>
        </div>
    </div>
    </Link>	
      )))}
      </div>
    </section>
  )
}

export default MorePost