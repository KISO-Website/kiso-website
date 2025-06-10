# KISO Website

## Supabase setup

Browser Client
src/lib/supabase/browser-client.ts
This file contains the function used to call the supabase client in a nextjs client component

Server Client
src/lib/supabase/server-client.ts
This file contains 3 functions used to call the supabase client on the server

createSupabaseServerClient(): used in server actions and route handlers
createSupabaseServerComponentClient(): used in server components
createSupabaseReqResClient(): used in middleware