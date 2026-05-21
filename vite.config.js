import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/figurersite2/', // GitHub Pages 배포 경로 (저장소 이름과 동일하게)
})
