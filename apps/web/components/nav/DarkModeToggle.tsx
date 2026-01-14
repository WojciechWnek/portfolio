'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

import { Button } from '../ui/button'

export default function DarkModeToggle() {
  // Track if component is mounted to avoid SSR mismatch
  const [mounted, setMounted] = useState(false)
  // Track theme
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  // Only run on client
  useEffect(() => {
    // Check localStorage for saved theme
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      // Default to system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(prefersDark ? 'dark' : 'light')
    }

    setMounted(true)
  }, [])

  // Avoid rendering on server
  if (!mounted) return null

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    // Apply theme class to <html> or <body>
    document.documentElement.classList.remove(theme)
    document.documentElement.classList.add(newTheme)
  }

  return (
    <Button onClick={toggleTheme} size="icon">
      {theme === 'light' ? <Moon /> : <Sun />}
    </Button >
  )
}
