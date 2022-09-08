import React from 'react'
import PortableText from 'react-portable-text'
import { sanityClient, urlFor } from '../../sanity'
import {useForm, SubmitHandler} from "react-hook-form"
import { data } from 'autoprefixer'

function post({post}) {

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
    const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    publishedAt,
    title,
    author -> {
        image,
        name
    },
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