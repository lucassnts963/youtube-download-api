import { Readable } from 'stream'

export interface OptionsProps {
  quality?: string
  qualityLabel?: string
}

export interface RequestQuery {
  id: string
  quality?: string
  qualityLabel?: string
  hasToConvert?: string
}

export interface DownloadRepository {
  download: (url: string, options?: OptionsProps) => Readable
}
