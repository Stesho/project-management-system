import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Header } from "@/components/header/header";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const { user } = session || {};

  return (
    <div>
      <Header name={user?.name || ""} avatarUrl={user?.image || ""} />
    </div>
  );
}
