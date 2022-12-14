# API Node.js para app de download de video no YouTube

API REST para download de video do YouTube

[![GitHub issues](https://img.shields.io/github/issues/lucassnts963/youtube-download-api)](https://github.com/lucassnts963/youtube-download-api/issues)
[![GitHub forks](https://img.shields.io/github/forks/lucassnts963/youtube-download-api)](https://github.com/lucassnts963/youtube-download-api/network)
[![GitHub stars](https://img.shields.io/github/stars/lucassnts963/youtube-download-api)](https://github.com/lucassnts963/youtube-download-api/stargazers)
[![GitHub license](https://img.shields.io/github/license/lucassnts963/youtube-download-api)](https://github.com/lucassnts963/youtube-download-api)

## Tecnologias

- Node.js
- HTTP

## Rotas

A aplicação possui rotas para informações, download de videos e download de playlist.

### Video

```typescript
res.setHeader(
  'Content-Disposition',
  `attachment; filename="${videoDetails.title}.mp4"`
)
res.setHeader('Content-Type', 'video/mp4')

url = 'http://localhost:3000/download/video?id=WOzgspdUtiI'
```

### Playlist

Resposta é um objeto retornado pela biblioteca [ytpl](https://www.npmjs.com/package/ytpl).

```typescript
url =
  'http://localhost:3000/download/playlist?id=PLDWeatz4tfVxZQtlydtl506wKxmK6X4Ia'
```

## Regras

- Todas as requisições devem ser por meio de um id

## Próximos passos

- Configurar o ambiente de testes
- Escrever os testes
