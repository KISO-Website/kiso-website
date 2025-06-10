import { createSupabaseBrowserClient } from "@/utils/supabase/client";

export default function LoginButton({
  redirectPath = "/",
}: {
  redirectPath?: string;
}) {
  const handleLogin = async () => {
    const supabase = createSupabaseBrowserClient();
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${
          window.location.origin
        }/auth/callback?redirect=${encodeURIComponent(redirectPath)}`,
      },
    });
  };

  return <button onClick={handleLogin}>Sign in with Google</button>;
}
