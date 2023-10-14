/// <reference types="@modyfi/vite-plugin-yaml/modules" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	type Content = {
		title: string;
		slug: string;
		contents?: never;
	};

	type Section = {
		title: string;
		contents: (Content | Section)[];
		slug?: never;
	};

	type Contents = (Content | Section)[];
}

export {};
