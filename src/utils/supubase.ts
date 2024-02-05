import { createClient } from "@supabase/supabase-js";

export const initSupubaseClient = () => {
  const supabaseUrl = "https://vbocwezegqfnsckozgse.supabase.co";
  const supabaseKey = import.meta.env.SECRET_SUPABASE_KEY;
  return createClient(supabaseUrl, supabaseKey);
};
