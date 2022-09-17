import {useState} from 'react'
import styles from "../styles/Contact.module.css";
import {useForm, SubmitHandler} from 'react-hook-form'
const Contact = () => {
  // [submited,setSubmited] = useState(false)

  const {register, handleSubmit,
    formState: {errors}}  = useForm();

  const onSubmit = async(data) => (
      await fetch('/api/contact', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' },
      }).then(() => (
          //setSubmitted(!submited),
          console.log(data)
      )).catch((err) => (
          console.log(err)
      ))
  )

  return (
    <div className="hero">
    <div className={styles.container}>
      <h1 className="text-xl font-extrabold font-[Helvetica] "> GET IN TOUCH</h1>
      <p className="text-sm font-medium text-gray-400">We are Eager to hear from you.</p>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <input
        {...register("name", {required: true})}
          className={styles.inputSmall}
          type="text"
          name='name'
          placeholder="Name"
        />
        <input
        {...register("phone")}
         className={styles.inputSmall} 
         type="text" 
         name='phone'
         placeholder="Phone" />
        <input 
        {...register("email", {required: true})}
        className={styles.inputLarge} 
        type="text" 
        name='email'
        placeholder="E-mail" />
        <input
        {...register("subject", {required: true})}
          className={styles.inputLarge}
          type="text"
          name='subject'
          placeholder="Subject"
        />
        <textarea
        {...register("message", {required: true})}
          className={styles.textarea}
          type="text"
          name='message'
          placeholder="Message"
          rows={6}
        />
        <button className="btn btn-secondary p-4 w-full border-none mt-5 font-semibold cursor-pointer">Submit</button>
      </form>
    </div>
    </div>
  );
};
export default Contact;
