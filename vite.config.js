import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If deploying to GitHub Pages at username.github.io/REPO_NAME,
// change base below to '/REPO_NAME/'. If deploying to Vercel or a
// custom domain (or just running locally), leave it as '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
