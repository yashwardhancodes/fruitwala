import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // allows external access
    port: 5173, // or any port you prefer
    allowedHosts: ['fruitwala-1geu.onrender.com'], // your deployed domain
  },
})
