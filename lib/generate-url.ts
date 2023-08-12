const generateURL = async (values: Object) => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(values),
	})

	const { short_url } = await res.json()

	if (res.status !== 200)
		return {
			error: true,
			short_url: null,
		}
	return {
		error: false,
		short_url,
	}
}

export { generateURL }
