import { createSupabaseBrowserClient } from "@/utils/supabase/client";
import { useRouter } from "next/router";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createSupabaseBrowserClient();
    await supabase.auth.signOut();
    router.reload();
  };
  return <button onClick={handleLogout}>Logout</button>;
}
