export const getDelay = () => {
	const randomDelay = Math.random() * (1 - 0.2 + 1) + 0.2
	return randomDelay
}