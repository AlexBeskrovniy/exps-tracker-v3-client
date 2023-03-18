import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "pages": `${path.resolve(__dirname, "./src/pages")}`,
      "providers": `${path.resolve(__dirname, "./src/providers")}`,
      "components": `${path.resolve(__dirname, "./src/components")}`,
      "styled": `${path.resolve(__dirname, "./src/components/styled")}`,
      "gql-requests": `${path.resolve(__dirname, "./src/gql-requests")}`,
      "types": `${path.resolve(__dirname, "./src/types.ts")}`
    }
  }
})
