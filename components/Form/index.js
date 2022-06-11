import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./Form.module.css";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit(submitHandler)} className={styles.flex}>
        <div className="formContainer">
          <input
            className={
              errors.countryName ? styles.error : styles.inputContainer
            }
            placeholder="Country Name"
            {...register("countryName", { required: true })}
            type="text"
          ></input>
          <input
            className={
              errors.countryName ? styles.error : styles.inputContainer
            }
            placeholder="Top No"
            {...register("topNo", { required: true })}
            type="number"
          ></input>
        </div>
        <input className={styles.submit} type="submit" />
      </form>
    </div>
  );
};

export default Form;
