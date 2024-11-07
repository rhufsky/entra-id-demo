import { auth } from "@/auth";
import LoginButton from "@/components/auth/LoginButton";
import LogoutButton from "@/components/auth/LogoutButton";

export default async function Home() {
  const session = await auth();

  return (
    <div className="p-8 flex flex-col gap-4 w-48">
      {session?.user ? `logged in as ${session?.user?.name}` : "not logged in"}
      <LoginButton />
      <LogoutButton />
    </div>
  );
}
