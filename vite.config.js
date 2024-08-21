import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/', // Use root URL for all pages
    plugins: [react()],
});
