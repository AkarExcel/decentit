import React, { useState } from 'react'
import PortableText from 'react-portable-text'
import { sanityClient, urlFor } from '../../sanity'
import { isValid, parseISO, format } from 'date-fns'
import { data } from 'autoprefixer'
import MorePost from '../../component/MorePost/MorePost'
import Reply from '../../component/Reply/Reply'
import Comment from '../../component/Comments/Comment'
import Replies from '../../component/Reply/Replies'

function post({post, morePost}) {


  return (
    <main className='container pt-32 bg-white'>
        <img className='w-full h-40 md:h-60 object-cover'
        src={urlFor(post.mainImage).url()}
        alt=""
        />

        <article className='mt-4 md:mt-10'>
            <h1 className='font-bold md:text-4xl'>{post.title}</h1>
            <div className='flex items-center '> 
                <p className='flex'>By<span className='text-blue-400 ml-2'> {post.author.name}</span> /
                <time className='ml-1' dateTime={post.publishedAt}>{format(parseISO(post.publishedAt), 'LLLL	d, yyyy')}</time>
                </p> 
                <img className="w-10 h-10 ml-4 rounded-full" src={urlFor(post.author.image).url()} alt=""/>
            </div>
            
            <div className='mt-10'>
                <PortableText  
                className=''
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                content={post.body}
                serializers = {{
                    h1: (props) => (
                        <h1 className='text-3xl font-bold my-5' {...props} />
                        ),
                    h2: (props) => (
                        <h2 className='text-xl font-bold my-5' {...props} />
                        ),
                    li: ({children}) => (
                        <li className='ml-8 list-disc' >
                            {children}
                        </li>
                    ),
                    blockquote: ({children}) => (
                        <blockquote className='mx-4 italic font-thin text-slate-400 my-5'>{children}</blockquote>
                    )
                    ,
                    link: ({href,children}) => (
                        <a href={href} className="text-blue-500 hover:underline">
                            {children}
                        </a>
                    )
                }}
                />
            </div>
        </article>
        <br></br>
    <Comment 
    post= {post}
    />

   {/* comments  */}
   
   <div className="container px-0 mx-auto sm:px-5">
   <h3 className='text-2xl'>Comments</h3>
   <br></br>
    {post.comments.map((comment) => (
    <div key={comment._id} className="flex-col mt-1 w-full py-4 mx-auto bg-white border-b-2 shadow-blue-200
    border-r-2 border-gray-200 sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm md:w-[80%]">
            <div className="flex items-center flex-1 px-4 font-bold leading-tight">{comment.name}
                <span className="ml-2 text-xs font-normal text-gray-500">
                <time className='ml-1' dateTime={comment._updatedAt}>
                    {format(parseISO(comment._updatedAt), 'LLLL	d, yyyy')}
                </time>
                </span>
            </div>
            <div className="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">
                {comment.comment}
            </div>
            <Reply 
            comment={comment}/>
            <hr className="my-2 ml-16 border-gray-200"></hr>
            <Replies replies={comment.reply} />
            
            
    </div>
    ))}
   </div>
        {/* More Post */}
    <MorePost morePost={morePost} />
    </main>
  )
}

export default post

export const getStaticPaths = async() => {
    const query = `*[_type == 'post']{
        _id,
        slug{
            current
        },
    }`

    const post = await sanityClient.fetch(query)

    const paths = post.map(post => ({
        params: {
            slug: post.slug.current
        }
        
    }))

    return{
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async({params}) => {
    const query = `*[_type == "post" && 
    slug.current == $slug ][0]{
      _id,
      publishedAt,
      title,
      author -> {
          image,
          name
      },
     "comments": *[
          _type == "comment" && 
          post._ref == ^._id &&
          approved == true
      ]{
        name,
        _id,
        _updatedAt,
        comment,
        "reply": *[
            _type == "reply" && 
            comment._ref == ^._id &&
            approved == true
        ],
      },
      description,
      mainImage,
      slug,
      body,
  }`
  const postFields = `
  _id,
  name,
  title,
  description,
  'date': publishedAt,
  'slug': slug.current,
  'coverImage': mainImage,
  author -> {
    image,
    name
},
`
const moreQuery = `*[_type == "post" && slug.current != $slug] | order(publishedAt desc, _updatedAt desc){
    ${postFields}
    body,
  }[0...2]`

    const post = await sanityClient.fetch(query, {
        slug: params?.slug
    })

    const morePost = await sanityClient.fetch(moreQuery, {
        slug: params?.slug
    })

    if(!post){
        return{
            notFound: true
        }
    }

    return {
        props: {
            post,morePost
        },
        revalidate: 3600,
    }
}