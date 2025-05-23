import Image from "next/image";
import logoImg from "../../../public/icon.svg";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src={logoImg} alt="logo" width={50} height={45} />
        <span>AProjectO</span>
      </div>
      <div className={styles.productName}>
        <span className={styles.productName_asterisk}>*</span>
        <span>Asite Product System</span>
      </div>
    </header>
  );
}
