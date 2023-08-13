import { createClient } from '@supabase/supabase-js'
import { Database } from './supabase.types'

const { NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL } = process.env

const supabase = createClient<Database>(
	NEXT_PUBLIC_SUPABASE_URL,
	NEXT_PUBLIC_SUPABASE_ANON_KEY,
	{
		auth:{
			persistSession:false
		}
	}
)

export { supabase }
