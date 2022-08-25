import { Readable } from 'stream'
import ytdl from 'ytdl-core'

import {
  DownloadRepository,
  OptionsProps,
} from '../repositories/download-repository'

export class YtdlDownloadAdapter implements DownloadRepository {
  download(url: string, options?: OptionsProps | undefined) {
    const video = ytdl(url, { ...options })

    return video
  }
}
