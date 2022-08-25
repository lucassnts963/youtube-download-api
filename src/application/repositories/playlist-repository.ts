export interface PlaylistRepository {
  getVideos: (id: string) => Promise<any>
}
