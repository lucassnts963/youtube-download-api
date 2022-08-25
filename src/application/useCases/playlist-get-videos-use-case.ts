import { Request, Response } from 'express'
import { PlaylistRepository } from '../repositories/playlist-repository'

export class PlaylistGetVideosUseCases {
  async execute(req: Request, res: Response) {
    const { id } = req.query

    try {
      const playlist = await this.playlistRepository.getVideos(id as string)
      return res.status(200).json(playlist)
    } catch (error) {
      return res
        .status(500)
        .json({ message: 'Error ao tentar localizar playlist.', error })
    }
  }
  constructor(private playlistRepository: PlaylistRepository) {}
}
