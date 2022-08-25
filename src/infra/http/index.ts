import express from 'express'

import routes from './routes'

const HOST = '0.0.0.0'
const PORT = 3000

const app = express()

app.use(express.json())
app.use(routes)

app.listen(PORT, HOST, () => console.log(`Servidor rodando em ${HOST}:${PORT}`))
