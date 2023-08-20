import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, message } = data;
    try {
      const templateParams = {
        name,
        email,
        message,
      };
      console.log(templateParams);
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
      reset();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='Contact'>
      <h1 className='contact-title'>Get In Touch With Me</h1>
      <form className="form" name="contact" onSubmit={handleSubmit(onSubmit)} noValidate>
        <input className='form-input' type="text" name="name" placeholder="Name"
          {...register("name", {
            required: {
              value: true
            }
          })}
        />
        <input className='form-input' type="email" name="email" placeholder="Email"
          {...register("email", {
            required: {
              value: true
            }
          })}
        />
        <textarea className='form-input form-textarea' name="message" placeholder="Message"
          {...register("message", {
            required: {
              value: true
            }
          })}
        ></textarea>
        <button className='form-submit' type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
