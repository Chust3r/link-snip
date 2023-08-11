import { createClient } from '@supabase/supabase-js'
import { Database } from './supabase.types'

const { SUPABASE_URL, SUPABASE_API_KEY } = process.env

const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_API_KEY, {
	auth: { persistSession: false },
})

export { supabase }
