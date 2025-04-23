import Image from "next/image";
import logoImg from "../../../public/icon.svg";

interface HeaderProps {
  name: string;
  avatarUrl: string;
}

export function Header({ name, avatarUrl }: HeaderProps) {
  return (
    <header className="container flex justify-between py-5">
      <div className="flex items-center">
        <Image src={logoImg} alt="logo" width={50} height={45} />
        <span className="text-2xl font-semibold ml-5">AProjectO</span>
      </div>
      <div className="flex">
        <div className="flex flex-col items-end mr-5">
          <span>{name}</span>
          <span>Place</span>
        </div>
        <Image
          src={avatarUrl}
          alt="user avatar"
          width={50}
          height={50}
          className="rounded-full"
        />
      </div>
    </header>
  );
}
