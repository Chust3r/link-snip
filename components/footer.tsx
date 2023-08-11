import { HeartIcon } from '@radix-ui/react-icons'


const Footer = () => {
    return (
        <footer className="flex justify-center py-3 text-xs text-muted-foreground items-center gap-1">
            <span>Made with</span>
            <HeartIcon />
            <span> by Chust3r</span>
        </footer>
    )
}

export default Footer
