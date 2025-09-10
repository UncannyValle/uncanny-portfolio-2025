'use client'
import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'

import type { ContentBlock as ContentBlockProps } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { motion, type Variants } from 'motion/react'

// Parent container variants for a staggered reveal
const CONTAINER_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

// Child item variants
const ITEM_VARIANTS: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
    scale: 0.96,
    filter: 'blur(4px)',
  },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      // base delay + per-item step
      delay: 0.2 + i * 0.1,
      type: 'spring',
      stiffness: 120,
      damping: 16,
    },
  }),
}

const COLS_SPAN_CLASSES = {
  full: '12',
  half: '6',
  oneThird: '4',
  twoThirds: '8',
}

export const ContentBlock: React.FC<ContentBlockProps> = (props) => {
  const { columns } = props

  console.log(columns)

  return (
    <div className="container my-16">
      <motion.div className="grid grid-cols-4 lg:grid-cols-12 gap-y-8 gap-x-16">
        {columns?.length
          ? columns.map((col, index) => {
              const { enableLink, link, richText } = col
              const size = col.size ?? 'full'
              const key = col?.id ?? index

              return (
                <motion.div
                  key={key}
                  variants={ITEM_VARIANTS}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  className={cn(`col-span-4 lg:col-span-${COLS_SPAN_CLASSES[size!]}`, {
                    'md:col-span-2': size !== 'full',
                  })}
                >
                  {richText && <RichText data={richText} enableGutter={false} />}
                  {enableLink && <CMSLink {...link} />}
                </motion.div>
              )
            })
          : null}
      </motion.div>
    </div>
  )
}

const item: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.96, filter: 'blur(4px)' },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      // base delay + index-based step
      delay: 0.2 + i * 0.1,
      type: 'spring',
      stiffness: 120,
      damping: 16,
    },
  }),
}

export function List({ items }: { items: string[] }) {
  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="grid gap-4"
    >
      {items.map((text, i) => (
        <motion.li key={text} custom={i} variants={item} className="rounded border p-4">
          {text}
        </motion.li>
      ))}
    </motion.ul>
  )
}
