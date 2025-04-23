import { Header } from "@/components/header/header";
import { Menu } from "@/components/menu/menu";

interface PagesLayoutProps {
  children: React.ReactNode;
}

export default function PagesLayout({ children }: PagesLayoutProps) {
  return (
    <>
      <Header name={"name"} avatarUrl="" />
      <div className="flex min-h-screen">
        <Menu />
        <main>{children}</main>
      </div>
    </>
  );
}
