import { NextResponse } from 'next/server'
import { supabase } from '@/supabase/client'

export async function GET() {
	return NextResponse.json({ msg: 'GET API' })
}

export async function POST(request: Request) {
	const { url } = await request.json()
	const short_url = Math.random().toString(36).substring(2, 7)

	try {
		const res = await supabase
			.from('url')
			.insert({ url_base: url, short_url })

		return NextResponse.json({ ...res, short_url })
	} catch (e) {
		return
	}
}
