import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				header: '#ba202e'
			},
			fontFamily: {
				sans: ['"Open Sans"', 'sans-serif']
			}
		}
	},

	plugins: [typography, forms, containerQueries]
} satisfies Config;
