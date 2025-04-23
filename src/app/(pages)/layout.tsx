import { getServerSession } from "next-auth";
import { Header } from "@/components/header/header";
import { Menu } from "@/components/menu/menu";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

interface PagesLayoutProps {
  children: React.ReactNode;
}

export default async function PagesLayout({ children }: PagesLayoutProps) {
  const session = await getServerSession(authOptions);
  const { user } = session || {};

  return (
    <>
      <Header name={user?.name || ""} avatarUrl={user?.image || ""} />
      <div className="flex min-h-screen">
        <Menu />
        <main>{children}</main>
      </div>
    </>
  );
}
