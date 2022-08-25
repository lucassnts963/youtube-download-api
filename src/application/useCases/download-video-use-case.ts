import { Request, Response } from 'express'

import { DownloadRepository } from '../repositories/download-repository'
import ytdl from 'ytdl-core'

export interface RequestQuery {
  id: string
  quality: string
  qualityLabel: string
}

export class DownloadVideoUseCase {
  constructor(private downloadRepository: DownloadRepository) {}

  async execute(req: Request<any, any, any, RequestQuery>, res: Response) {
    const { id, quality, qualityLabel } = req.query

    const url = `https://www.youtube.com/watch?v=${id}`

    try {
      const { videoDetails } = await ytdl.getBasicInfo(url)
      const video = this.downloadRepository.download(url, {
        quality,
        qualityLabel,
      })

      res.setHeader(
        'Content-Disposition',
        `attachment; filename="${videoDetails.title}.mp4"`
      )
      res.setHeader('Content-Type', 'video/mp4')

      return video.pipe(res)
    } catch (error) {
      return res
        .status(500)
        .json({ message: 'Error ao realizar o download. ', error })
    }
  }
}
