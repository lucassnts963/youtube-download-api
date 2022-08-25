import ytpl from 'ytpl'

import { PlaylistRepository } from '../repositories/playlist-repository'

export class YtplAdapter implements PlaylistRepository {
  getVideos(id: string) {
    const playlist = ytpl(id)
    return playlist
  }
}
