'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'
import { cn } from '@/utilities/ui'
import { ModeToggle } from '@/components/ThemeToggle'
import { motion } from 'motion/react'

type HeaderNavProps = { data: HeaderType; className?: string }

export const HeaderNav: React.FC<HeaderNavProps> = ({ data, className }) => {
  const navItems = data?.navItems || []
  const [activeIdx, setActiveIdx] = React.useState<number | null>(null)

  return (
    <nav className={cn('flex gap-3 items-center justify-end', className)}>
      {navItems.map(({ link }, i) => {
        return (
          <motion.div
            key={i}
            className="relative inline-block px-1"
            initial="rest"
            animate={activeIdx === i ? 'hover' : 'rest'}
            whileHover="hover"
            onFocus={() => setActiveIdx(i)}
            onBlur={() => setActiveIdx(null)}
          >
            <CMSLink
              {...link}
              appearance="link"
              className="relative z-10 text-foreground hover:text-primary focus-visible:text-primary transition-colors"
            />
            <motion.span
              aria-hidden
              className="absolute left-1 right-1 -bottom-0.5 h-[2px] rounded bg-primary origin-left"
              variants={{
                rest: { scaleX: 0 },
                hover: { scaleX: 1 },
              }}
              transition={{ type: 'spring', stiffness: 420, damping: 30 }}
            />
          </motion.div>
        )
      })}
      <Link href="/search">
        <span className="sr-only">Search</span>
        <SearchIcon className="w-5 text-primary" />
      </Link>
      <ModeToggle />
    </nav>
  )
}
