const generateURL = async (values: Object) => {
	const res = await fetch(`${location.origin}/api`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(values),
	})

	const {
		short_url,
		status,
		statusText,

	} = await res.json()

	if (res.status !== 200 || status === 401)
		return {
			error: true,
			short_url: null,
			message: `${statusText}`,
		}
	return {
		error: false,
		short_url,
		message: null,
	}
}

export { generateURL }
