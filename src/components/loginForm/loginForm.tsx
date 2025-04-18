import Image from "next/image";
import loginAccessImg from "../../../public/loginAccess.png";
import styles from "./loginForm.module.scss";

export default function LoginForm() {
  return (
    <div className={styles.login}>
      <Image
        src={loginAccessImg}
        alt={"man with login access"}
        width={563}
        height={665}
      />
      <div className={styles.form}>
        <h2>Welcome back, Yash</h2>
        <p>Welcome back! Please enter your details.</p>
        <button className={styles.form_button}>Sign Up With Google</button>
      </div>
    </div>
  );
}
