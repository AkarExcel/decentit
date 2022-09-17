import React, { useState } from 'react'
import {useForm, SubmitHandler} from "react-hook-form"

const Comment = ({post}) => {
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
    <div>
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
    </div>
  )
}

export default Comment