import { resolve } from 'node:path'
import { build } from 'vite'

export default {
    server: {
        port: 2222
    },
    css: {
        devSourcemap: true
    },
    build: {
        emptyOutDir: true,
        rollupOptions: {
            input: {
                carrito: resolve('paginas/carrito.html'),
                contacto: resolve('paginas/contacto.html'),
                nosotros: resolve('paginas/nosotros.html'),
                principal: resolve('index.html')
            }
        }
    }
}