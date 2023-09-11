import { redirect } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { HomeIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import prisma from '@/lib/prisma-client'

interface PageProps {
    params: {
        slug: string
    }
}

const Page = async ({ params: { slug } }: PageProps) => {

    const data = await prisma.url.findFirst({ where: { url_short: slug } })

    if (data?.url_base) redirect(data?.url_base)

    return (
        <div className="w-full h-full flex items-center justify-center flex-col gap-4 relative">
            <p className="text-lg font-medium">Nothing here!</p>
            <div className='w-96 h-96 absolute bg-gradient-to-t dark:from-primary/5 from-purple-500/70 blur-3xl rounded-full -z-[1]' />
            <Link href="/">
                <Button className="gap-2" variant="ghost">
                    <HomeIcon />
                    Home
                </Button>
            </Link>
        </div>
    )
}

export default Page
