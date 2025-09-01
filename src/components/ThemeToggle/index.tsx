'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { AnimatePresence, motion } from 'motion/react'

import { Button } from '@/components/ui/button'

export function ModeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])

  const handleThemeChange = () => {
    if ((resolvedTheme ?? theme) === 'light') {
      return setTheme('dark')
    }
    return setTheme('light')
  }

  const isDark = (resolvedTheme ?? theme) === 'dark'

  return (
    <Button variant="ghost" size="icon" onClick={handleThemeChange}>
      <div className="relative flex items-center justify-center" aria-hidden>
        <AnimatePresence initial={false} mode="wait">
          {mounted && !isDark && (
            <motion.span
              key="sun"
              initial={{ rotate: -90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              className="flex"
            >
              <Sun className="h-[1.2rem] w-[1.2rem]" />
            </motion.span>
          )}
          {mounted && isDark && (
            <motion.span
              key="moon"
              initial={{ rotate: 90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -90, scale: 0, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              className="flex absolute"
            >
              <Moon className="h-[1.2rem] w-[1.2rem]" />
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
