import React,{useState} from 'react'
import styles from "../../styles//Reply.module.css"
import {useForm, SubmitHandler} from "react-hook-form"
import { ArrowRedoOutline } from 'react-ionicons'


const Reply = ({comment}) => {
    const [openReply, setOpenReply] = useState(false);
    const [submited, setSubmitted] = useState(false)
    const onClose = () => (
     setOpenReply(false)
    );
    
    
    const {register, 
        handleSubmit, 
        formState: {errors},
    } = useForm()

    const onSubmit = async(data) => (
        await fetch('/api/createReply', {
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
      <div className='bg-blue-500'>
            <button 
            onClick={() => setOpenReply(true)} 
            className={`flip inline-flex items-center px-1 pt-2 ml-1 flex-column ${openReply ? "hidden": ""}`}>
                        <ArrowRedoOutline />
                       
            </button>
          <form onSubmit={handleSubmit(onSubmit)}  className={`flex flex-col max-w-2xl mx-auto my-10 ${openReply ? "": "hidden"}`}>
          <p className='justify-self-end' onClick={onClose}>
            X
          </p>
          <input 
            {...register("_id")}
            type='hidden'
            name='id'
            value={comment._id}
            />
          <div className='flex flex-row justify-between'>
            <label  htmlFor='name'>Name<input 
            {...register("name", {required: true})}
            className='shadow border rounded py-2 px-4 form-input mt-1 ring-blue-500 w-[40%] 
            outline-none focus:ring'
            placeholder='John Doe' type="text" id='name' /></label>
            <label className='' htmlFor='email'>Email<input 
            {...register("email", {required: true})}
            className='shadow border rounded py-2 px-4 form-input mt-1 ring-blue-500 w-full block 
            outline-none focus:ring'
             placeholder='Enter Email'  type="email" id='email' /></label>
          </div>
            <label className='w-full' htmlFor='reply'>Reply<textarea
            {...register("reply", {required: true})}
            type="text" id='reply'className='shadow border rounded py-2 px-4 form-textarea mt-1 ring-blue-500 w-full block 
            outline-none focus:ring'
            placeholder='Reply ..' 
             rows={8} cols={20}/></label>
            <button className='btn btn-secondary w-48 mt-4 mx-auto'>Submit</button>
          </form>
          
        </div>

    );
  };

  

export default Reply