export const isObject = <T>(value: T): boolean => {
	return value !== null && typeof value === 'object' && !Array.isArray(value);
}