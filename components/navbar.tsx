import ModeToggle from '@/components/mode-toggle'
import { Link2Icon } from '@radix-ui/react-icons'



const Navbar = () => {
    return (
        <nav className="w-full  flex justify-between py-3 items-center">
            <div className='flex items-center gap-2 select-none flex-1'>
                <Link2Icon className='w-5 h-5 text-foreground' />
                <h1 className='text-xl font-medium text-foreground'>URLZipper</h1>

            </div>
            <div className='flex gap-3 items-center'>
                <ModeToggle />

            </div>
        </nav>
    )
}

export default Navbar
