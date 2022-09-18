import { createClient } from '@supabase/supabase-js';
import Constants from 'expo-constants';

const supabase = createClient(
  Constants.manifest?.extra?.SUPABASE_URL,
  Constants.manifest?.extra?.SUPABASE_ANON_KEY
);

export { supabase };
