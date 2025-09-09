'use client'

import { cn } from '@/utilities/ui'
import React, { useEffect, useRef } from 'react'

import type { Props as MediaProps } from '../types'

import { getMediaUrl } from '@/utilities/getMediaUrl'

export const VideoMedia: React.FC<MediaProps> = (props) => {
  const { onClick, resource, videoClassName } = props

  const videoRef = useRef<HTMLVideoElement>(null)
  // const [showFallback] = useState<boolean>()

  useEffect(() => {
    const { current: video } = videoRef
    if (video) {
      video.addEventListener('suspend', () => {
        // setShowFallback(true);
        // console.warn('Video was suspended, rendering fallback image.')
      })
    }
  }, [])

  if (resource && typeof resource === 'object') {
    const { url, filename, updatedAt, mimeType } = resource

    // Prefer Payload/S3-provided URL; fallback to API file endpoint.
    const src =
      (typeof url === 'string' && getMediaUrl(url, updatedAt)) ||
      (typeof filename === 'string' &&
        getMediaUrl(`/api/media/file/${encodeURIComponent(filename)}`, updatedAt)) ||
      undefined

    if (!src) return null

    return (
      <video
        autoPlay
        className={cn(videoClassName)}
        controls={false}
        loop
        muted
        onClick={onClick}
        playsInline
        ref={videoRef}
      >
        <source src={src} type={mimeType || undefined} />
      </video>
    )
  }

  return null
}
