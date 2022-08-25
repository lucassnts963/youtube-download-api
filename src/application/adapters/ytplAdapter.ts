import ytpl from 'ytpl'

import {
  Playlist,
  PlaylistRepository,
} from '../repositories/playlist-repository'

export class YtplAdapter implements PlaylistRepository {
  getVideos(id: string) {
    const promise = async () => {
      let playlist: Playlist | undefined

      await ytpl(id)
        .then((value) => {
          playlist = { ...value }
        })
        .catch((error) => {
          throw new Error(
            'Error ao consultar playlist com ytpl (YtplAdapter.getVideo)'
          )
        })

      return playlist
    }

    return promise()
  }
}
