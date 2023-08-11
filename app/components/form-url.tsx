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
import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { CopyIcon, Link2Icon, ReloadIcon } from '@radix-ui/react-icons'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { generateURL } from '@/lib/generate-url'
import { clipboard } from '@/lib/clipboard'

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

	const handleSubmit = async (values:Object) => {
		setisLoading(true)
		const { error, short_url } = await generateURL(values)
		setisLoading(false)

		const shortenURL = `${process.env.NEXT_PUBLIC_BASE_URL}${short_url}`

		if (error)
			return toast({
				title: 'something went wrong',
				variant: 'destructive',
			})
		else {
			form.reset()
			toast({
				title: 'Success in shortening',
				description: shortenURL,
				action: (
					<ToastAction
						altText="copy"
						onClick={async () => await clipboard(shortenURL)}
						className="gap-2"
					>
						<CopyIcon /> Copy
					</ToastAction>
				),
			})
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
						<FormItem className="w-full text-muted-foreground">
							<FormControl>
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