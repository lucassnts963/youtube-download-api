import { Request, Response } from 'express'

import { YtdlDownloadAdapter } from '../../../application/adapters/ytdlDownloadAdapter'
import { YtplAdapter } from '../../../application/adapters/ytplAdapter'
import {
  DownloadVideoUseCase,
  RequestQuery,
} from '../../../application/useCases/download-video-use-case'
import { PlaylistGetVideosUseCases } from '../../../application/useCases/playlist-get-videos-use-case'

export class DownloadController {
  static async download(req: Request, res: Response) {
    return res.status(200).json({
      message:
        'Utilize uma das rotas disponíveis: /download/video?id=0H6WYzM0TMg ou /download/playlist?id=RDXxkNj5hcy5E',
    })
  }

  //https://www.youtube.com/watch?v=0H6WYzM0TMg
  static async downloadVideo(
    req: Request<any, any, any, RequestQuery>,
    res: Response
  ) {
    const ytdlDownloadAdapter = new YtdlDownloadAdapter()
    const downloadVideoUseCase = new DownloadVideoUseCase(ytdlDownloadAdapter)

    downloadVideoUseCase.execute(req, res)
  }

  //Retornara uma lista com todos os links para uma solicitação get de um downloadVideo
  //https://www.youtube.com/playlist?list=PLDWeatz4tfVxZQtlydtl506wKxmK6X4Ia
  static async downloadPlaylist(req: Request, res: Response) {
    const ytplAdapter = new YtplAdapter()
    const playlistGetVideosUseCases = new PlaylistGetVideosUseCases(ytplAdapter)

    playlistGetVideosUseCases.execute(req, res)
  }
}
