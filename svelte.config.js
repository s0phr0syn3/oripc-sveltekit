import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			assets: 'build', // Directory for assets
			fallback: 'index.html', // Enables SPA mode for client-side navigation
			pages: 'build', // Directory where static files are generated
			precompress: false // Precompress assets (optional, off by default)
		}),
		paths: {
			base: '' // Use this if your site is deployed at the root
		},
	}
};

export default config;