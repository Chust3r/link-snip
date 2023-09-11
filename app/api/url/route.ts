import prisma from '@/lib/prisma-client'
import { NextResponse } from 'next/server'

export async function GET() {
	return NextResponse.json({ msg: 'GET API' })
}

export async function POST(request: Request) {
	const data = await request.json()

	const res = await prisma.url.create({ data })

	return NextResponse.json({ ...res })
}
