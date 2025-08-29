import React from 'react'
import type { ImageCarousel as ImageCarouselBlock, Media as MediaType } from '@/payload-types'
import { cn } from '@/utilities/ui'
import { Media } from '@/components/Media'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from '@/components/ui/carousel'

type Props = ImageCarouselBlock & {
  className?: string
  enableGutter?: boolean
  imgClassName?: string
}

export const ImageCarousel: React.FC<Props> = (props) => {
  const { media, className, enableGutter = true, imgClassName } = props

  const items: MediaType[] = Array.isArray(media)
    ? media.filter((m): m is MediaType => typeof m === 'object' && m !== null)
    : []

  if (!items.length) return null

  return (
    <div className={cn({ container: enableGutter }, className)}>
      <Carousel>
        <CarouselContent>
          {items.map((item, idx) => (
            <CarouselItem key={item.id ?? idx}>
              <Media
                imgClassName={cn('border border-border rounded-[0.8rem]', imgClassName)}
                resource={item}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
