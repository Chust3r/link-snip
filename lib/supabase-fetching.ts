import { supabase } from '@/supabase/client'

const getUrl = async (short_url: string) => {
	const res = await supabase
		.from('url')
		.select('url_base')
		.eq('short_url', short_url)

	return res
}

export { getUrl }
