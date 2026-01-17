# Preact Testing Library

[Preact Testing Library](https://github.com/testing-library/preact-testing-library) is a library for writing tests for Preact components.

- This guide walk you through [Documentation](https://preactjs.com/guide/v10/preact-testing-library)
- Or more detail on [vitest](https://vitest.dev/guide/)

## Step by Step

Install dependency.
```
npm install --save-dev vitest @testing-library/preact @testing-library/jest-dom
```

Add Vite Test Configuration `vitest.config.ts`
```typescript
import { defineConfig } from 'vitest/config';
import preact from '@preact/preset-vite';

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
		environment: 'jsdom',
	},
});

```

Add Script Test
```json
"scripts": {
    ...,
    "test": "vitest run --config vitest.config.t"
}
```

Run Script
```
npm test
```