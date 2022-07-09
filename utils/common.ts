export type Nullable<T> = T | null;

export const wait = (ms: number) => {
	const timeout = Date.now() + ms;
	while (Date.now() < timeout) {}
};
export const waitAsync = (ms: number): Promise<void> =>
	new Promise((resolve) => setTimeout(resolve, ms));
export const emptyFunction = () => {};
