import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'https://cosmus-trader-officialgunicorn-cosmus.onrender.com'
    }
  }
})