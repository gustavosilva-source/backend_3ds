import express from  'express'
import path from 'path'

const dirbase = import.meta.dirname
const app = express()
const porta = 3000
// Usando MidleWare (software ntermediario) TODOS OS ARQ. ESTATICOS
app.use(express.static(path.join(import.meta.dirname,'publico')))

// criar as rotas do servidor
app.get('/', (req, res) => {
    res.sendFile('/paginas/index.html', { root: import.meta.dirname})
})
// Liberar a porta do meu computador 
app.listen(porta,() => {console.log('servidor esta vivo!')})
