import Image from "next/image";
import loginAccessImg from "../../../public/loginAccess.png";
import styles from "./loginForm.module.scss";
import { GoogleAuthButton } from "../googleAuthButton/googleAuthButton";

export default async function LoginForm() {
  return (
    <div className={styles.login}>
      <Image
        src={loginAccessImg}
        alt={"Man with login access"}
        width={563}
        height={665}
      />
      <div className={styles.form}>
        <h2>Welcome back, Yash</h2>
        <p>Welcome back! Please enter your details.</p>
        <GoogleAuthButton />
      </div>
    </div>
  );
}
