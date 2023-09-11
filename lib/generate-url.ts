const generateURL = async (url: string) => {
	const body = {
		url_base: url,
		url_short: Math.random().toString(36).substring(2, 7),
	}

	const res = await fetch('http://localhost:3000/api/url', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
	})

	const data = await res.json()

	return { data }
}

export default generateURL
