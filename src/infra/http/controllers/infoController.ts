import { Request, Response } from 'express'
import ytdl from 'ytdl-core'

interface RequestQuery {
  url: string
}

class InfoVideoController {
  static async getInfo(
    req: Request<any, any, any, RequestQuery>,
    res: Response
  ) {
    const { url } = req.query
    console.log('getInfo: ', url)

    try {
      const { videoDetails, formats } = await ytdl.getInfo(url)

      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
      res.setHeader('Access-Control-Methods', 'POST, GET')
      res.setHeader('Access-Control-Allow-Headers', '*')
      res.setHeader('Access-Control-Max-Age', 86400)

      console.log(videoDetails)

      return res.status(200).json({ videoDetails, formats })
    } catch (error) {
      return res.status(500).json({
        message: 'Error ao tentar localizar informações do video.',
        error: error,
      })
    }
  }
}

export default InfoVideoController
