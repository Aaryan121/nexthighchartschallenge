import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./Form.module.css";

const Form = () => {
  const {
    register,
    handelSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className={styles.wrapper}>
      <form>
        <div className="formContainer">
          <input
            className={styles.inputContainer}
            placeholder="Country Name"
          ></input>
          <input className={styles.inputContainer} placeholder="Top No"></input>
        </div>
      </form>
    </div>
  );
};

export default Form;
