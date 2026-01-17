import { defineConfig } from 'vitest/config';
import preact from '@preact/preset-vite';
import '@testing-library/jest-dom';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		preact({
			prerender: {
				enabled: true,
				renderTarget: '#app',
				additionalPrerenderRoutes: ['/404'],
				previewMiddlewareEnabled: true,
				previewMiddlewareFallback: '/404',
			},
		}),
	],
	test: {
		globals: true,
		environment: 'jsdom',// optional
	},
});
