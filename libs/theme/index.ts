export let theme: string = "dark";

export function setTheme(newTheme: string) {
	if (newTheme !== ("light" || "dark" || "system")) return;
	theme == newTheme;
}
