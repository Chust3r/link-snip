import { redirect } from 'next/navigation'
import { getUrl } from '@/lib/supabase-fetching'
import { Button } from '@/components/ui/button'
import { HomeIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

interface PageProps {
    params: {
        slug: string
    }
}

const Page = async ({ params: { slug } }: PageProps) => {

    const { data } = await getUrl(slug)

    if (data?.length !== 0) {
        if (data === null) return
        redirect(data[0].url_base)
    }

    return (
        <div className="bg-background w-full h-full flex items-center justify-center flex-col gap-4">
            <p className="text-muted-foreground">Nothing here!</p>
            <Link href="/">
                <Button className="gap-2">
                    <HomeIcon />
                    Home
                </Button>
            </Link>
        </div>
    )
}

export default Page
