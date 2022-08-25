import { Request, Response } from 'express'
import { PlaylistRepository } from '../repositories/playlist-repository'

export class PlaylistGetVideosUseCases {
  async execute(req: Request, res: Response) {
    const { id } = req.query

    if (!id) {
      res
        .status(400)
        .json({
          message:
            'Você precisa informar um id válido para video de YouTube público',
        })
    }

    this.playlistRepository
      .getVideos(id as string)
      .then((result) => {
        if (result) {
          return res.status(200).json(result)
        } else {
          return res
            .status(500)
            .json({ message: 'Resultado da busca da playlist (undefined)' })
        }
      })
      .catch((error) => {
        return res
          .status(500)
          .json({ message: 'Playlist não encontrada.', error })
      })
  }
  constructor(private playlistRepository: PlaylistRepository) {}
}
