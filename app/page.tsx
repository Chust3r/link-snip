import FormURL from './components/form-url'

const Page = () => {

  return (
    <div className="w-full h-full flex items-center justify-center flex-col relative">
      <div className='w-96 h-96 absolute bg-gradient-to-t dark:from-primary/5 from-purple-500/70 blur-3xl rounded-full -z-[1]' />
      <div className="w-full md:w-[500px] flex flex-col gap-4">
        <div className="flex flex-col">
          <p className="text-foreground font-medium">
            Share your link anywhere
          </p>
          <p className="text-sm text-muted-foreground">
            Link and save time: cut to connect!
          </p>
        </div>
        <FormURL />
      </div>
    </div>
  )
}

export default Page
