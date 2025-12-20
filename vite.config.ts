import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 인증서 파일 경로
const keyPath = path.resolve(__dirname, './.cert/localhost-key.pem');
const certPath = path.resolve(__dirname, './.cert/localhost.pem');

// 인증서 파일 존재 여부 확인
const certExists = fs.existsSync(keyPath) && fs.existsSync(certPath);

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), 
  ],
  server: {
    ...(certExists ? {
      https: {
        key: fs.readFileSync(keyPath),
        cert: fs.readFileSync(certPath),
      },
    } : {}),
    port: 5173,
  },
});
