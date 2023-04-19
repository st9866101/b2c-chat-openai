import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/b2c-chat-openai/',
  plugins: [react()],
})
// /b2c-chat-openai/