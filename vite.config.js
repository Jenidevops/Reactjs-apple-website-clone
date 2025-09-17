import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Reactjs-apple-website-clone/",  // must match repo name exactly
});
