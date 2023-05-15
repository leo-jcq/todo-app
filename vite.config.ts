import react from '@vitejs/plugin-react-swc';
import sass from 'sass';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/todo-app',
    css: {
        preprocessorOptions: {
            scss: {
                implementation: sass
            }
        }
    }
});
