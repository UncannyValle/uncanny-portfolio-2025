'use client'
import Link from 'next/link'
import React from 'react'

import type { Header } from '@/payload-types'

import { HeaderNav } from './Nav'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Menu as MenuIcon } from 'lucide-react'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b">
      <div className="container mx-auto py-4 flex items-center justify-between">
        <Link href="/">
          {/*<Logo loading="eager" priority="high" className="invert dark:invert-0" />*/}
          <p className="text-2xl md:text-3xl font-semibold text-foreground transition-colors ease-in duration-300 hover:text-primary">
            &lt;JulianValle.dev/&gt;
          </p>
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex">
          <HeaderNav data={data} />
        </div>
        {/* Mobile Hamburger + Drawer */}
        <div className="md:hidden">
          <Drawer>
            <DrawerTrigger
              aria-label="Open menu"
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-muted focus:outline-none"
            >
              <MenuIcon className="h-6 w-6" />
            </DrawerTrigger>
            <DrawerContent className="px-4 py-8">
              <DrawerHeader className="sr-only">
                <DrawerTitle>Mobile navigation</DrawerTitle>
              </DrawerHeader>
              <HeaderNav data={data} className="flex-col items-center gap-4" />
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  )
}
