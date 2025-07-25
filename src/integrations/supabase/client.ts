// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://rxnxxicsixiflkcdjflp.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4bnh4aWNzaXhpZmxrY2RqZmxwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2ODY5MTQsImV4cCI6MjA2ODI2MjkxNH0.SCxJH26Sk6prbb8IvVK67vw1p9a7medaFK--UAw0Imo";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});