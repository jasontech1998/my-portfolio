"use client"

import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [isHovered, setIsHovered] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const switchTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  const toggleTheme = () => {
    if (typeof document !== 'undefined' && 'startViewTransition' in document) {
      const doc = document as any
      doc.startViewTransition(() => switchTheme())
    } else {
      switchTheme()
    }
  }

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="relative rounded-full w-10 h-10">
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative rounded-full w-10 h-10"
      onClick={toggleTheme}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 90 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        >
          {theme === "light" ? (
            <SunIcon className="h-[1.2rem] w-[1.2rem]" />
          ) : (
            <MoonIcon className="h-[1.2rem] w-[1.2rem]" />
          )}
        </motion.div>
      </AnimatePresence>
      <motion.div
        className="absolute inset-0 bg-primary/10 rounded-full -z-10"
        initial={{ scale: 0 }}
        animate={{
          scale: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 17,
        }}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}