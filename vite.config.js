import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


const MODE = process.env.NODE_ENV;


// https://vitejs.dev/config/
export default function (config) {

  const prodConfig = defineConfig({
   
    plugins: [
     
      react(),
   
    ],
   

  })

  const devConfig = defineConfig({
    plugins: [
    
      react(),

      // These are possibly needed for prod
      //ViteEjsPlugin({ mode: MODE }),
      //viteSingleFile()
    ]
  })

  

  return MODE === 'production' ? prodConfig : devConfig

};