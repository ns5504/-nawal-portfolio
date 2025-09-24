import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig({
base: '/-nawal-portfolio/', // your repo name
plugins: [react()],
resolve: {
alias: { '@': path.resolve(__dirname, 'src') }
}
})