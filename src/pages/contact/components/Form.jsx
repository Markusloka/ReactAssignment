import { useForm } from "react-hook-form";
import "./style.form.css";
import ArrowUp from "../../../assets/hero/ArrowUp Right.svg";
export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);
  return (
    <form
      className="messagingForm"
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <input
        className="Name"
        type="text"
        {...register("Namn", { required: true, minLength: 2 })}
        placeholder="Namn"
      ></input>
      <input
        className="Email"
        type="email"
        {...register("Email", { required: true })}
        placeholder="Epost-adress"
      ></input>
      <input
        className="Message"
        type="text"
        {...register("Message", { required: true })}
        placeholder="Skriv ditt meddelande"
      ></input>

      <button type="submit" className="sendButton">
        Send Message <img src={ArrowUp} />
      </button>
    </form>
  );
}
