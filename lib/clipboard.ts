const clipboard= async (text: string) => {
	try {
		await navigator.clipboard.writeText(text)
	} catch (e) {
		return
	}
}

export { clipboard }
