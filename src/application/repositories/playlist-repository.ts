export interface Image {
  url: string | null
  width: number
  height: number
}

export interface Author {
  name: string
  url: string
  avatars?: Image[]
  bestAvatar?: Image
  channelID: string
}

export interface Video {
  title: string
  index: number
  id: string
  shortUrl: string
  url: string
  author: Author
  thumbnails: Image[]
  bestThumbnail: Image
  isLive: boolean
  duration: string | null
  durationSec: number | null
}

interface ContinueResult {
  continuation: Continuation | null
  items: Video[]
}

interface Continuation {}

export interface Playlist {
  id: string
  url: string
  title: string
  estimatedItemCount: number
  views: number
  thumbnails: Image[]
  bestThumbnail: Image
  lastUpdated: string
  description: string | null
  visibility: 'unlisted' | 'everyone'
  author: Author
  items: Video[]
  continuation: Continuation | null
}

export interface PlaylistRepository {
  getVideos: (id: string) => Promise<Playlist | undefined>
}
