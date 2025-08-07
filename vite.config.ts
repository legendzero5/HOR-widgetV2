import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load .env file sesuai mode (development, production)
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), tailwindcss()],

    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },

    css: {
      preprocessorOptions: {
        scss: {}, // dukung .scss
      },
    },

    build: {
      outDir: 'dist',
      minify: 'terser', // mirip UglifyJs
      rollupOptions: {
        input: './src/main.tsx',
        output: {
          entryFileNames: 'bundle.min.js', // output filename
        },
      },
    },

    define: {
      // Inject all .env vars prefixed with VITE_
      'process.env': {
        VITE_PUBLIC_URL: JSON.stringify(env.VITE_PUBLIC_URL),
      },
    },

    server: {
      open: true,
      port: 3000,
      historyApiFallback: true, // agar routing SPA tetap jalan
    },
  };
});
