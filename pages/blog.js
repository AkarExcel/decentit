import Link from 'next/link'
import React from 'react'
import { sanityClient, urlFor } from '../sanity'

const blog = ({posts}) => {
  return (
    <div className='container pt-32 bg-white'>
    <div className='flex justify-between items-center bg-slate-100 border-b border-black py-10'>
      <div className='px-2 md:px-10 space-y-5'>
        <h1 className='text-xl font-bold md:text-4xl max-w-xl'>KNOWLEDGE BASE</h1>
        <h2>Become a Better Developer Today.</h2>
      </div>
      <img className='hidden md:inline-flex md:h-20 lg:h-full' src='./logo.png' />
    </div>

    {/* posts */}
    <div className="flex flex-wrap justify-between pt-12 -mx-6">
    {posts.map((post,index) => (
      <Link key={post._id} href={`/post/${post.slug.current}`}>
        {index == 0 ? 
				<div className="flex h-full bg-white rounded overflow-hidden shadow-lg mt-5">
					<a href="post.html" className="flex flex-wrap no-underline hover:no-underline">
						<div className="w-full md:w-2/3 rounded-t">	
							<img src={urlFor(post.mainImage).url()} className="h-full w-full shadow"/>
						</div>

						<div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
							<div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
								<p className="w-full text-gray-600 text-xs md:text-sm pt-6 px-6">GETTING STARTED</p>
								<div className="w-full font-bold text-2xl text-gray-900 px-6">{post.title}</div>
								<p className="text-gray-800 text-base px-6 mb-5">
									{post.description}
								</p>
							</div>

							<div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
								<div className="flex items-center justify-between">
									<img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src={urlFor(post.mainImage).url()} alt="Avatar of Author"/>
									<p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
								</div>
							</div>
						</div>

					</a>
				</div>
			:
      <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink group cursor-pointer overflow-hidden">
						<div className="flex-1 flex-row bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
							<a href="#" className="flex flex-wrap no-underline hover:no-underline">	
								<img src={urlFor(post.mainImage).url()} 
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
      }
      </Link>
    ))}
  </div>
    </div>
  )
}

export default blog

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    author -> {
      name,
      image
    },
    description,
    mainImage,
    slug
  }`

  const posts = await sanityClient.fetch(query)
  return{
    props: {
      posts
    }
  }
}