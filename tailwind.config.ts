import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts,md}'],
	theme: {
		extend: {
			fontFamily: {
				title: ['"Libre Barcode 128 Text"', 'cursive'],
				mono: ['Fira Code', 'monospace'],
				sans: [
					'Nunito Sans Variable',
					'ui-sans-serif',
					'system-ui',
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'Roboto',
					'Helvetica Neue',
					'Arial',
					'Noto Sans',
					'sans-serif'
				]
			}
		}
	},
	plugins: [typography, containerQueries]
};
