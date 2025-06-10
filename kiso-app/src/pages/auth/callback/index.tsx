import { useEffect } from "react";
import { useRouter } from "next/router";
import { createSupabaseBrowserClient } from "@/utils/supabase/client";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const supabase = createSupabaseBrowserClient();
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        router.replace("/"); // Redirect to home or dashboard
      } else {
        router.replace("/login/fail");
      }
    });
  }, [router]);

  return <div>Signing you in...</div>;
}