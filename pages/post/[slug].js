import React, { useState } from 'react'
import PortableText from 'react-portable-text'
import { sanityClient, urlFor } from '../../sanity'
import {useForm, SubmitHandler} from "react-hook-form"
import { data } from 'autoprefixer'

function post({post}) {
    const [submited, setSubmitted] = useState(false)

    const {register, 
        handleSubmit, 
        formState: {errors},
    } = useForm()

    const onSubmit = async(data) => (
        await fetch('/api/createComment', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
        }).then(() => (
            setSubmitted(!submited),
            console.log(data)
        )).catch((err) => (
            console.log(err)
        ))
    )

  return (
    <main className='container pt-32 bg-white'>
        <img className='w-full h-40 md:h-60 object-cover'
        src={urlFor(post.mainImage).url()}
        alt=""
        />

        <article className='mt-4 md:mt-10'>
            <h1 className='font-bold md:text-4xl'>{post.title}</h1>
            <div className='flex items-center '> 
                <p className='flex'>By<span className='text-blue-400 ml-2'> {post.author.name}</span> - Published at {new Date(post.publishedAt).toLocaleDateString()}</p> 
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
    {submited ? 
        <div className='flex flex-col py-10 my-10 max-w-2xl text-center
        mx-auto bg-blue-400 text-white'>
            <h3 className='text-xl md:text-3xl font-bold '>Thank you for submitting your comment</h3>
            <p className='text-sm md:text-base'>Once it has been approved, it will appear Below!</p>
        </div>
        :   
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col max-w-2xl mx-auto my-10' action="">
            <div className='flex flex-col mb-5'>
            <p className='text-sm text-blue-500'>Enjoyed this article?</p>
            <h2 className='texl-3xl font-bold'>Leave a Comment Below</h2>
            </div>  

            <input 
            {...register("_id")}
            type='hidden'
            name='id'
            value={post._id}
            />
            <label className='block mb-5'><span className='flex flex-row space-x-1'>Name{errors.name?
            <span className='text-red-500'> *</span>:<span> *</span>}</span>
            <input 
            {...register("name", {required: true})}
            className='shadow border rounded py-2 px-4 form-input mt-1 ring-blue-500 w-full block 
            outline-none focus:ring'
             placeholder='John Doe' 
             type="name" required />
            </label>

            <label className='block mb-5'><span className='flex flex-row space-x-1'>Email{errors.email?
            <span className='text-red-500'> *</span>:<span> *</span>}</span>
            <input 
            {...register("email", {required: true})}
            className='shadow border rounded py-2 px-4 form-input mt-1 ring-blue-500 w-full block 
            outline-none focus:ring'
             placeholder='Enter Email' 
             type="email" required />
            </label>
            <label className='inline mb-5'><span className='flex flex-row space-x-1'>Comment{errors.comment?
            <span className='text-red-500'> *</span>:<span> *</span>}</span>
            
            <textarea 
            {...register("comment", {required: true})}
            className='shadow border rounded py-2 px-4 form-textarea mt-1 ring-blue-500 w-full block 
            outline-none focus:ring'
             placeholder='Leave a Comment ..' 
             rows={8} cols={20} />
            </label>
            <button className='shadow w-full py-2 px-4 text-white btn btn-secondary '>Submit</button>
        </form>
    
    }

   {/* comments  */}
   
   <div className="container px-0 mx-auto sm:px-5">
   <h3 className='text-2xl'>Comments</h3>
   <br></br>
    {post.comments.map((comment) => (
    <div key={comment._id} className="flex-col mt-1 w-full py-4 mx-auto bg-white border-b-2 shadow-blue-200
    border-r-2 border-gray-200 sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm md:w-[80%]">
            <div className="flex items-center flex-1 px-4 font-bold leading-tight">{comment.name}
                <span className="ml-2 text-xs font-normal text-gray-500">
                {new Date(comment._updatedAt).toLocaleDateString()}</span>
            </div>
            <div className="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">
                {comment.comment}
            </div>
            <button className="inline-flex items-center px-1 pt-2 ml-1 flex-column">
                        <svg className="w-5 h-5 ml-2 text-gray-600 cursor-pointer fill-current hover:text-gray-900"
                            viewBox="0 0 95 78" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M29.58 0c1.53.064 2.88 1.47 2.879 3v11.31c19.841.769 34.384 8.902 41.247 20.464 7.212 12.15 5.505 27.83-6.384 40.273-.987 1.088-2.82 1.274-4.005.405-1.186-.868-1.559-2.67-.814-3.936 4.986-9.075 2.985-18.092-3.13-24.214-5.775-5.78-15.377-8.782-26.914-5.53V53.99c-.01 1.167-.769 2.294-1.848 2.744-1.08.45-2.416.195-3.253-.62L.85 30.119c-1.146-1.124-1.131-3.205.032-4.312L27.389.812c.703-.579 1.49-.703 2.19-.812zm-3.13 9.935L7.297 27.994l19.153 18.84v-7.342c-.002-1.244.856-2.442 2.034-2.844 14.307-4.882 27.323-1.394 35.145 6.437 3.985 3.989 6.581 9.143 7.355 14.715 2.14-6.959 1.157-13.902-2.441-19.964-5.89-9.92-19.251-17.684-39.089-17.684-1.573 0-3.004-1.429-3.004-3V9.936z"
                                fillRule="nonzero" />
                        </svg>
                    </button>
    </div>
    ))}
   </div>

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
    slug.current == "first-post"][0]{
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
      ],
      description,
      mainImage,
      slug,
      body,
  }`

    const post = await sanityClient.fetch(query, {
        slug: params?.slug
    })

    if(!post){
        return{
            notFound: true
        }
    }

    return {
        props: {
            post
        },
        revalidate: 3600,
    }
}