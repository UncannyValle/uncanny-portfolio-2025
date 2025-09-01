import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'

import type { ContentBlock as ContentBlockProps } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { motion, type Variants } from 'motion/react'

const CONTAINER_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { transition: { delayChildren: 0.8 } },
}

const ITEM_VARIANTS: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 12, filter: 'blur(6px' },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 400, damping: 32 },
  },
}

const COLS_SPAN_CLASSES = {
  full: '12',
  half: '6',
  oneThird: '4',
  twoThirds: '8',
}

export const ContentBlock: React.FC<ContentBlockProps> = (props) => {
  const { columns } = props

  return (
    <div className="container my-16">
      <motion.div
        className="grid grid-cols-4 lg:grid-cols-12 gap-y-8 gap-x-16"
        variants={CONTAINER_VARIANTS}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {columns &&
          columns.length > 0 &&
          columns.map((col, index) => {
            const { enableLink, link, richText, size } = col

            return (
              <motion.div
                className={cn(`col-span-4 lg:col-span-${COLS_SPAN_CLASSES[size!]}`, {
                  'md:col-span-2': size !== 'full',
                })}
                key={index}
                variants={ITEM_VARIANTS}
              >
                {richText && <RichText data={richText} enableGutter={false} />}

                {enableLink && <CMSLink {...link} />}
              </motion.div>
            )
          })}
      </motion.div>
    </div>
  )
}
