import express from 'express'

const HOST = '0.0.0.0'
const PORT = 3000

const app = express()

app.get('/', (req, res) => {
  return res.status(200).send('YouTube Download Service')
})

app.listen(PORT, HOST, () => console.log(`Servidor rodando em ${HOST}:${PORT}`))
