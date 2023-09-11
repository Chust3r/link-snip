import Heart from "./icons/heart"


const Footer = () => {
    return (
        <footer className="flex justify-center py-3 text-xs text-muted-foreground items-center gap-1">
            <span>Made with</span>
            <p className="flex justify-center items-center relative"><Heart className='w-3 h-3 stroke-rose-500 fill-rose-500' /><span className="w-3 h-3 rounded-full bg-rose-500/50 absolute blur-md"></span></p>
            <span> by Chust3r</span>
        </footer>
    )
}

export default Footer
