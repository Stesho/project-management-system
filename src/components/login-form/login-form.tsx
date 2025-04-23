import Image from "next/image";
import loginAccessImg from "../../../public/login-access.png";
import styles from "./login-form.module.scss";
import { GoogleAuthButton } from "../google-auth-button/google-auth-button";

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
