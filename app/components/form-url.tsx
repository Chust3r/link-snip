'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link2Icon, ReloadIcon, CopyIcon } from '@radix-ui/react-icons'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import generateURL from '@/lib/generate-url'
import { useToast } from '@/components/ui/use-toast'
import { ToastAction } from '@radix-ui/react-toast'
import { clipboard } from '@/lib/clipboard'



interface FormSchema {
	url: string
}

const formSchema = z.object({
	url: z.string().trim().url({
		message: 'Invalid URL',
	}),
})

const defaultValues = {
	url: '',
}

const FormURL = () => {
	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues,
	})

	const { toast } = useToast()

	const [isLoading, setisLoading] = useState(false)

	const handleSubmit = async (values: FormSchema) => {
		setisLoading(true)
		const { data } = await generateURL(values.url)
		setisLoading(false)
		if (data) {
			const url = `${location.host}/${data.url_short}`

			toast({
				title: "Success in shortening",
				description: url,
				action: <ToastAction altText='copy' onClick={() => clipboard(url)}><CopyIcon /></ToastAction>
			})

			form.reset()
		}
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(handleSubmit)}
				className="flex flex-col md:flex-row gap-3"
				autoComplete="off"
			>
				<FormField
					control={form.control}
					name="url"
					render={({ field }) => (
						<FormItem className="w-full text-muted-foreground ">
							<FormControl className='bg-background/40 backdrop-blur'>
								<Input placeholder="Your URL" {...field} />
							</FormControl>
							<FormMessage className="text-muted-foreground" />
						</FormItem>
					)}
				/>
				<Button className="gap-2" disabled={isLoading}>
					{isLoading ? (
						<ReloadIcon className="animate-spin" />
					) : (
						<>
							<Link2Icon /> Short
						</>
					)}
				</Button>
			</form>
		</Form>
	)
}

export default FormURL