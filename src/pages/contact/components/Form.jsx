import { useForm } from "react-hook-form";
import "./style.form.css";
import ArrowUp from "../../../assets/hero/ArrowUp Right.svg";
export function Form() {
  const {
    register,

    formState: { errors },
    handleSubmit,
  } = useForm();
  return (
    <form
      className="messagingForm"
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <div>
        <input
          className="namn"
          placeholder="Name*"
          {...register("firstName", {
            required: "First name is requried",
            minLength: {
              value: 2,
              message: "You need atleast two characters",
            },
          })}
          aria-invalid={errors.firstName ? "true" : "false"}
        />
        {errors.firstName && <p role="alert">{errors.firstName.message}</p>}
      </div>
      <div>
        <input
          className="email"
          placeholder="Email*"
          {...register("email", { required: "Need to fill a valid email" })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && <p role="alert">{errors.email.message}</p>}
      </div>
      <div>
        <textarea
          className="message"
          placeholder="Your message*"
          {...register("message", { required: "You need to fill a message" })}
          aria-invalid={errors.message ? "true" : "false"}
        />
        {errors.message && <p role="alert">{errors.message.message}</p>}
      </div>

      <button type="submit" className="sendButton">
        Send Message <img src={ArrowUp} />
      </button>
    </form>
  );
}
