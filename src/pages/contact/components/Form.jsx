import { useForm } from "react-hook-form";
import "./style.form.css";
import ArrowUp from "../../../assets/hero/ArrowUp Right.svg";

export function Form() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleMessage = async (data) => {
    try {
      const result = await fetch(
        "https://win23-assignment.azurewebsites.net/api/contactform",
        {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify({
            name: data.firstName,
            email: data.email,
            message: data.message,
          }),
        }
      );
      console.log(result);
      const message = await result.json();
      console.log("Parsed Message:", message);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <form
      className="messagingForm"
      onSubmit={handleSubmit((data) => {
        //här fyller vi in api:et
        console.log(data);
        handleMessage(data);
      })}
    >
      <div>
        <input
          className="namn"
          placeholder="Name*"
          {...register("firstName", {
            required: " First name is required",
            minLength: {
              value: 2,
              message: "You need at least two characters",
            },
          })}
          aria-invalid={errors.firstName ? "true" : "false"}
        />
        {errors.firstName && <p role="alert">{errors.firstName.message}</p>}
      </div>
      <div>
        <input
          className="email"
          type="email"
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
        Send Message <img src={ArrowUp} alt="Arrow Up" />
      </button>
    </form>
  );
}
