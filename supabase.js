import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kjofyfntpvfujophbdla.supabase.co";

const supabaseKey = "sb_secret_wOEWHe01eGXxrkLj451wtw_n5u2dV2T";

export const supabase = createClient(
    supabaseUrl,
    supabaseKey
);
