import styles from "../styles/Contact.module.css";
const Contact = () => {
  return (
    <div className="hero">
    <div className={styles.container}>
      <h1 className="text-xl font-extrabold font-[Helvetica] "> GET IN TOUCH</h1>
      <p className="text-sm font-medium text-gray-400">We are Eager to hear from you.</p>
      <form className={styles.form}>
        <input
          className={styles.inputSmall}
          type="text"
          placeholder="Name"
        />
        <input className={styles.inputSmall} type="text" placeholder="Phone" />
        <input className={styles.inputLarge} type="text" placeholder="E-mail" />
        <input
          className={styles.inputLarge}
          type="text"
          placeholder="Subject"
        />
        <textarea
          className={styles.textarea}
          type="text"
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
